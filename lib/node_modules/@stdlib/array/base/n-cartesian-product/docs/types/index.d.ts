/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/**
* Returns the n-fold Cartesian product.
*
* ## Notes
*
* -   If provided one or more empty arrays, the function returns an empty array.
*
* @param x1 - first input array
* @param x2 - second input array
* @returns Cartesian product
*
* @example
* var x1 = [ 1, 2, 3 ];
* var x2 = [ 4, 5 ];
*
* var out = nCartesianProduct( x1, x2 );
* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
*/
declare function nCartesianProduct<T = unknown, U = unknown>( x1: Collection<T>, x2: Collection<U> ): Array<[T, U]>;

/**
* Returns the n-fold Cartesian product.
*
* ## Notes
*
* -   If provided one or more empty arrays, the function returns an empty array.
*
* @param x1 - first input array
* @param x2 - second input array
* @param x3 - third input array
* @returns Cartesian product
*
* @example
* var x1 = [ 1, 2, 3 ];
* var x2 = [ 4, 5 ];
* var x3 = [ 6 ];
*
* var out = nCartesianProduct( x1, x2, x3 );
* // returns [ [ 1, 4, 6 ], [ 1, 5, 6 ], [ 2, 4, 6 ], [ 2, 5, 6 ], [ 3, 4, 6 ], [ 3, 5, 6 ] ]
*/
declare function nCartesianProduct<T = unknown, U = unknown, V = unknown>( x1: Collection<T>, x2: Collection<U>, x3: Collection<V> ): Array<[T, U, V]>;

/**
* Returns the n-fold Cartesian product.
*
* ## Notes
*
* -   If provided one or more empty arrays, the function returns an empty array.
*
* @param x1 - first input array
* @param x2 - second input array
* @param xN - additional input arrays
* @returns Cartesian product
*
* @example
* var x1 = [ 1, 2, 3 ];
* var x2 = [ 4, 5 ];
*
* var out = nCartesianProduct( x1, x2 );
* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
*/
declare function nCartesianProduct<T = unknown, U = unknown, V = unknown>( x1: Collection<T>, x2: Collection<U>, ...xN: Array<Collection<V>> ): Array<Array<T | U | V>>;


// EXPORTS //

export = nCartesianProduct;
