/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Compute the principal square root of a single-precision floating-point number.
*
* @module @stdlib/math/base/special/sqrtf
*
* @example
* var sqrtf = require( '@stdlib/math/base/special/sqrtf' );
*
* var v = sqrtf( 4.0 );
* // returns 2.0
*
* v = sqrtf( 9.0 );
* // returns 3.0
*
* v = sqrtf( 0.0 );
* // returns 0.0
*
* v = sqrtf( -4.0 );
* // returns NaN
*
* v = sqrtf( NaN );
* // returns NaN
*/

// MODULES //

var sqrtf = require( './main.js' );


// EXPORTS //

module.exports = sqrtf;
