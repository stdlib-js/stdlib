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
* Four-dimensional nested array.
*/
type Array4D<T> = Array<Array<Array<Collection<T>>>>;

/**
* Nullary callback function.
*
* @returns result
*/
type Nullary<U> = () => U;

/**
* Unary callback function.
*
* @param value - array element
* @returns result
*/
type Unary<T, U> = ( value: T ) => U;

/**
* Binary callback function.
*
* @param value - array element
* @param indices - element indices
* @returns result
*/
type Binary<T, U> = ( value: T, indices: Array<number> ) => U;

/**
* Ternary callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Ternary<T, U> = ( value: T, indices: Array<number>, arr: Array4D<T> ) => U;

/**
* Callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Callback<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Interface describing `flatten4dBy`.
*/
interface Flatten4dBy {
	/**
	* Flattens a four-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = flatten4dBy( x, [ 2, 1, 1, 2 ], false, scale );
	* // returns [ 2, 4, 6, 8 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = flatten4dBy( x, [ 2, 1, 1, 2 ], true, scale );
	* // returns [ 2, 6, 4, 8 ]
	*/
	<T = unknown, U = unknown>( x: Array4D<T>, shape: Collection<number>, colexicographic: boolean, clbk: Callback<T, U>, thisArg?: ThisParameterType<Callback<T, U>> ): Array<U>;

	/**
	* Flattens a four-dimensional nested array according to a callback function and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = flatten4dBy.assign( x, [ 2, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 2, 4, 6, 8 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = flatten4dBy.assign( x, [ 2, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 2, 6, 4, 8 ]
	*/
	assign<T = unknown, U = unknown, V = unknown>( x: Array4D<T>, shape: Collection<number>, colexicographic: boolean, out: Collection<V>, stride: number, offset: number, clbk: Callback<T, U>, thisArg?: ThisParameterType<Callback<T, U>> ): Collection<U | V>;
}

/**
* Flattens a four-dimensional nested array according to a callback function.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
*
* @param x - input array
* @param shape - array shape
* @param colexicographic - specifies whether to flatten array values in colexicographic order
* @returns flattened array
*
* @example
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
*
* var out = flatten4dBy( x, [ 2, 1, 1, 2 ], false, scale );
* // returns [ 2, 4, 6, 8 ]
*
* @example
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
*
* var out = flatten4dBy( x, [ 2, 1, 1, 2 ], true, scale );
* // returns [ 2, 6, 4, 8 ]
*/
declare var flatten4dBy: Flatten4dBy;


// EXPORTS //

export = flatten4dBy;
