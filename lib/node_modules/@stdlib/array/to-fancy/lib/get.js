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
var isIntegerString = require( './is_integer_string.js' );
var getElement = require( './get_element.js' );
var getValue = require( './get_value.js' );
var getSlice = require( './get_slice.js' );


// MAIN //

/**
* Returns a trap for retrieving property values.
*
* @private
* @param {Object} ctx - context object
* @param {Function} ctx.getter - accessor for retrieving array elements
* @param {boolean} ctx.strict - boolean indicating whether to enforce strict bounds checking
* @param {Function} ctx.ctor - proxied array constructor
* @param {Function} ctx.postGetSlice - function to process a retrieved slice
* @returns {Function} handler
*/
function factory( ctx ) {
	return get;

	/**
	* Trap for retrieving property values.
	*
	* @private
	* @param {Object} target - target object
	* @param {(string|symbol)} property - property name
	* @param {Object} receiver - the proxy object or an object inheriting from the proxy
	* @throws {Error} invalid slice operation
	* @throws {RangeError} slice exceeds array bounds
	* @returns {*} result
	*/
	function get( target, property, receiver ) {
		if ( isIntegerString( property ) ) {
			return getElement( target, property, ctx );
		}
		if ( hasProperty( target, property ) || !isString( property ) ) {
			return getValue( target, property, receiver, ctx );
		}
		return getSlice( target, property, receiver, ctx );
	}
}


// EXPORTS //

module.exports = factory;
