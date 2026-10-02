/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex64Array } from '@stdlib/types/array';

/**
* Converts a real-valued single-precision floating-point array in FFTPACK half-complex format to a single-precision complex floating-point array.
*
* @param N - length of the original real sequence
* @param hc - input array in FFTPACK half-complex format
* @param strideHc - stride length for `hc`
* @param offsetHc - starting index for `hc`
* @param out - output complex array
* @param strideOut - stride length for `out`
* @param offsetOut - starting index for `out`
* @returns output complex array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Complex64Array = require( '@stdlib/array/complex64' );
* var floor = require( '@stdlib/math/base/special/floor' );
* var rffti = require( '@stdlib/fft/base/fftpack/float32/rffti' );
* var rfftf = require( '@stdlib/fft/base/fftpack/float32/rfftf' );
*
* var N = 4;
* var w = new Float32Array( ( 2*N ) + 34 );
* rffti( N, w, 1, 0 );
*
* var r = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* rfftf( N, r, 1, 0, w, 1, 0 );
* // r => <Float32Array>[ 10.0, -2.0, 2.0, -2.0 ]
*
* var out = new Complex64Array( floor( N/2 ) + 1 );
* hc2c( N, r, 1, 0, out, 1, 0 );
* // out => <Complex64Array>[ 10.0, 0.0, -2.0, 2.0, -2.0, 0.0 ]
*/
declare function hc2c( N: number, hc: Float32Array, strideHc: number, offsetHc: number, out: Complex64Array, strideOut: number, offsetOut: number ): Complex64Array;


// EXPORTS //

export = hc2c;
