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

var getOwnPropertyNames = require( '@stdlib/utils/property-names' );
var isNonEnumerableProperty = require( '@stdlib/assert/is-nonenumerable-property' );


// MAIN //

/**
* Returns an array of an object's own non-enumerable property names.
*
* @param {*} value - input object
* @returns {Array} a list of own non-enumerable property names
*
* @example
* var defineProperty = require( '@stdlib/utils/define-property' );
*
* var obj = {};
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': false,
*     'writable': false,
*     'value': 'boop'
* });
*
* var keys = nonEnumerablePropertyNames( obj );
* // returns [ 'beep' ]
*/
function nonEnumerablePropertyNames( value ) { // eslint-disable-line id-length
	var names;
	var i;
	var n;

	if ( value === null || value === void 0 ) {
		return [];
	}
	names = getOwnPropertyNames( Object( value ) );
	n = 0;
	for ( i = 0; i < names.length; i++ ) {
		if ( isNonEnumerableProperty( value, names[ i ] ) ) {
			names[ n ] = names[ i ];
			n += 1;
		}
	}
	names.length = n;

	return names;
}


// EXPORTS //

module.exports = nonEnumerablePropertyNames;
