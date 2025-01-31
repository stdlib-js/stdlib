/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var hasProperty = require( '@stdlib/assert/has-property' );
var isCartesianIndexString = require( './is_cartesian_index_string.js' );
var isArrayIndexString = require( './is_ndindex_string.js' );
var isIntegerString = require( './is_integer_string.js' );
var setCartesian = require( './set_cartesian.js' );
var setElement = require( './set_element.js' );
var setValue = require( './set_value.js' );
var setSlice = require( './set_slice.js' );


// MAIN //

/**
* Returns a trap for setting property values.
*
* @private
* @param {Object} ctx - context object
* @param {string} ctx.dtype - ndarray data type
* @param {boolean} ctx.strict - boolean indicating whether to enforce strict bounds checking
* @param {Function} ctx.validator - function for validating new values
* @param {(Function|null)} ctx.preSetElement - function for normalizing new values (if necessary)
* @param {Function} ctx.prop2slice - function for converting an indexing expression to a slice
* @returns {Function} handler
*/
function factory( ctx ) {
	return set;

	/**
	* Trap for setting property values.
	*
	* @private
	* @param {Object} target - target object
	* @param {(string|symbol)} property - property name
	* @param {*} value - new value
	* @param {Object} receiver - the proxy object or an object inheriting from the proxy
	* @throws {Error} invalid slice operation
	* @throws {RangeError} number of slice dimensions must match the number of ndarray dimensions
	* @throws {Error} assigned value must be broadcast compatible with output ndarray view
	* @throws {TypeError} assigned value cannot be safely cast to the output ndarray data type
	* @returns {boolean} boolean indicating whether assignment succeeded
	*/
	function set( target, property, value, receiver ) {
		var out;
		if ( hasProperty( target, property ) || !isString( property ) ) {
			return setValue( target, property, value, ctx );
		}
		if ( isIntegerString( property ) ) {
			return setElement( target, property, value, ctx );
		}
		if ( isCartesianIndexString( property ) ) {
			return setCartesian( target, property, value, ctx );
		}
		if ( isArrayIndexString( property ) ) {
			// FIXME
			return false;
		}
		out = setSlice( target, property, value, receiver, ctx );
		if ( out ) {
			return out;
		}
		// If we were unsuccessful (e.g., due to an invalid subsequence, etc), set the "property" in the same way as would any normal property (e.g., if an indexing expression is an invalid subsequence, assign as would a regular property: `i = 'a:b:c'` => `x[i] = 1` => `v = x[i]` => `v === 1`):
		return setValue( target, property, value, ctx );
	}
}


// EXPORTS //

module.exports = factory;
