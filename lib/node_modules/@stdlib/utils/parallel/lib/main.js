/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var path = require( 'path' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isFunction = require( '@stdlib/assert/is-function' );
var format = require( '@stdlib/string/format' );
var cwd = require( '@stdlib/process/cwd' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var exec = require( './node' );


// MAIN //

/**
* Executes scripts in parallel.
*
* @param {StringArray} files - script file paths
* @param {Options} [options] - function options
* @param {string} [options.cmd='node'] - executable file/command
* @param {PositiveInteger} [options.concurrency] - number of scripts to execute concurrently
* @param {PositiveInteger} [options.workers] - number of workers
* @param {boolean} [options.ordered=false] - boolean indicating whether to preserve the order of script output
* @param {NonNegativeInteger} [options.uid] - process user identity
* @param {NonNegativeInteger} [options.gid] - process group identity
* @param {NonNegativeInteger} [options.maxBuffer=200*1024*1024] - max child process `stdio` buffer size
* @param {Callback} clbk - callback to invoke after executing all scripts
* @throws {TypeError} first argument must be an array of strings
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
*
* @example
* var files = [ './a.js', './b.js ' ];
*
* var opts = {
*     'workers': 3,
*     'concurrency': 3
* };
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* parallel( files, opts, done );
*/
function parallel() {
	var options;
	var files;
	var opts;
	var clbk;
	var err;
	var dir;
	var i;

	files = arguments[ 0 ];
	if ( !isStringArray( files ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array of strings. Value: `%s`.', files ) );
	}
	files = files.slice();
	opts = defaults();
	if ( arguments.length > 2 ) {
		options = arguments[ 1 ];
		clbk = arguments[ 2 ];
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	} else {
		clbk = arguments[ 1 ];
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', clbk ) );
	}
	// Prevent the number of concurrent scripts exceeding the number of actual scripts to run.
	if ( opts.concurrency > files.length ) {
		opts.concurrency = files.length;
	}
	// Prevent the number of workers exceeding the number of concurrent scripts (excess capacity), as some workers would never be allocated scripts to run and always be idle.
	if ( opts.workers > opts.concurrency ) {
		opts.workers = opts.concurrency;
	}
	// Resolve any relative paths to absolute paths...
	dir = cwd();
	for ( i = 0; i < files.length; i++ ) {
		files[ i ] = path.resolve( dir, files[ i ] );
	}
	exec( files, opts, done );

	/**
	* Callback invoked after executing all scripts.
	*
	* @private
	* @param {Error} error - error object
	* @returns {void}
	*/
	function done( error ) {
		if ( error ) {
			return clbk( error );
		}
		clbk();
	}
}


// EXPORTS //

module.exports = parallel;
