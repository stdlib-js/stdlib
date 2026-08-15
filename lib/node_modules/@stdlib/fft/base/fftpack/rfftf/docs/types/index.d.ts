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

import { Collection } from '@stdlib/types/array';

/**
* Computes the forward discrete Fourier transform (DFT) of a real-valued sequence.
*
* @param N - length of the sequence to transform
* @param r - input array
* @param strideR - stride length for `r`
* @param offsetR - starting index for `r`
* @param w - workspace array containing pre-computed values
* @param strideW - stride length for `w`
* @param offsetW - starting index for `w`
* @returns input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var rffti = require( '@stdlib/fft/base/fftpack/rffti' );
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
declare function rfftf<T extends Collection<number>>( N: number, r: T, strideR: number, offsetR: number, w: Collection<number>, strideW: number, offsetW: number ): T;


// EXPORTS //

export = rfftf;
