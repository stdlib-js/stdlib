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
* Compute the forward discrete Fourier transform (DFT) of a real-valued one-dimensional double-precision floating-point ndarray.
*
* @module @stdlib/fft/base/fftpack/ndarray/float64/rfftf
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var rffti = require( '@stdlib/fft/base/fftpack/ndarray/float64/rffti' );
* var rfftf = require( '@stdlib/fft/base/fftpack/ndarray/float64/rfftf' );
*
* var N = 4;
* var len = scalar2ndarray( N, {
*     'dtype': 'int32'
* });
*
* var w = new Float64Vector( ( 2*N ) + 34 );
* rffti( [ w, len ] );
*
* var r = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var out = rfftf( [ r, w ] );
* // returns <ndarray>[ 10.0, -2.0, 2.0, -2.0 ]
*
* var bool = ( out === r );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
