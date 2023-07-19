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
var isObjectLike = require( '@stdlib/assert/is-object-like' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );
var defaults = require( './defaults.js' );
var dset = require( './dset.js' );


// MAIN //

/**
* Creates a reusable deep set function.
*
* @param {(string|Array)} path - key path
* @param {Options} [options] - function options
* @param {boolean} [options.create=false] - boolean indicating whether to create a path if the key path does not already exist
* @param {string} [options.sep='.'] - key path separator
* @throws {TypeError} first argument must be a string or key array
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} deep set function
*
* @example
* var dset = factory( 'a/b/c', {
*     'create': true,
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
		throw new TypeError( format( 'invalid argument. Key path must be a string or a key array. Value: `%s`.', path ) );
	}
	opts = defaults();
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
	return deepSet;

	/**
	* Sets a nested property.
	*
	* @private
	* @param {ObjectLike} obj - input object
	* @param {*} value - value to set
	* @returns {boolean} boolean indicating if the property was successfully set
	*
	* @example
	* var obj = { 'a': { 'b': { 'c': 'd' } } };
	* var bool = dset( obj, 'beep' );
	*/
	function deepSet( obj, value ) {
		if ( isObjectLike( obj ) ) {
			return dset( obj, props, opts.create, value );
		}
		return false;
	}
}


// EXPORTS //

module.exports = factory;
