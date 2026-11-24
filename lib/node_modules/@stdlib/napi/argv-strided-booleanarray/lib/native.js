/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var isBooleanArray = require( '@stdlib/assert/is-booleanarray' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-boolean' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Wrapper function exposing the C API to JavaScript.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {BooleanArray} v - input array
* @param {integer} stride - stride length
* @returns {BooleanArray} input array
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new BooleanArray( 5 );
*
* wrapper( x.length, x, 1 );
*/
function wrapper( N, v, stride ) {
	if ( isBooleanArray( v ) ) {
		addon( N, reinterpret( v, 0 ), stride );
	} else {
		addon( N, v, stride );
	}
	return v;
}


// EXPORTS //

module.exports = wrapper;
