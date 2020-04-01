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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { NumericArray } from '@stdlib/types/array';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Computes the dot product of two vectors.
*
* ## Notes
*
* -   In general, for best performance, especially for large vectors, provide 1-dimensional `ndarrays` whose underlying data type is either `float64` or `float32`.
*
* @param x - first input array
* @param y - second input array
* @throws first argument must be either an array-like object or a 1-dimensional `ndarray`
* @throws second argument must be either an array-like object or a 1-dimensional `ndarray`
* @throws input arrays must be the same length
* @returns dot product
*
* @example
* var x = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
* var y = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
*
* var z = gdot( x, y );
* // returns -5.0
*/
declare function gdot( x: ndarray | NumericArray, y: ndarray | NumericArray ): number; // tslint:disable-line:max-line-length


// EXPORTS //

export = gdot;
