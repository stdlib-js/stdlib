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

import { Collection } from '@stdlib/types/object';

/**
* Nullary callback function.
*
* @returns fill value
*/
type Nullary<T> = () => T;

/**
* Unary callback function.
*
* @param indices - current array element indices
* @returns fill value
*/
type Unary<T> = ( indices: Array<number> ) => T;

/**
* Callback function.
*
* @param indices - current array element indices
* @returns fill value
*/
type Callback<T> = Nullary<T> | Unary<T>;

/**
* Returns a filled two-dimensional nested array according to a provided callback function.
*
* @param shape - array shape
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var arr = filled2dBy( [ 1, 5 ], constantFunction( 1.0 ) );
* // returns [ [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ]
*/
declare function filled2dBy<T = unknown>( shape: Collection<number>, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): Array<Array<T>>;


// EXPORTS //

export = filled2dBy;
