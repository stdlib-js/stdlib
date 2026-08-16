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
* Initialize a workspace array for performing a sine transform.
*
* @module @stdlib/fft/base/fftpack/sinti
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var floor = require( '@stdlib/math/base/special/floor' );
* var sinti = require( '@stdlib/fft/base/fftpack/sinti' );
*
* var N = 7;
* var workspace = new Float64Array( floor( 2.5*N ) + 34 );
*
* var out = sinti( N, workspace, 1, 0 );
* // returns <Float64Array>
*
* var bool = ( out === workspace );
* // returns true
*
* var sineTable = workspace.slice( 0, floor( N/2 ) );
* // returns <Float64Array>[ ~0.765, ~1.414, ~1.848 ]
*
* var twiddleFactors = workspace.slice( floor( 3*N/2 ) + 1, floor( 5*N/2 ) + 2 );
* // returns <Float64Array>[ ~0.707, ~0.707, 0, 0, 0, 0, 0, 0 ]
*
* var factors = workspace.slice( floor( 5*N/2 ) + 2, floor( 5*N/2 ) + 2 + 4 );
* // returns <Float64Array>[ 8, 2, 2, 4 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
