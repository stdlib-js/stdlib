'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:readme-to-html' );
var resolve = require( 'path' ).resolve;
var exec = require( 'child_process' ).exec;
var writeFile = require( 'fs' ).writeFile;
var mustache = require( 'mustache' );
var prefix = require( './stdlib.js' );
var isString = require( prefix+'@stdlib/utils/is-string' ).isPrimitive;
var isFunction = require( prefix+'@stdlib/utils/is-function' );
var exists = require( prefix+'@stdlib/fs/exists' );
var cwd = require( prefix+'@stdlib/utils/cwd' );
var copy = require( prefix+'@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var template = require( './html_template.js' );
var styles = require( './styles.js' );


// MAIN //

/**
* Converts a README to HTML.
*
* @param {string} file - input file path
* @param {Options} [options] - options
* @param {string} [options.out] - output file path
* @param {string} [options.title] - HTML title
* @param {string} [options.tests] - tests URL
* @param {string} [options.benchmarks] - benchmarks URL
* @param {boolean} [options.fragment] - output an HTML fragment
* @param {string} [options.prepend] - content to prepend to HTML body
* @param {string} [options.append] - content to append to HTML body
* @param {string} [options.head] - content to insert into HTML head
* @param {Callback} clbk - callback to invoke after converting README
* @throws {TypeError} first argument must be a string
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
*/
function convert( file, options, clbk ) {
	var prepend;
	var append;
	var opts;
	var head;
	var err;
	var src;
	var dir;
	var out;
	var cb;

	if ( !isString( file ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `'+file+'`.' );
	}
	opts = copy( defaults );
	if ( arguments.length < 3 ) {
		cb = options;
	} else {
		cb = clbk;
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `'+cb+'`.' );
	}
	dir = cwd();
	debug( 'Current working directory: %s', dir );

	src = resolve( dir, file );
	debug( 'Source filepath: %s', src );

	if ( opts.out ) {
		out = resolve( dir, opts.out );
		debug( 'Destination filepath: %s', out );
	}
	if ( !opts.fragment ) {
		head = styles.slice();
		if ( opts.head ) {
			head.push( opts.head );
		}
		prepend = [ opts.prepend ];
		append = [ opts.append ];
	}
	debug( 'Testing if source file exists...' );
	exists( src, onExists );

	/**
	* Callback invoked upon testing for file existence.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - boolean indicating if a file exists
	*/
	function onExists( error, bool ) {
		var opts;
		var cmd;
		if ( !bool ) {
			debug( 'Source file does not exist.' );
			return done();
		}
		cmd = 'pandoc';
		cmd += ' --from=markdown';
		cmd += ' --to=html5';
		cmd += ' --no-highlight';
		cmd += ' '+src;

		debug( 'Converting file to HTML...' );
		opts = {
			'cwd': __dirname
		};
		debug( 'Command: %s', cmd );
		exec( cmd, opts, onExec );
	} // end FUNCTION onExists()

	/**
	* Callback invoked when a child process terminates.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Buffer} stdout - standard output
	* @param {Buffer} stderr - standard error
	*/
	function onExec( error, stdout, stderr ) {
		var wopts;
		var view;
		var html;
		var head;
		if ( error ) {
			debug( 'Encountered an error when converting file: %s', error.message );
			return done( error );
		}
		debug( 'Command stderr: %s', stderr.toString() );
		debug( 'Successfully converted file.' );

		html = stdout.toString();
		if ( !opts.fragment ) {
			view = {
				'title': opts.title,
				'tests': opts.tests,
				'benchmarks': opts.benchmarks,
				'head': head,
				'prepend': prepend,
				'append': append
			};
			debug( 'Render options: %s', JSON.stringify( view ) );

			view.readme = html;

			debug( 'Rendering...' );
			html = mustache.render( template, view );
			debug( 'Finished rendering.' );
		}
		if ( out === void 0 ) {
			return done( null, html );
		}
		debug( 'Writing to file...' );
		wopts = {
			'encoding': 'utf8'
		};
		writeFile( out, html, wopts, onWrite );
	} // end FUNCTION onExec()

	/**
	* Callback invoked upon writing to file.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onWrite( error ) {
		if ( error ) {
			debug( 'Encountered an error when writing to file: %s', error.message );
			return done( error );
		}
		debug( 'Successfully wrote to file.' );
		done();
	} // end FUNCTION onWrite()

	/**
	* Callback invoked once finished.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {string} html - rendered HTML
	*/
	function done( error, html ) {
		if ( error ) {
			return cb( error );
		}
		if ( html ) {
			return cb( null, html );
		}
		cb();
	} // end FUNCTION done()
} // end FUNCTION convert()


// EXPORTS //

module.exports = convert;
