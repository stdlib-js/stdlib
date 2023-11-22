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

import { Array2D } from '@stdlib/types/array';
import { Shape2D } from '@stdlib/types/ndarray';

/**
* Callback invoked for each array element.
*
* @returns result
*/
type Nullary<U, V> = ( this: V ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @returns result
*/
type Unary<T, U, V> = ( this: V, value: T ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param indices - current array element indices
* @returns result
*/
type Binary<T, U, V> = ( this: V, value: T, indices: Array<number> ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param indices - current array element indices
* @returns result
*/
type Ternary<T, U, V> = ( this: V, value: T, indices: Array<number>, array: Array2D<T> ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param indices - current array element indices
* @param array - input array
* @returns result
*/
type Callback<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary<T, U, V>;

/**
* Interface describing the main export.
*/
interface Routine {
	/**
	* Applies a function to elements in a two-dimensional nested input array and assigns results to elements in a new two-dimensional nested output array.
	*
	* @param x - input nested array
	* @param shape - array shape
	* @param fcn - function to apply
	* @param thisArg - function execution context
	*
	* @example
	* var ones2d = require( `@stdlib/array/base/ones2d` );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = map2d( x, shape, scale );
	* // returns [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array2D<T>, shape: Shape2D, fcn: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Array2D<U>;

	/**
	* Applies a function to elements in a two-dimensional nested input array and assigns results to elements in a two-dimensional nested output array.
	*
	* @param x - input nested array
	* @param y - output nested array
	* @param shape - array shape
	* @param fcn - function to apply
	* @param thisArg - function execution context
	*
	* @example
	* var ones2d = require( `@stdlib/array/base/ones2d` );
	* var zeros2d = require( `@stdlib/array/base/zeros2d` );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 2, 2 ];
	*
	* var x = ones2d( shape );
	* var y = zeros2d( shape );
	*
	* var out = map2d.assign( x, y, shape, scale );
	* // returns [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T = unknown, U = unknown, V = unknown>( x: Array2D<T>, y: Array2D<U>, shape: Shape2D, fcn: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Array2D<U>;
}

/**
* Applies a function to elements in a two-dimensional nested input array and assigns results to elements in a new two-dimensional nested output array.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **value**: array element.
*     -   **indices**: current array element indices.
*     --  **array**: input nested array.
*
* @param x - input nested array
* @param shape - array shape
* @param fcn - function to apply
* @param thisArg - function execution context
*
* @example
* var ones2d = require( `@stdlib/array/base/ones2d` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 2, 2 ];
*
* var x = ones2d( shape );
* var y = map2d( x, shape, scale );
* // returns [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* @example
* var ones2d = require( `@stdlib/array/base/ones2d` );
* var zeros2d = require( `@stdlib/array/base/zeros2d` );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 2, 2 ];
*
* var x = ones2d( shape );
* var y = zeros2d( shape );
*
* var out = map2d.assign( x, y, shape, scale );
* // returns [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* var bool = ( out === y );
* // returns true
*/
declare var map2d: Routine;


// EXPORTS //

export = map2d;
