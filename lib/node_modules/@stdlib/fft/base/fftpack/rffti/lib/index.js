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
* Initialize a workspace array for performing a real-valued Fourier transform.
*
* @module @stdlib/fft/base/fftpack/rffti
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var rffti = require( '@stdlib/fft/base/fftpack/rffti' );
*
* var N = 8;
* var workspace = new Float64Array( ( 2*N ) + 34 );
*
* var out = rffti( N, workspace, 1, 0 );
* // returns <Float64Array>
*
* var bool = ( out === workspace );
* // returns true
*
* var twiddleFactors = workspace.slice( N, 2*N );
* // returns <Float64Array>[ 0, ~0.707, ~0.707, 0, 0, 0, 0, 0 ]
*
* var factors = workspace.slice( 2*N, ( 2*N ) + 4 );
* // returns <Float64Array>[ 8, 2, 2, 4 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
