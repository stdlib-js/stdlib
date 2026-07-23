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

import { Shape2D } from '@stdlib/types/ndarray';

/**
* Two-dimensional nested array.
*/
type Array2D<T> = Array<Array<T>>;

/**
* Returns a filled two-dimensional nested array.
*
* @param value - fill value
* @param shape - array shape
* @returns output array
*
* @example
* var out = filled2d( 0.0, [ 1, 3 ] );
* // returns [ [ 0.0, 0.0, 0.0 ] ]
*
* @example
* var out = filled2d( 'beep', [ 1, 3 ] );
* // returns [ [ 'beep', 'beep', 'beep' ] ]
*/
declare function filled2d<T = unknown>( value: T, shape: Shape2D ): Array2D<T>;


// EXPORTS //

export = filled2d;
