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
* Compute the inverse cotangent of a single-precision floating-point number.
*
* @module @stdlib/math/base/special/acotf
*
* @example
* var acotf = require( '@stdlib/math/base/special/acotf' );
*
* var v = acotf( 2.0 );
* // returns ~0.4636
*
* v = acotf( 0.0 );
* // returns ~1.5708
*
* v = acotf( 0.5 );
* // returns ~1.1071
*
* v = acotf( 1.0 );
* // returns ~0.7854
*
* v = acotf( NaN );
* // returns NaN
*
* v = acotf( Infinity );
* // returns 0.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
