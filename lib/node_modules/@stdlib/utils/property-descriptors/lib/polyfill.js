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

var propertyNames = require( '@stdlib/utils/property-names' );
var propertySymbols = require( '@stdlib/utils/property-symbols' );
var propertyDescriptor = require( '@stdlib/utils/property-descriptor' );
var defineProperty = require( '@stdlib/utils/define-property' );


// MAIN //

/**
* Returns an object's own property descriptors.
*
* ## Notes
*
* -   In contrast to the built-in `Object.getOwnPropertyDescriptors()`, this function returns an empty object if provided `undefined` or `null`, rather than throwing an error.
*
* @private
* @param {*} value - input object
* @returns {Object} property descriptors
*
* @example
* var obj = {
*     'beep': 'boop',
*     'foo': 3.14
* };
*
* var desc = getOwnPropertyDescriptors( obj, 'foo' );
* // returns {...}
*/
function getOwnPropertyDescriptors( value ) {
	var symbols;
	var names;
	var desc;
	var out;
	var i;

	out = {};

	// Get the value's own enumerable and non-enumerable properties:
	names = propertyNames( value );

	// For each property name, retrieve the property descriptor...
	for ( i = 0; i < names.length; i++ ) {
		desc = propertyDescriptor( value, names[ i ] );
		if ( desc ) {
			// The following is equivalent to `out[ names[i] ] = desc`, but accounts for the possibility of a "poisoned" `Object` prototype (i.e., an `Object.prototype` having a property with a setter which throws).
			defineProperty( out, names[ i ], {
				'configurable': true,
				'enumerable': true,
				'writable': true,
				'value': desc
			});
		}
	}

	// Get the value's symbol properties:
	symbols = propertySymbols( value );

	// For each symbol property, retrieve the property descriptor...
	for ( i = 0; i < symbols.length; i++ ) {
		desc = propertyDescriptor( value, symbols[ i ] );
		if ( desc ) {
			// The following is equivalent to `out[ symbols[i] ] = desc`, but accounts for the possibility of a "poisoned" `Object` prototype (i.e., an `Object.prototype` having a property with a setter which throws).
			defineProperty( out, symbols[ i ], {
				'configurable': true,
				'enumerable': true,
				'writable': true,
				'value': desc
			});
		}
	}

	return out;
}


// EXPORTS //

module.exports = getOwnPropertyDescriptors;
