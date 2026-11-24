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
* Compute the number of representable half-precision floating-point values that separate two half-precision floating-point numbers along the real number line.
*
* @module @stdlib/number/float16/base/ulp-difference
*
* @example
* var EPS = require( '@stdlib/constants/float16/eps' );
* var ulpdiff = require( '@stdlib/number/float16/base/ulp-difference' );
*
* var d = ulpdiff( 1.0, 1.0+EPS );
* // returns 1.0
*
* d = ulpdiff( 1.0+EPS, 1.0 );
* // returns 1.0
*
* d = ulpdiff( 1.0, 1.0+EPS+EPS );
* // returns 2.0
*
* d = ulpdiff( 1.0, NaN );
* // returns NaN
*
* d = ulpdiff( NaN, 1.0 );
* // returns NaN
*
* d = ulpdiff( NaN, NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
