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

/**
* Return a 32-bit unsigned integer corresponding to the low 32-bit word of a 64-bit unsigned integer.
*
* @module @stdlib/number/uint64/base/get-low-word
*
* @example
* var Uint64 = require( '@stdlib/number/uint64/ctor' );
* var getLowWord = require( '@stdlib/number/uint64/base/get-low-word' );
*
* var a = new Uint64( 4294967296 );
* var w = getLowWord( a );
* // returns 0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
