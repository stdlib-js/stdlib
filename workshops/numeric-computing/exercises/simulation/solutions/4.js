/* eslint-disable vars-on-top */
'use strict';

var path = require( 'path' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var createRandom = require( '@stdlib/random/base/randu' ).factory;
var floor = require( '@stdlib/math/base/special/floor' );


// FIXTURES //

var DB = require( './build/db.json' );

var filepath = path.join( __dirname, 'build', 'list.txt' );
var LIST = readFileSync( filepath, {
	'encoding': 'utf8'
});
LIST = LIST.split( /\r?\n/ );

// Create a seeded PRNG:
var randu = createRandom({
	'seed': 123456
});

/**
* Generates text.
*
* @private
* @param {PositiveInteger} len - text length (number of words)
* @returns {string} text
*/
function generate( len ) {
	var words;
	var list;
	var w1;
	var w2;
	var w3;
	var i;
	var j;

	i = floor( randu()*LIST.length );
	w1 = LIST[ i ];
	w2 = LIST[ i+1 ];
	words = [];
	for ( i = 0; i < len; i++ ) {
		words.push( w1 );
		list = DB[ w1+' '+w2 ];
		j = floor( randu()*list.length );
		w3 = list[ j ];
		w1 = w2;
		w2 = w3;
	}
	words.push( w2 );
	return words.join( ' ' );
} // end FUNCTION generate()

/**
* Main script.
*
* @private
*/
function main() {
	var maxLength;
	var text;
	var len;
	var i;

	maxLength = 25;
	for ( i = 0; i < 10; i++ ) {
		len = floor( randu()*maxLength );
		text = generate( len );
		console.log( text );
	}
}

main();
