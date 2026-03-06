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

var resolve = require( 'path' ).resolve;
var glob = require( 'glob' ).sync;
var cwd = require( '@stdlib/process/cwd' );
var copy = require( '@stdlib/utils/copy' );
var DEFAULTS = require( './defaults.json' );
var validate = require( './validate.js' );
var linter = require( './lint.js' );
var IGNORE = require( './ignore_patterns.json' );


// MAIN //

/**
* Synchronously lints filenames.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for files
* @param {string} [options.pattern='**\/*'] - filename pattern
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {(ObjectArray|EmptyArray)} list of lint errors
*
* @example
* var errs = lint();
* // returns [...]
*/
function lint( options ) {
	var pattern;
	var names;
	var opts;
	var err;
	var dir;

	opts = copy( DEFAULTS );
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.dir ) {
		dir = resolve( cwd(), opts.dir );
	} else {
		dir = cwd();
	}
	pattern = opts.pattern;

	opts = {
		'cwd': dir,
		'ignore': IGNORE,
		'nodir': true // do not match directories
	};
	names = glob( pattern, opts );
	return linter( names );
}


// EXPORTS //

module.exports = lint;
