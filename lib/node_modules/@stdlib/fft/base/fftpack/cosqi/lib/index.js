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
* Initialize a workspace array for performing a quarter-wave cosine transform.
*
* @module @stdlib/fft/base/fftpack/cosqi
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var cosqi = require( '@stdlib/fft/base/fftpack/cosqi' );
*
* var N = 8;
* var workspace = new Float64Array( ( 3*N ) + 34 );
*
* var out = cosqi( N, workspace, 1, 0 );
* // returns <Float64Array>
*
* var bool = ( out === workspace );
* // returns true
*
* var cosineTable = workspace.slice( 0, N );
* // returns <Float64Array>[ ~0.98, ~0.92, ~0.83, ~0.7, ~0.56, ~0.38, ~0.2, ~0.0 ]
*
* var twiddleFactors = workspace.slice( 2*N, 3*N );
* // returns <Float64Array>[ 0, ~0.707, ~0.707, 0, 0, 0, 0, 0 ]
*
* var factors = workspace.slice( 3*N, ( 3*N ) + 4 );
* // returns <Float64Array>[ 8, 2, 2, 4 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
