/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Compute the arccotangent (in degrees) of a single-precision floating-point number.
*
* @module @stdlib/math/base/special/acotdf
*
* @example
* var sqrtf = require( '@stdlib/math/base/special/sqrtf' );
* var acotdf = require( '@stdlib/math/base/special/acotdf' );
*
* var v = acotdf( 0.0 );
* // returns 90.0
*
* v = acotdf( sqrtf( 3.0 ) );
* // returns ~30.0
*
* v = acotdf( 1.0 );
* // returns 45.0
*
* v = acotdf( sqrtf( 3.0 ) / 3.0 );
* // returns ~60.0
*
* v = acotdf( NaN );
* // returns NaN
*/


// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
