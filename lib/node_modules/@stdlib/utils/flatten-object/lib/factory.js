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

var isObjectLike = require( '@stdlib/assert/is-object-like' );
var format = require( '@stdlib/string/format' );
var defaults = require( './defaults.js' );
var validate = require( './validate.js' );
var flatten = require( './flatten.js' );


// MAIN //

/**
* Returns a function to flatten an object.
*
* @param {Options} options - function options
* @param {NonNegativeInteger} [options.depth] - maximum depth to flatten
* @param {boolean} [options.copy=false] - boolean indicating whether to deep copy
* @param {boolean} [options.flattenArrays=false] - boolean indicating whether to flatten arrays
* @param {string} [options.delimiter='.'] - key path delimiter
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} flatten function
*
* @example
* var flatten = factory({
*     'copy': true,
*     'delimiter': '|'
* });
*
* var obj = {'a':{'b':{'c':'d'}}};
* var out = flatten( obj );
* // throws <RangeError>
*/
function factory( options ) {
	var opts;
	var err;

	opts = defaults();
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	return flattenObject;

	/**
	* Flattens an object.
	*
	* @private
	* @param {ObjectLike} obj - object to flatten
	* @throws {TypeError} first argument must be object-like
	* @returns {Object} flattened object
	*/
	function flattenObject( obj ) {
		if ( !isObjectLike( obj ) ) {
			throw new TypeError( format( 'invalid argument. Must provide an object (except null). Value: `%s`.', obj ) );
		}
		return flatten( obj, opts );
	}
}


// EXPORTS //

module.exports = factory;
