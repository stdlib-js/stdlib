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
* Compute the binomial coefficient as a single-precision floating-point number.
*
* @module @stdlib/math/base/special/binomcoeff
*
* @example
* var binomcoeff = require( '@stdlib/math/base/special/binomcoeff' );
*
* var v = binomcoeff( 8, 2 );
* // returns 28
*
* v = binomcoeff( 0, 0 );
* // returns 1
*
* v = binomcoeff( -4, 2 );
* // returns 10
*
* v = binomcoeff( 5, 3 );
* // returns 10
*
* v = binomcoeff( NaN, 3 );
* // returns NaN
*
* v = binomcoeff( 5, NaN );
* // returns NaN
*
* v = binomcoeff( NaN, NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
