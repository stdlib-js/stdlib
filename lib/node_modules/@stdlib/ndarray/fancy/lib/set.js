/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var hasProperty = require( './has_property.js' );
var setValue = require( './set_value.js' );
var setSlice = require( './set_slice.js' );


// MAIN //

/**
* Returns a trap for setting property values.
*
* @private
* @param {Function} prop2slice - function for converting an indexing expression to a slice
* @returns {Function} handler
*/
function factory( prop2slice ) {
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
	* @throws {RangeError} number of slice dimensions must match the number of array dimensions
	* @throws {Error} assigned value must be broadcast compatible with output array view
	* @throws {TypeError} assigned value cannot be safely cast to the output array data type
	* @returns {boolean} boolean indicating whether assignment succeeded
	*/
	function set( target, property, value, receiver ) {
		if ( hasProperty( property ) ) {
			return setValue( target, property, value );
		}
		return setSlice( target, property, value, receiver, prop2slice );
	}
}


// EXPORTS //

module.exports = factory;
