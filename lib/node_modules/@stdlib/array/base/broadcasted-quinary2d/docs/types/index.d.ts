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

import { Array1D, Array2D } from '@stdlib/types/array';
import { Shape1D, Shape2D } from '@stdlib/types/ndarray';

/**
* Quinary callback.
*
* @param v1 - element from first input array
* @param v2 - element from second input array
* @param v3 - element from third input array
* @param v4 - element from fourth input array
* @param v5 - element from fifth input array
* @returns result
*/
type Quinary<T, U, V, W, X, Y> = ( v1: T, v2: U, v3: V, v4: W, v5: X ) => Y;

/**
* Input array.
*/
type InputArray<T> = Array1D<T> | Array2D<T>;

/**
* Input array shape.
*/
type InputArrayShape = Shape1D | Shape2D;

/**
* Output array.
*/
type OutputArray<T> = Array2D<T>;

/**
* Output array shape.
*/
type OutputArrayShape = Shape2D;

/**
* Input and output arrays.
*/
type InOutArrays<T, U, V, W, X, Y> = [
	InputArray<T>,
	InputArray<U>,
	InputArray<V>,
	InputArray<W>,
	InputArray<X>,
	OutputArray<Y>
];

/**
* Input and output array shapes.
*/
type InOutShapes = [
	InputArrayShape,
	InputArrayShape,
	InputArrayShape,
	InputArrayShape,
	InputArrayShape,
	OutputArrayShape
];

/**
* Applies a quinary callback to elements in five broadcasted input arrays and assigns results to elements in a two-dimensional nested output array.
*
* ## Notes
*
* -   The input array shapes must be broadcast compatible with the output array shape.
*
* @param arrays - array containing five input nested arrays and one output nested array
* @param shapes - array shapes
* @param fcn - quinary callback
*
* @example
* var ones2d = require( '@stdlib/array/base/ones2d' );
* var zeros2d = require( '@stdlib/array/base/zeros2d' );
*
* function add( x, y, z, w, v ) {
*     return x + y + z + w + v;
* }
*
* var shapes = [
*     [ 1, 2 ],
*     [ 2, 1 ],
*     [ 1, 1 ],
*     [ 2, 2 ],
*     [ 1, 1 ],
*     [ 2, 2 ]
* ];
*
* var x = ones2d( shapes[ 0 ] );
* var y = ones2d( shapes[ 1 ] );
* var z = ones2d( shapes[ 2 ] );
* var w = ones2d( shapes[ 3 ] );
* var v = ones2d( shapes[ 4 ] );
* var out = zeros2d( shapes[ 5 ] );
*
* bquinary2d( [ x, y, z, w, v, out ], shapes, add );
*
* console.log( out );
* // => [ [ 5.0, 5.0 ], [ 5.0, 5.0 ] ]
*/
declare function bquinary2d<T = unknown, U = unknown, V = unknown, W = unknown, X = unknown, Y = unknown>( arrays: InOutArrays<T, U, V, W, X, Y>, shapes: InOutShapes, fcn: Quinary<T, U, V, W, X, Y> ): void;


// EXPORTS //

export = bquinary2d;
