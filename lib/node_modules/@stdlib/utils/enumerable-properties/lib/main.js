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

var keys = require( '@stdlib/utils/keys' );
var propertySymbols = require( '@stdlib/utils/property-symbols' );
var isEnumerable = require( '@stdlib/assert/is-enumerable-property' );


// MAIN //

/**
* Returns an array of an object's own enumerable property names and symbols.
*
* @param {*} value - input object
* @returns {Array} a list of own property enumerable names and symbols
*
* @example
* var obj = {
*     'beep': 'boop',
*     'foo': 3.14
* };
*
* var props = enumerableProperties( obj );
* // e.g., returns [ 'beep', 'foo' ]
*/
function enumerableProperties( value ) {
	var out;
	var tmp;
	var i;

	out = keys( value );
	tmp = propertySymbols( value );
	for ( i = 0; i < tmp.length; i++ ) {
		if ( isEnumerable( value, tmp[ i ] ) ) {
			out.push( tmp[ i ] );
		}
	}
	return out;
}


// EXPORTS //

module.exports = enumerableProperties;
