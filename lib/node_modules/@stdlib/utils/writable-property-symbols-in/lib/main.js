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

var getOwnPropertySymbols = require( '@stdlib/utils/property-symbols' );
var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
var isWritableProperty = require( '@stdlib/assert/is-writable-property' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Returns an array of an object's own and inherited writable symbol properties.
*
* @param {*} value - input object
* @returns {Array} a list of own and inherited writable symbol properties
*
* @example
* var symbols = writablePropertySymbolsIn( {} );
*/
function writablePropertySymbolsIn( value ) {
	var symbols;
	var cache;
	var obj;
	var tmp;
	var k;
	var i;

	if ( value === null || value === void 0 ) {
		return [];
	}
	// Cast the value to an object:
	obj = Object( value );

	// Walk the prototype chain collecting all writable symbol properties...
	symbols = [];
	cache = {};
	do {
		tmp = getOwnPropertySymbols( obj );
		for ( i = 0; i < tmp.length; i++ ) {
			k = tmp[ i ];
			if (
				hasOwnProp( cache, k ) === false &&
				isWritableProperty( obj, k )
			) {
				symbols.push( k );
			}
			cache[ k ] = true;
		}
		obj = getPrototypeOf( obj );
	} while ( obj );

	return symbols;
}


// EXPORTS //

module.exports = writablePropertySymbolsIn;
