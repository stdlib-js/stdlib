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

import { Collection, AccessorArrayLike, TypedArray, ComplexTypedArray, BooleanTypedArray } from '@stdlib/types/array';
import { ComplexLike } from '@stdlib/types/complex';
import { Mode } from '@stdlib/types/ndarray';

/**
* Index array.
*/
type IndexArray = Collection<number> | AccessorArrayLike<number>;

/**
* Values array.
*/
type ValuesArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Replaces specified elements of an array with provided values.
*
* @param x - input array
* @param indices - list of element indices
* @param values - values to set
* @param mode - index mode
* @returns input array
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var indices = [ 1, 2 ];
* var values = [ 20, 30 ];
*
* var out = put( x, indices, values, 'throw' );
* // returns <Int32Array>[ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var out = put( x, [ 1, 2 ], [ 30 ], 'throw' );
* // returns <Int32Array>[ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
declare function put<T extends TypedArray | BooleanTypedArray, U = unknown>( x: T, indices: IndexArray, values: ValuesArray<U>, mode: Mode ): T;

/**
* Replaces specified elements of an array with provided values.
*
* @param x - input array
* @param indices - list of element indices
* @param values - values to set
* @param mode - index mode
* @returns input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var indices = [ 1, 2 ];
* var values = new Complex128Array( [ 20.0, 30.0, 40, 5.0 ] );
*
* var out = put( x, indices, values, 'throw' );
* // returns <Complex128Array>
*
* var bool = ( out === x );
* // returns true
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var indices = [ 1, 2 ];
* var values = new Complex128Array( [ 20.0, 30.0 ] );
*
* var out = put( x, indices, values, 'throw' );
* // returns <Complex128Array>
*
* var bool = ( out === x );
* // returns true
*/
declare function put<T extends ComplexTypedArray>( x: T, indices: IndexArray, values: ValuesArray<ComplexLike | [ number, number ]>, mode: Mode ): T;

/**
* Replaces specified elements of an array with provided values.
*
* @param x - input array
* @param indices - list of element indices
* @param values - values to set
* @param mode - index mode
* @returns input array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var indices = [ 1, 2 ];
* var values = [ 20, 30 ];
*
* var out = put( x, indices, values, 'throw' );
* // returns [ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = put( x, [ 1, 2 ], [ 30 ], 'throw' );
* // returns [ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
declare function put<T = unknown, U = unknown>( x: Array<T>, indices: IndexArray, values: ValuesArray<U>, mode: Mode ): Array<T | U>;

/**
* Replaces specified elements of an array with provided values.
*
* @param x - input array
* @param indices - list of element indices
* @param values - values to set
* @param mode - index mode
* @returns input array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
*
* var indices = [ 1, 2 ];
* var values = [ 20, 30 ];
*
* var out = put( x, indices, values, 'throw' );
*
* var bool = ( out === x );
* // returns true
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
*
* var out = put( x, [ 1, 2 ], [ 30 ], 'throw' );
*
* var bool = ( out === x );
* // returns true
*/
declare function put<T = unknown, U = unknown>( x: AccessorArrayLike<T>, indices: IndexArray, values: ValuesArray<U>, mode: Mode ): AccessorArrayLike<T | U>;

/**
* Replaces specified elements of an array with provided values.
*
* @param x - input array
* @param indices - list of element indices
* @param values - values to set
* @param mode - index mode
* @returns input array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var indices = [ 1, 2 ];
* var values = [ 20, 30 ];
*
* var out = put( x, indices, values, 'throw' );
* // returns [ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = put( x, [ 1, 2 ], [ 30 ], 'throw' );
* // returns [ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
declare function put<T = unknown, U = unknown>( x: Collection<T>, indices: IndexArray, values: ValuesArray<U>, mode: Mode ): Collection<T | U>;


// EXPORTS //

export = put;
