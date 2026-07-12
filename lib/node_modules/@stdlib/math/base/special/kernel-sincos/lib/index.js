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
* Simultaneously compute the sin and cosine of an angle measured in radians on the interval `[-π/4, π/4]`.
*
* @module @stdlib/math/base/special/kernel-sincos
*
* @example
* var kernelSincos = require( '@stdlib/math/base/special/kernel-sincos' );
*
* var v = kernelSincos( 0.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~0.0, ~1.0 ]
*
* var v = kernelSincos( 3.141592653589793/2.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~1.0, ~0.0 ]
*
* var v = kernelSincos( -3.141592653589793/6.0, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ ~-0.5, ~0.866 ]
*
* var v = kernelSincos( NaN, 0.0, [ 0.0, 0.0 ], 1, 0 );
* // returns [ NaN, NaN ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
