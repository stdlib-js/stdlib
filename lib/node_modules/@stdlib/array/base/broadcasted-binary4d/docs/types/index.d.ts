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

import { Array1D, Array2D, Array3D, Array4D } from '@stdlib/types/array';
import { Shape1D, Shape2D, Shape3D, Shape4D } from '@stdlib/types/ndarray';

/**
* Binary callback.
*
* @param v1 - element from first input array
* @param v2 - element from second input array
* @returns result
*/
type Binary<T, U, V> = ( v1: T, v2: U ) => V;

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
type InOutArrays<T, U, V> = [
	InputArray<T>,
	InputArray<U>,
	OutputArray<V>
];

/**
* Input and output array shapes.
*/
type InOutShapes = [
	InputArrayShape,
	InputArrayShape,
	OutputArrayShape
];

/**
* Applies a binary callback to elements in two broadcasted input arrays and assigns results to elements in a four-dimensional nested output array.
*
* ## Notes
*
* -   The input array shapes must be broadcast compatible with the output array shape.
*
* @param arrays - array containing two input nested arrays and one output nested array
* @param shapes - array shapes
* @param fcn - binary callback
*
* @example
* var ones4d = require( '@stdlib/array/base/ones4d' );
* var zeros4d = require( '@stdlib/array/base/zeros4d' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var shapes = [
*     [ 1, 1, 1, 2 ],
*     [ 1, 2, 1, 1 ],
*     [ 1, 2, 2, 2 ]
* ];
*
* var x = ones4d( shapes[ 0 ] );
* var y = ones4d( shapes[ 1 ] );
* var z = zeros4d( shapes[ 2 ] );
*
* bbinary4d( [ x, y, z ], shapes, add );
*
* console.log( z );
* // => [ [ [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ],  [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ] ] ]
*/
declare function bbinary4d<T = unknown, U = unknown, V = unknown>( arrays: InOutArrays<T, U, V>, shapes: InOutShapes, fcn: Binary<T, U, V> ): void;


// EXPORTS //

export = bbinary4d;
