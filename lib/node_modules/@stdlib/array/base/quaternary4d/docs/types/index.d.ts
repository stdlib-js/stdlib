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

import { Array4D } from '@stdlib/types/array';
import { Shape4D } from '@stdlib/types/ndarray';

/**
* Quaternary callback.
*
* @param v1 - element from first input array
* @param v2 - element from second input array
* @param v3 - element from third input array
* @param v4 - element from fourth input array
* @returns result
*/
type Quaternary<T, U, V, W, X> = ( v1: T, v2: U, v3: V, v4: W ) => X;

/**
* Applies a quaternary callback to elements in four four-dimensional nested input arrays and assigns results to elements in a four-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing four input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - quaternary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add4' );
* var ones4d = require( '@stdlib/array/base/ones4d' );
* var zeros4d = require( '@stdlib/array/base/zeros4d' );
*
* var shape = [ 1, 1, 2, 2 ];
*
* var x = ones4d( shape );
* var y = ones4d( shape );
* var z = ones4d( shape );
* var w = ones4d( shape );
* var out = zeros4d( shape );
*
* quaternary4d( [ x, y, z, w, out ], shape, add );
*
* console.log( out );
* // => [ [ [ [ 4.0, 4.0 ], [ 4.0, 4.0 ] ] ] ]
*/
declare function quaternary4d<T = unknown, U = unknown, V = unknown, W = unknown, X = unknown>( arrays: [ Array4D<T>, Array4D<U>, Array4D<V>, Array4D<W>, Array4D<X> ], shape: Shape4D, fcn: Quaternary<T, U, V, W, X> ): void;


// EXPORTS //

export = quaternary4d;
