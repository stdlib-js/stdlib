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
* Unary callback.
*
* @param value - array element
* @returns result
*/
type Unary<T, U> = ( value: T ) => U;

/**
* Applies a unary callback to elements in a four-dimensional nested input array and assigns results to elements in a four-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing one input nested array and one output nested array
* @param shape - array shape
* @param fcn - unary callback
*
* @example
* var ones4d = require( `@stdlib/array/base/ones4d` );
* var zeros4d = require( `@stdlib/array/base/zeros4d` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 2, 2 ];
*
* var x = ones4d( shape );
* var y = zeros4d( shape );
*
* unary4d( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
*/
declare function unary4d<T = unknown, U = unknown>( arrays: [ Array4D<T>, Array4D<U> ], shape: Shape4D, fcn: Unary<T, U> ): void;


// EXPORTS //

export = unary4d;
