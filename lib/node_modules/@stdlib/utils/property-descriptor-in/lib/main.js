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

var getOwnPropertyDescriptor = require( '@stdlib/utils/property-descriptor' );
var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );


// MAIN //

/**
* Returns a property descriptor for an object's own or inherited property.
*
* ## Notes
*
* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if provided `undefined` or `null`, rather than throwing an error.
* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if an object does not have a provided property, rather than `undefined`.
*
* @private
* @param {*} value - input object
* @param {(string|symbol)} property - property
* @returns {(Object|null)} property descriptor or null
*
* @example
* var obj = {
*     'beep': 'boop',
*     'foo': 3.14
* };
*
* var desc = propertyDescriptorIn( obj, 'foo' );
* // returns {'configurable':true,'enumerable':true,'writable':true,'value':3.14}
*/
function propertyDescriptorIn( value, property ) {
	var desc;
	var obj;

	if ( value === null || value === void 0 ) {
		return null;
	}
	// Cast the value to an object:
	obj = Object( value );

	// Walk the prototype chain in search of a specified property...
	do {
		desc = getOwnPropertyDescriptor( obj, property );
		if ( desc ) {
			return desc;
		}
		obj = getPrototypeOf( obj );
	} while ( obj );

	return null;
}


// EXPORTS //

module.exports = propertyDescriptorIn;
