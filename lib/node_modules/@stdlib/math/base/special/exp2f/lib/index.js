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
* Evaluate the base `2` exponential function in single-precision floating-point format.
*
* @module @stdlib/math/base/special/exp2f
*
* @example
* var exp2f = require( '@stdlib/math/base/special/exp2f' );
*
* var v = exp2f( 3.0 );
* // returns 8.0
*
* v = exp2f( -9.0 );
* // returns ~0.002
*
* v = exp2f( 0.0 );
* // returns 1.0
*
* v = exp2f( NaN );
* // returns NaN
*/

// MODULES //

var exp2f = require( './main.js' );


// EXPORTS //

module.exports = exp2f;
