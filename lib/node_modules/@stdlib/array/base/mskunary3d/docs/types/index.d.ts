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

import { Array3D } from '@stdlib/types/array';
import { Shape3D } from '@stdlib/types/ndarray';

/**
* Unary callback.
*
* @param value - array element
* @returns result
*/
type Unary<T, U> = ( value: T ) => U;

/**
* Applies a unary callback to elements in a three-dimensional nested input array according to elements in a three-dimensional nested mask array and assigns results to elements in a three-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
* -   An element in an input array is "masked" if the corresponding element in the mask array is non-zero.
*
* @param arrays - array containing one input nested array, an input nested mask array, and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var ones3d = require( `@stdlib/array/base/ones3d` );
* var zeros3d = require( `@stdlib/array/base/zeros3d` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 2, 2 ];
*
* var x = ones3d( shape );
* var y = zeros3d( shape );
*
* var mask = [ [ [ 0, 1 ], [ 0, 0 ] ] ];
*
* mskunary3d( [ x, mask, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ 10.0, 0.0 ], [ 10.0, 10.0 ] ] ]
*/
declare function mskunary3d<T = unknown, U = unknown>( arrays: [ Array3D<T>, Array3D<number>, Array3D<U> ], shape: Shape3D, fcn: Unary<T, U> ): void;


// EXPORTS //

export = mskunary3d;
