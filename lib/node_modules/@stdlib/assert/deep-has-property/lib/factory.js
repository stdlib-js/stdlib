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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isArray = require( '@stdlib/assert/is-array' );
var copy = require( '@stdlib/utils/copy' );
var validate = require( './validate.js' );
var defaults = require( './defaults.json' );
var has = require( './has.js' );


// MAIN //

/**
* Returns a function which tests whether an object has a nested key path, either own or inherited.
*
* @param {(string|Array)} path - key path
* @param {Options} [options] - function options
* @param {string} [options.sep='.'] - key path separator
* @throws {TypeError} first argument must be a string primitive or key array
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} function which tests whether an object has a nested key path
*
* @example
* var has = factory( 'a/b/c', {
*     'sep': '/'
* });
*/
function factory( path, options ) {
	var isStr;
	var props;
	var opts;
	var err;
	isStr = isString( path );
	if ( !isStr && !isArray( path ) ) {
		throw new TypeError( 'invalid argument. Key path must be a string primitive or a key array. Value: `' + path + '`.' );
	}
	opts = copy( defaults );
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( isStr ) {
		props = path.split( opts.sep );
	} else {
		props = path;
	}
	return deepHasProp;

	/**
	* Returns a boolean indicating whether an object has a nested key path, either own or inherited.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether an object has a nested property
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = deepHasProp( obj );
	*/
	function deepHasProp( value ) {
		if ( value === void 0 || value === null ) {
			return false;
		}
		return has( value, props );
	}
}


// EXPORTS //

module.exports = factory;
