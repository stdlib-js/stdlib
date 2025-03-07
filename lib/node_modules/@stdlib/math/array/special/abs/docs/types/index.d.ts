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

import { DataType, ArrayLike, AccessorArrayLike } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray<T> = ArrayLike<T> | AccessorArrayLike<T>;

/**
* Output array.
*/
type OutputArray<U> = ArrayLike<U> | AccessorArrayLike<U>;

/**
* Interface defining options.
*/
interface Options {
	/**
	* Output array data type.
	*/
	dtype?: DataType;
}

/**
* Interface for performing element-wise computation.
*/
interface Unary {
	/**
	* Computes the absolute value for each element in an input array.
	*
	* @param x - input array
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = abs( [ -1.0, -2.0, -3.0 ] );
	* // returns [ 1.0, 2.0, 3.0 ]
	*/
	( x: InputArray<number>, options?: Options ): OutputArray<number>;

	/**
	* Computes the absolute value for each element in an input array and assigns results to a provided output array.
	*
	* @param x - input array
	* @param out - output array
	* @returns output array
	*
	* @example
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* var out = abs.assign( [ -1.0, -2.0, -3.0 ], y );
	* // returns [ 1.0, 2.0, 3.0 ]
	*
	* var bool = ( out === y );
	*/
	assign<V extends OutputArray<number>>( x: InputArray<number>, out: V ): V;
}

/**
* Computes the absolute value for each element in an input array.
*
* @param x - input array
* @param options - function options
* @returns output array
*
* @example
* var out = abs( [ -1.0, -2.0, -3.0 ] );
* // returns [ 1.0, 2.0, 3.0 ]
*
* @example
* var y = [ 0.0, 0.0, 0.0 ];
*
* var out = abs.assign( [ -1.0, -2.0, -3.0 ], y );
* // returns [ 1.0, 2.0, 3.0 ]
*
* var bool = ( out === y );
*/
declare const abs: Unary;


// EXPORTS //

export = abs;
