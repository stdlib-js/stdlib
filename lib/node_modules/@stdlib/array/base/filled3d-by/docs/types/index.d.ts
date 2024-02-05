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

import { Collection } from '@stdlib/types/array';
import { Shape3D } from '@stdlib/types/ndarray';

/**
* Nullary callback function.
*
* @returns fill value
*/
type Nullary<T, V> = ( this: V ) => T;

/**
* Unary callback function.
*
* @param indices - current array element indices
* @returns fill value
*/
type Unary<T, V> = ( this: V, indices: Array<number> ) => T;

/**
* Callback function.
*
* @param indices - current array element indices
* @returns fill value
*/
type Callback<T, V> = Nullary<T, V> | Unary<T, V>;

/**
* Three-dimensional nested array.
*/
type Array3D<T> = Array<Array<Array<T>>>;

/**
* Returns a filled three-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var constantFunction = require( '@stdlib/utils/constant-function' );
*
* var arr = filled3dBy( [ 1, 1, 5 ], constantFunction( 1.0 ) );
* // returns [ [ [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ] ]
*/
declare function filled3dBy<T = unknown, V = unknown>( shape: Shape3D, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array3D<T>;


// EXPORTS //

export = filled3dBy;
