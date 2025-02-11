/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { Array1D, Array2D, Array3D, Array4D } from '@stdlib/types/array';
import { Shape1D, Shape2D, Shape3D, Shape4D } from '@stdlib/types/ndarray';

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
* Input array.
*/
type InputArray<T> = Array1D<T> | Array2D<T> | Array3D<T> | Array4D<T>;

/**
* Input array shape.
*/
type InputArrayShape = Shape1D | Shape2D | Shape3D | Shape4D;

/**
* Output array.
*/
type OutputArray<T> = Array4D<T>;

/**
* Output array shape.
*/
type OutputArrayShape = Shape4D;

/**
* Input and output arrays.
*/
type InOutArrays<T, U, V, W, X> = [
	InputArray<T>,
	InputArray<U>,
	InputArray<V>,
	InputArray<W>,
	OutputArray<X>
];

/**
* Input and output array shapes.
*/
type InOutShapes = [
	InputArrayShape,
	InputArrayShape,
	InputArrayShape,
	InputArrayShape,
	OutputArrayShape
];

/**
* Applies a quaternary callback to elements in four broadcasted input arrays and assigns results to elements in a four-dimensional nested output array.
*
* ## Notes
*
* -   The input array shapes must be broadcast compatible with the output array shape.
*
* @param arrays - array containing four input nested arrays and one output nested array
* @param shapes - array shapes
* @param fcn - quaternary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add4' );
* var ones4d = require( '@stdlib/array/base/ones4d' );
* var zeros4d = require( '@stdlib/array/base/zeros4d' );
*
* var shapes = [
*     [ 1, 3, 1, 1 ],
*     [ 1, 1, 3, 1 ],
*     [ 1, 1, 1, 3 ],
*     [ 1, 1, 1, 1 ],
*     [ 1, 3, 3, 3 ]
* ];
*
* var x = ones4d( shapes[ 0 ] );
* var y = ones4d( shapes[ 1 ] );
* var z = ones4d( shapes[ 2 ] );
* var w = ones4d( shapes[ 3 ] );
* var out = zeros4d( shapes[ 4 ] );
*
* bquaternary4d( [ x, y, z, w, out ], shapes, add );
*
* console.log( out );
* // => [ [ [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ], [ [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ], [ 4.0, 4.0, 4.0 ] ] ] ]
*/
declare function bquaternary4d<T = unknown, U = unknown, V = unknown, W = unknown, X = unknown>( arrays: InOutArrays<T, U, V, W, X>, shapes: InOutShapes, fcn: Quaternary<T, U, V, W, X> ): void;


// EXPORTS //

export = bquaternary4d;
