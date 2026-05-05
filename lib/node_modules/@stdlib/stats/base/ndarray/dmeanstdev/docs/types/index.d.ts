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

import { float64ndarray, typedndarray } from '@stdlib/types/ndarray';

/**
* Computes the mean and standard deviation of a one-dimensional double-precision floating-point ndarray.
*
* @param arrays - array-like object containing an input ndarray, an output ndarray, and ndarray containing the degrees of freedom adjustment
* @returns output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var opts = {
*     'dtype': 'float64'
* };
*
* var xbuf = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var x = new ndarray( opts.dtype, xbuf, [ 4 ], [ 2 ], 1, 'row-major' );
*
* var out = new ndarray( opts.dtype, new Float64Array( 2 ), [ 2 ], [ 1 ], 0, 'row-major' );
*
* var correction = scalar2ndarray( 1.0, opts );
*
* var v = dmeanstdev( [ x, out, correction ] );
* // returns <ndarray>[ ~1.25, ~2.5 ]
*/
declare function dmeanstdev<T extends typedndarray<number> = typedndarray<number>>( arrays: [ float64ndarray, float64ndarray, T ] ): float64ndarray;


// EXPORTS //

export = dmeanstdev;
