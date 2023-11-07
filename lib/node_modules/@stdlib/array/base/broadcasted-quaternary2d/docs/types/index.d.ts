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
* Quaternary callback.
*
* @param value - input value
* @returns result
*/
type Quaternary<T, U, V, W, X> = ( v1: T, v2: U, v3: V, v4: W ) => X;

/**
* Applies a quaternary callback to elements in four broadcasted input arrays and assigns results to elements in a two-dimensional nested output array.
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
* var ones2d = require( `@stdlib/array/base/ones2d` );
* var zeros2d = require( `@stdlib/array/base/zeros2d` );
*
* function add( x, y, z, w ) {
*     return x + y + z + w;
* }
*
* var shapes = [
*     [ 1, 2 ],
*     [ 2, 1 ],
*     [ 1, 1 ],
*     [ 2, 2 ],
*     [ 2, 2 ]
* ];
*
* var x = ones2d( shapes[ 0 ] );
* var y = ones2d( shapes[ 1 ] );
* var z = ones2d( shapes[ 2 ] );
* var w = ones2d( shapes[ 3 ] );
* var out = zeros2d( shapes[ 4 ] );
*
* bquaternary2d( [ x, y, z, w, out ], shapes, add );
*
* console.log( out );
* // => [ [ 4.0, 8.0 ], [ 12.0, 16.0 ] ]
*/
declare function bquaternary2d<T = unknown, U = unknown, V = unknown, W = unknown, X = unknown>( arrays: [ Array1D<T> | Array2D<T>, Array1D<U> | Array2D<U>, Array1D<V> | Array2D<V>, Array1D<W> | Array2D<W>, Array2D<X> ], shapes: [ Shape1D | Shape2D, Shape1D | Shape2D, Shape1D | Shape2D, Shape1D | Shape2D, Shape2D ], fcn: Quaternary<T, U, V, W, X> ): void;


// EXPORTS //

export = bquaternary2d;
