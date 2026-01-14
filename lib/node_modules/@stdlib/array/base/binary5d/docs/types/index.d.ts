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

import { Array5D } from '@stdlib/types/array';
import { Shape5D } from '@stdlib/types/ndarray';

/**
* Binary callback.
*
* @param v1 - element from first input array
* @param v2 - element from second input array
* @returns result
*/
type Binary<T, U, V> = ( v1: T, v2: U ) => V;

/**
* Applies a binary callback to elements in two five-dimensional nested input arrays and assigns results to elements in a five-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - binary callback
*
* @example
* var ones5d = require( '@stdlib/array/base/ones5d' );
* var zeros5d = require( '@stdlib/array/base/zeros5d' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var shape = [ 1, 1, 2, 2, 2 ];
*
* var x = ones5d( shape );
* var y = ones5d( shape );
* var z = zeros5d( shape );
*
* binary5d( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ], [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ] ]
*/
declare function binary5d<T = unknown, U = unknown, V = unknown>( arrays: [ Array5D<T>, Array5D<U>, Array5D<V> ], shape: Shape5D, fcn: Binary<T, U, V> ): void;


// EXPORTS //

export = binary5d;
