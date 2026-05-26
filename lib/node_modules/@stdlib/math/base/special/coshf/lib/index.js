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
* Compute the hyperbolic cosine of a single-precision floating-point number.
*
* @module @stdlib/math/base/special/coshf
*
* @example
* var coshf = require( '@stdlib/math/base/special/coshf' );
*
* var v = coshf( 0.0 );
* // returns 1.0
*
* v = coshf( 2.0 );
* // returns ~3.762
*
* v = coshf( -2.0 );
* // returns ~3.762
*
* v = coshf( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
