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

var format = require( '@stdlib/string/format' );


// VARIABLES //

var hasOwnProp = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {Object} [options.pkg] - package meta information (package.json)
* @param {string} [options.version] - command-line interface version
* @param {string} [options.help] - help text
* @param {(string|boolean)} [options.title] - process title or a boolean indicating whether to set the process title
* @param {boolean} [options.updates] - boolean indicating whether to check if a command-line interface is an outdated version
* @param {Array} [options.argv] - command-line arguments
* @param {Options} [options.options] - command-line interface options
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'pkg': {},
*     'version': '1.0.0',
*     'help': 'Usage: beep [options] <boop>',
*     'title': 'foo',
*     'updates': true
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( typeof options !== 'object' || options === null || isArray( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp.call( options, 'pkg' ) ) {
		opts.pkg = options.pkg;
		if ( typeof opts.pkg !== 'object' || opts.pkg === null || isArray( opts.pkg ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be an object. Option: `%s`.', 'pkg', opts.pkg ) );
		}
	}
	if ( hasOwnProp.call( options, 'help' ) ) {
		opts.help = options.help;
		if ( typeof opts.help !== 'string' ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'help', opts.help ) );
		}
	}
	if ( hasOwnProp.call( options, 'version' ) ) {
		opts.version = options.version;
		if ( typeof opts.version !== 'string' ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'version', opts.version ) );
		}
	}
	if ( hasOwnProp.call( options, 'title' ) ) {
		opts.title = options.title;
		if ( typeof opts.title !== 'string' && typeof opts.title !== 'boolean' ) {
			return new TypeError( format( 'invalid option. `%s` option must be either a string or boolean primitive. Option: `%s`.', 'title', opts.title ) );
		}
	}
	if ( hasOwnProp.call( options, 'updates' ) ) {
		opts.updates = options.updates;
		if ( typeof opts.updates !== 'boolean' ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'updates', opts.updates ) );
		}
	}
	if ( hasOwnProp.call( options, 'argv' ) ) {
		opts.argv = options.argv;
		if ( !isArray( opts.argv ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be an array. Option: `%s`.', 'argv', opts.argv ) );
		}
	}
	if ( hasOwnProp.call( options, 'options' ) ) {
		opts.options = options.options;
		if ( typeof opts.options !== 'object' || opts.options === null || isArray( opts.options ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a plain object. Option: `%s`.', 'options', opts.options ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
