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
* Compute the value of `sin(πx)` in single-precision floating-point format.
*
* @module @stdlib/math/base/special/sinpif
*
* @example
* var sinpif = require( '@stdlib/math/base/special/sinpif' );
*
* var y = sinpif( 0.0 );
* // returns 0.0
*
* y = sinpif( 0.5 );
* // returns 1.0
*
* y = sinpif( 0.9 );
* // returns ~0.309
*
* y = sinpif( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
