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
* Return a string giving the literal bit representation of an unsigned 32-bit integer.
*
* @module @stdlib/number/uint32/base/to-binary-string
*
* @example
* var toBinaryString = require( '@stdlib/number/uint32/base/to-binary-string' );
* var a = new Uint32Array( [ 1, 4, 9 ] );
*
* var str = toBinaryString( a[0] );
* // returns '00000000000000000000000000000001'
*
* str = toBinaryString( a[1] );
* // returns '00000000000000000000000000000100'
*
* str = toBinaryString( a[2] );
* // returns '00000000000000000000000000001001'
*/

// MODULES //

var toBinaryString = require( './main.js' );


// EXPORTS //

module.exports = toBinaryString;
