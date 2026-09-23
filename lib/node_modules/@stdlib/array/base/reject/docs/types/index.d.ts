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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @returns boolean indicating whether an element passes a test
*/
type Nullary<ThisArg> = ( this: ThisArg ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an element passes a test
*/
type Unary<T, ThisArg> = ( this: ThisArg, value: T ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @returns boolean indicating whether an element passes a test
*/
type Binary<T, ThisArg> = ( this: ThisArg, value: T, index: number ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Ternary<T, U, ThisArg> = ( this: ThisArg, value: T, index: number, arr: U ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Predicate<T, U, ThisArg> = Nullary<ThisArg> | Unary<T, ThisArg> | Binary<T, ThisArg> | Ternary<T, U, ThisArg>;

/**
* Returns a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.
*
* @param x - input array
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns output array
*
* @example
* var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, -3.0, 4.0 ] );
*
* var out = reject( x, isPositiveNumber );
* // returns [ -2.0, -3.0 ]
*/
declare function reject<T = unknown, U extends InputArray<T> = InputArray<T>, ThisArg = unknown>( x: U, predicate: Predicate<T, U, ThisArg>, thisArg?: ThisParameterType<Predicate<T, U, ThisArg>> ): Array<T>;


// EXPORTS //

export = reject;
