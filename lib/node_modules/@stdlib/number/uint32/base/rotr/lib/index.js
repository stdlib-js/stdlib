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

/**
* Bitwise rotation to the right.
*
* @module @stdlib/number/uint32/base/rotr
*
* @example
* var toBinaryStringUint32 = require( '@stdlib/number/uint32/base/to-binary-string' );
* var rotr32 = require( '@stdlib/number/uint32/base/rotr' );
*
* var bstr = toBinaryStringUint32( 2147483649 );
* // returns '10000000000000000000000000000001'
*
* var x = rotr32( 2147483649, 10 );
* // returns 6291456
*
* bstr = toBinaryStringUint32( x );
* // returns '00000000011000000000000000000000'
*/

// MODULES //

var rotr32 = require( './main.js' );


// EXPORTS //

module.exports = rotr32;
