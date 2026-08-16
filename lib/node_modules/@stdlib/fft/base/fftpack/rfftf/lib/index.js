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
* Compute the forward discrete Fourier transform (DFT) of a real-valued sequence.
*
* @module @stdlib/fft/base/fftpack/rfftf
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var rffti = require( '@stdlib/fft/base/fftpack/rffti' );
* var rfftf = require( '@stdlib/fft/base/fftpack/rfftf' );
*
* var N = 4;
*
* var w = new Float64Array( ( 2*N ) + 34 );
* rffti( N, w, 1, 0 );
*
* var r = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* rfftf( N, r, 1, 0, w, 1, 0 );
* // r => <Float64Array>[ 10.0, -2.0, 2.0, -2.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
