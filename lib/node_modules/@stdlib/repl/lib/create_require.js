/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

/*
* WARNING: this is based an internal file within Node.js. The implementation uses private methods exposed on the `Module` object. Given that they are private, breakage is possible.
*
* [1]: https://github.com/nodejs/node/blob/0c1e93b9efadfc9fae74907a631908477c7d085e/lib/internal/modules/cjs/helpers.js#L10
*/

// MODULES //

var Module = require( 'module' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// VARIABLES //

/* eslint-disable no-underscore-dangle */
var resolveFilename = Module._resolveFilename;
var resolveLookupPaths = Module._resolveLookupPaths;
var extensions = Module._extensions;
var cache = Module._cache;
var main = require.main;

/* eslint-enable no-underscore-dangle */


// MAIN //

/**
* Returns a `require` function.
*
* @private
* @param {Module} module - module used as the context for `require`
* @returns {Function} require function
*/
function createRequire( module ) {
	/**
	* Attempts to load a module.
	*
	* @private
	* @param {string} path - module id
	* @returns {*} module
	*/
	function require( path ) {
		return module.require( path );
	}

	/**
	* Attempts to resolve a module.
	*
	* @private
	* @param {string} name - module
	* @param {Object} [options] - options
	* @throws {TypeError} first argument must be a string
	* @returns {string} module filepath
	*/
	function resolve( name, options ) {
		if ( !isString( name ) ) {
			throw new TypeError( 'invalid argument. First argument must be a string. Value: `' + name + '`.' );
		}
		return resolveFilename( name, module, false, options );
	}

	/**
	* Attempts to resolve look-up paths.
	*
	* @private
	* @param {string} name - module
	* @throws {TypeError} must provide a string
	* @returns {(StringArray|null)} resolved paths
	*/
	function paths( name ) {
		if ( !isString( name ) ) {
			throw new TypeError( 'invalid argument. Must provide a string. Value: `' + name + '`.' );
		}
		return resolveLookupPaths( name, module, true );
	}

	// Script entry point when Node.js process launched:
	require.main = main;

	// Attach method to resolve a module:
	resolve.paths = paths;
	require.resolve = resolve;

	// Support for extra extension types:
	require.extensions = extensions;

	// Use the existing module cache:
	require.cache = cache;

	return require;
}


// EXPORTS //

module.exports = createRequire;
