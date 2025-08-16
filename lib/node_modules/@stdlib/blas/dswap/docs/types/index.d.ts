/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import { float64ndarray } from '@stdlib/types/ndarray';

/**
* Interchanges two double-precision floating-point vectors.
*
* ## Notes
*
* -   For multi-dimensional input arrays, the function performs batched computation, such that the function interchanges each pair of vectors in `x` and `y` according to the specified dimension index.
* -   Both input arrays must have the same shape.
* -   Negative indices are resolved relative to the last array dimension, with the last dimension corresponding to `-1`.
*
* @param x - first input array
* @param y - second input array
* @param dim - dimension along which to interchange vectors (default: -1)
* @throws first argument must be a non-zero-dimensional ndarray containing double-precision floating-point numbers
* @throws second argument must be a non-zero-dimensional ndarray containing double-precision floating-point numbers
* @throws input arrays must have the same shape
* @returns `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
* var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );
*
* dswap( x, y );
*
* var xbuf = x.data;
* // returns <Float64Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]
*
* var ybuf = y.data;
* // returns <Float64Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
*/
declare function dswap( x: float64ndarray, y: float64ndarray, dim?: number ): float64ndarray;


// EXPORTS //

export = dswap;
