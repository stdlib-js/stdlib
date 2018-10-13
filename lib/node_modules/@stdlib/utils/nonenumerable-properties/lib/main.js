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
var isNonEnumerable = require( '@stdlib/assert/is-nonenumerable-property' );


// MAIN //

/**
* Returns an array of an object's own non-enumerable property names and symbols.
*
* @param {*} value - input object
* @returns {Array} a list of own non-enumerable property names and symbols
*
* @example
* var defineProperty = require( '@stdlib/utils/define-property' );
*
* var obj = {};
*
* obj.a = 'a';
* defineProperty( obj, 'b', {
*     'configurable': false,
*     'enumerable': false,
*     'writable': false,
*     'value': 'b'
* });
*
* var props = nonEnumerableProperties( obj );
* // returns [ 'b' ]
*/
function nonEnumerableProperties( value ) {
	var out;
	var tmp;
	var n;
	var i;

	out = propertyNames( value );
	n = 0;
	for ( i = 0; i < out.length; i++ ) {
		if ( isNonEnumerable( value, out[ i ] ) ) {
			out[ n ] = out[ i ];
			n += 1;
		}
	}
	out.length = n;

	tmp = propertySymbols( value );
	for ( i = 0; i < tmp.length; i++ ) {
		if ( isNonEnumerable( value, tmp[ i ] ) ) {
			out.push( tmp[ i ] );
		}
	}
	return out;
}


// EXPORTS //

module.exports = nonEnumerableProperties;
