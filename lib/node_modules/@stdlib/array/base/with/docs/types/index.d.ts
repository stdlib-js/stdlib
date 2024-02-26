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

import { Collection, AccessorArrayLike, Complex128Array, Complex64Array } from '@stdlib/types/array';

/**
* Returns a new array after updating an index into the input array.
*
* If provided an array-like object having a `with` method , the function defers
* execution to that method and assumes that the method has the following
* signature:
*
*   x.with( index, value )
*
* If provided an array-like object without a `with` method, the function manually
* shallow copied that object and assign provided value to that index.
*
* Negative indices are resolved relative to the last array element, with the last
* element corresponding to `-1`.
*
* If provided out-of-bounds indices, the function always returns `undefined`.
*
* @param x - input array
* @param index - element index
* @param value - replacement value
* @returns updated array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var out = with( x, 0, 5 );
* // returns [ 5, 2, 3, 4 ]

* @example
* var out = with( x, -1, 6 );
* // returns [ 1, 2, 3, 6 ]
*/

/**
 * Sets the value at the specified index in a Complex128Array.
 *
 * @param x - Complex128Array to modify
 * @param index - index at which to set the value
 * @param value - new value to set
 * @returns modified Complex128Array if successful; otherwise, throws a range error.
 */
declare function withArray( x: Complex128Array, index: number, value: any ): Complex128Array | void;

/**
 * Sets the value at the specified index in a Complex64Array.
 *
 * @param x - Complex64Array to modify
 * @param index - index at which to set the value
 * @param value - new value to set
 * @returns modified Complex64Array if successful; otherwise, throws a range error
 */
declare function withArray( x: Complex64Array, index: number, value: any ): Complex64Array | void;

/**
 * Sets the value at the specified index in an array and returns the modified array.
 *
 * @template T - type of elements in the array
 * @param x - array to modify, which can be either a Collection or an AccessorArrayLike
 * @param index - index at which to set the value
 * @param value - new value to set
 * @returns modified array if successful; otherwise, throws range error
 */
declare function withArray< T = unknown >( x: Collection<T> | AccessorArrayLike<T>, index: number, value: any ): Collection<T> | AccessorArrayLike<T> | void;


// EXPORTS //

export = withArray;
