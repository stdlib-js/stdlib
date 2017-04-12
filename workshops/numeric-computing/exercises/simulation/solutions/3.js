'use strict';

var path = require( 'path' );
var fs = require( 'fs' );
var splitStream = require( '@stdlib/streams/utils/split' );
var joinStream = require( '@stdlib/streams/utils/join' );
var transformStream = require( '@stdlib/streams/utils/transform' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );

// Create a directory to store artifacts:
fs.mkdirSync( path.join( __dirname, 'build' ) );

// Create a file read stream:
var filepath = path.resolve( __dirname, './build/text.txt' );
var source = fs.createReadStream( filepath, {
	'encoding': 'utf8'
});

// Create a file write stream:
filepath = path.resolve( __dirname, './build/list.txt' );
var toFile = fs.createWriteStream(
	filepath, {
		'defaultEncoding': 'utf8'
	}
);

// Create a split stream to split tab delimited data:
var tabSplit = splitStream({
	'sep': /\t+/
});

// Create a split stream to split newline delimited data (including trailing spaces):
var newlineSplit = splitStream({
	'sep': /(?:\r?\n\s?)+/
});

// Create a split stream to split multi-space delimited data:
var spacesSplit = splitStream({
	'sep': /\s{2,}/
});

// Create a split stream to split space delimited data:
var spaceSplit = splitStream({
	'sep': /\s+/
});

// Create a join stream to create space-delimited data:
var spaceJoin = joinStream({
	'sep': ' '
});

// Create a join stream which concatenates streamed data:
var join = joinStream({
	'sep': ''
});

/**
* Returns a transform stream for compiling a digram database.
*
* @private
* @returns {TransformStream} transform stream
*/
function createTransform() {
	var buffer;
	var db;

	buffer = [];
	db = {};

	/**
	* Update the database.
	*
	* @private
	* @param {string} val - new word
	*/
	function update( val ) {
		var key;
		if ( buffer.length < 2 ) {
			buffer.push( val );
			return;
		}
		// Concat the first two buffer elements to generate a key:
		key = buffer.shift() + ' ' + buffer[ 0 ];

		// Append the new chunk to the buffer:
		buffer.push( val );

		// If the key does not exist, create it; otherwise, just push onto the stack...
		if ( hasOwnProp( db, key ) ) {
			db[ key ].push( val );
		} else {
			db[ key ] = [ val ];
		}
	}

	/**
	* Transform function, which updates the database and forwards newline delimited data to downstream consumers.
	*
	* @private
	* @param {(string|Buffer)} chunk - chunk
	* @param {(string|null)} enc - encoding
	* @param {Callback} clbk - callback to invoke upon processing a chunk
	*/
	function transform( chunk, enc, clbk ) {
		var val = chunk.toString();
		update( val );
		return clbk( null, val+'\n' );
	}

	/**
	* Callback invoked upon stream close, which writes the database to file.
	*
	* @private
	* @param {Callback} clbk - callback to invoke upon finishing flush tasks
	*/
	function flush( clbk ) {
		var filepath;

		console.log( 'Flushing...' );

		// Write the dictionary to file:
		filepath = path.resolve( __dirname, './build/db.json' );
		fs.writeFileSync( filepath, JSON.stringify( db ), {
			'encoding': 'utf8'
		});
		clbk();
	}

	return transformStream({
		'transform': transform,
		'flush': flush,
		'objectMode': true
	});
}

// Create the pipeline:
source
	.pipe( tabSplit )     // split
	.pipe( join )         // join
	.pipe( newlineSplit ) // split
	.pipe( spaceJoin )    // join
	.pipe( spacesSplit )  // split
	.pipe( spaceJoin )    // join
	.pipe( spaceSplit )   // split
	.pipe( createTransform() )
	.pipe( toFile );

