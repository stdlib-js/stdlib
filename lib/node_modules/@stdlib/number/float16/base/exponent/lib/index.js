/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Return an integer corresponding to the unbiased exponent of a half-precision floating-point number.
*
* @module @stdlib/number/float16/base/exponent
*
* @example
* var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
* var exponent = require( '@stdlib/number/float16/base/exponent' );
*
* var exp = exponent( toFloat16( 3.14e4 ) ); // => 2**15 ≈ 3.27e4
* // returns 15
*
* exp = exponent( toFloat16( 3.14e-4 ) ); // => 2**-12 ≈ 2.44e-4
* // returns -12
*
* exp = exponent( toFloat16( -3.14 ) );
* // returns 1
*
* exp = exponent( 0.0 );
* // returns -15
*
* exp = exponent( NaN );
* // returns 16
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
