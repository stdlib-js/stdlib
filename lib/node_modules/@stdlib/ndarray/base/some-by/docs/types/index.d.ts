/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import { typedndarray } from '@stdlib/types/ndarray';

/**
* Returns a boolean indicating whether an element passes a test.
*
* @returns boolean indicating whether an ndarray element passes a test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an ndarray element passes a test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param indices - current array element indices
* @returns boolean indicating whether an ndarray element passes a test
*/
type Binary<T, U> = ( this: U, value: T, indices: Array<number> ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns boolean indicating whether an ndarray element passes a test
*/
type Ternary<T, U> = ( this: U, value: T, indices: Array<number>, arr: typedndarray<T> ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns boolean indicating whether an ndarray element passes a test
*/
type Predicate<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Tests whether at least `n` elements in an ndarray pass a test implemented by a predicate function.
*
* @param arrays - array-like object containing an input ndarray and a zero-dimensional ndarray specifying the minimum number of elements in the input ndarray that must satisfy the predicate function
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns boolean indicating whether `n` elements pass a test
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* function predicate( value ) {
*    return value > 0.0;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Define the shape of the array:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create the input ndarray:
* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
* var n = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* // Test elements:
* var out = someBy( [ x, n ], predicate );
* // returns true
*/
declare function someBy<T = unknown, U = unknown>( arrays: [ typedndarray<T>, typedndarray<number>], predicate: Predicate<T, U>, thisArg?: ThisParameterType<Predicate<T, U>> ): boolean;


// EXPORTS //

export = someBy;
