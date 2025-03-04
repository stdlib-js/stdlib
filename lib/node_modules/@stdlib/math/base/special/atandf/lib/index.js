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
* Compute the tangent (in degrees) of a single-precision floating-point number.
*
* @module @stdlib/math/base/special/atandf
*
* @example
* var sqrtf = require( '@stdlib/math/base/special/sqrtf' );
* var atandf = require( '@stdlib/math/base/special/atandf' );
*
* var v = atandf( 0.0 );
* // returns 0.0
*
* var v = atandf( 0.5 );
* // returns ~26.57
*
* var v = atandf( 1.0 / sqrtf( 3.0 ) );
* // returns ~30.0
*
* var v = atandf( 1.0 );
* // returns 45.0
*
* var v = atandf( Infinity );
* // returns 90.0
*
* var v = atandf( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
