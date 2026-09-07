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
* Test if two half-precision floating-point numbers are approximately equal within a specified number of ULPs (units in the last place).
*
* @module @stdlib/number/float16/base/assert/is-almost-equal
*
* @example
* var EPS = require( '@stdlib/constants/float16/eps' );
* var isAlmostEqual = require( '@stdlib/number/float16/base/assert/is-almost-equal' );
*
* var bool = isAlmostEqual( 1.0, 1.0+EPS, 1 );
* // returns true
*
* bool = isAlmostEqual( 1.0+EPS, 1.0, 1 );
* // returns true
*
* bool = isAlmostEqual( 1.0, 1.0+EPS+EPS, 1 );
* // returns false
*
* bool = isAlmostEqual( 1.0, 1.0+EPS, 0 );
* // returns false
*
* bool = isAlmostEqual( 0.0, -0.0, 0 );
* // returns true
*
* bool = isAlmostEqual( 1.0, NaN, 1 );
* // returns false
*
* bool = isAlmostEqual( NaN, NaN, 1 );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
