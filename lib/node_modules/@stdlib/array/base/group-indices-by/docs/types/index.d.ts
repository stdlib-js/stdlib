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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Object key.
*/
type Key = string | symbol | number;

/**
* Specifies which group an element in the input array belongs to.
*
* @returns object key
*/
type Nullary<U> = ( this: U ) => Key;

/**
* Specifies which group an element in the input array belongs to.
*
* @param value - current array element
* @returns object key
*/
type Unary<T, U> = ( this: U, value: T ) => Key;

/**
* Specifies which group an element in the input array belongs to.
*
* @param value - current array element
* @param index - current array element index
* @returns object key
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => Key;

/**
* Specifies which group an element in the input array belongs to.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns object key
*/
type Ternary<T, U> = ( this: U, value: T, index: number, arr: Collection<T> ) => Key;

/**
* Specifies which group an element in the input array belongs to.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns object key
*/
type Indicator<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Interface describing returned group results.
*/
interface IndicesResults<T> {
	/**
	* Object properties.
	*/
	[key: Key]: Array<T>;
}

/**
* Groups element indices according to an indicator function.
*
* @param x - input array
* @param indicator - indicator function specifying which group an element in the input array belongs to
* @param thisArg - indicator function execution context
* @returns group results
*
* @example
* function indicator( v ) {
*     return v[ 0 ];
* }
*
* var x = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = groupIndicesBy( x, indicator );
* // returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
*/
declare function groupIndicesBy<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, indicator: Indicator<T, U>, thisArg?: ThisParameterType<Indicator<T, U>> ): IndicesResults<number>;


// EXPORTS //

export = groupIndicesBy;
