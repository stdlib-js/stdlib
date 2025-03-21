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

import { Array2D } from '@stdlib/types/array';

/**
* Returns an element from a two-dimensional nested array.
*
* @param x - input array
* @param i0 - first dimension index
* @param i1 - second dimension index
* @returns nested array element
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var v = at2d( x, 0, 1 );
* // returns 2
*
* v = at2d( x, 1, 0 );
* // returns 3
*
* v = at2d( x, -2, -2 );
* // returns 1
*/
declare function at2d<T = unknown>( x: Array2D<T>, i0: number, i1: number ): T | void;


// EXPORTS //

export = at2d;
