/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';

/**
* Computes the covariance of two one-dimensional ndarrays provided known means and using a one-pass textbook algorithm.
*
* ## Notes
*
* -   The function expects the following ndarrays in order:
*
*     -   first one-dimensional input ndarray.
*     -   second one-dimensional input ndarray.
*     -   a zero-dimensional ndarray specifying the degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the covariance according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment and `N` corresponds to the number of elements in each input ndarray. When computing the population covariance, setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample covariance, setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
*     -   a zero-dimensional ndarray specifying the mean of the first one-dimensional ndarray.
*     -   a zero-dimensional ndarray specifying the mean of the second one-dimensional ndarray.
*
* @param arrays - array-like object containing input ndarrays
* @returns covariance
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var opts = {
*     'dtype': 'generic'
* };
*
* var xbuf = [ 1.0, -2.0, 2.0 ];
* var x = new ndarray( opts.dtype, xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 2.0, -2.0, 1.0 ];
* var y = new ndarray( opts.dtype, ybuf, [ 3 ], [ 1 ], 0, 'row-major' );
*
* var correction = scalar2ndarray( 1.0, opts );
* var meanx = scalar2ndarray( 1.0/3.0, opts );
* var meany = scalar2ndarray( 1.0/3.0, opts );
*
* var v = covarmtk( [ x, y, correction, meanx, meany ] );
* // returns ~3.8333
*/
declare function covarmtk<T extends ndarray = ndarray>( arrays: [ T, T, T, T, T ] ): number;


// EXPORTS //

export = covarmtk;
