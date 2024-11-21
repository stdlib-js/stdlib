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

var ctorName = require( '@stdlib/utils/constructor-name' );
var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
var CTORS = require( './ctors.js' );
var NAMES = require( './names.json' );


// MAIN //

/**
* Tests if a value is a complex typed array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a complex typed array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var bool = isComplexTypedArray( new Complex128Array( 10 ) );
* // returns true
*/
function isComplexTypedArray( value ) {
	var v;
	var i;

	if ( typeof value !== 'object' || value === null ) {
		return false;
	}
	// Check for complex typed array objects from the same realm (same Node.js `vm` or same `Window` object)...
	for ( i = 0; i < CTORS.length; i++ ) {
		if ( value instanceof CTORS[ i ] ) {
			return true;
		}
	}
	// Walk the prototype tree until we find an object having a desired class...
	while ( value ) {
		v = ctorName( value );
		for ( i = 0; i < NAMES.length; i++ ) {
			if ( NAMES[ i ] === v ) {
				return true;
			}
		}
		value = getPrototypeOf( value );
	}

	return false;
}


// EXPORTS //

module.exports = isComplexTypedArray;
