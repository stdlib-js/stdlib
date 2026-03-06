/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { Array2D } from '@stdlib/types/array';
import { Shape2D } from '@stdlib/types/ndarray';

/**
* Binary callback.
*
* @param v1 - element from first input array
* @param v2 - element from second input array
* @returns result
*/
type Binary<T, U, V> = ( v1: T, v2: U ) => V;

/**
* Applies a binary callback to elements in two two-dimensional nested input arrays according to elements in a two-dimensional nested mask array and assigns results to elements in a two-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
* -   An element in an input array is "masked" if the corresponding element in the mask array is non-zero.
*
* @param arrays - array containing two input nested arrays, an input nested mask array, and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var ones2d = require( '@stdlib/array/base/ones2d' );
* var zeros2d = require( '@stdlib/array/base/zeros2d' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var shape = [ 2, 2 ];
*
* var x = ones2d( shape );
* var y = ones2d( shape );
* var z = zeros2d( shape );
*
* var mask = [ [ 0, 1 ], [ 0, 0 ] ];
*
* mskbinary2d( [ x, y, mask, z ], shape, add );
*
* console.log( z );
* // => [ [ 2.0, 0.0 ], [ 2.0, 2.0 ] ]
*/
declare function mskbinary2d<T = unknown, U = unknown, V = unknown>( arrays: [ Array2D<T>, Array2D<U>, Array2D<number>, Array2D<V> ], shape: Shape2D, fcn: Binary<T, U, V> ): void;


// EXPORTS //

export = mskbinary2d;
