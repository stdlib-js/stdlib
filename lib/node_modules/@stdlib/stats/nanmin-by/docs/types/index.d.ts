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

import { ArrayLike } from '@stdlib/types/array';
import { RealAndGenericDataType as DataType, typedndarray } from '@stdlib/types/ndarray';

/**
* Input array.
*/
type InputArray<T> = typedndarray<T>;

/**
* Output array.
*/
type OutputArray<U> = typedndarray<U>;

/**
* Callback function applied to each element of an ndarray.
*
* @returns result
*/
type NullaryCallback<ThisArg> = ( this: ThisArg ) => number | void;

/**
* Callback function applied to each element of an ndarray.
*
* @param value - current array element
* @returns result
*/
type UnaryCallback<T, ThisArg> = ( this: ThisArg, value: T ) => number | void;

/**
* Callback function applied to each element of an ndarray.
*
* @param value - current array element
* @param index - current array element index
* @returns result
*/
type BinaryCallback<T, ThisArg> = ( this: ThisArg, value: T, index: number ) => number | void;

/**
* Callback function applied to each element of an ndarray.
*
* @param value - current array element
* @param index - current array element index
* @param array - input ndarray
* @returns result
*/
type TernaryCallback<T, U, ThisArg> = ( this: ThisArg, value: T, index: number, array: U ) => number | void;

/**
* Callback function applied to each element of an ndarray.
*
* @param value - current array element
* @param index - current array element index
* @param array - input ndarray
* @returns result
*/
type Callback<T, U, ThisArg> = NullaryCallback<ThisArg> | UnaryCallback<T, ThisArg> | BinaryCallback<T, ThisArg> | TernaryCallback<T, U, ThisArg>;

/**
* Interface defining "base" options.
*/
interface BaseOptions {
	/**
	* List of dimensions over which to perform a reduction.
	*/
	dims?: ArrayLike<number>;
}

/**
* Interface defining options.
*/
interface Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype?: DataType;

	/**
	* Boolean indicating whether the reduced dimensions should be included in the returned array as singleton dimensions. Default: `false`.
	*/
	keepdims?: boolean;
}

/**
* Interface for performing a reduction on an ndarray according to a callback function, ignoring NaN values.
*/
interface Unary {
	/**
	* Computes the minimum value along one or more ndarray dimensions according to a callback function, ignoring NaN values.
	*
	* @param x - input ndarray
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* function clbk( value ) {
	*     return value * 2.0;
	* }
	*
	* var x = array( [ -1.0, 2.0, NaN ] );
	*
	* var y = nanminBy( x, clbk );
	* // returns <ndarray>[ -2.0 ]
	*/
	<T = unknown, U extends InputArray<T> = InputArray<T>, ThisArg = unknown>( x: U, clbk: Callback<T, U, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, ThisArg>> ): OutputArray<number>; // NOTE: we lose type specificity here, but retaining specificity would likely be difficult and/or tedious to completely enumerate, as the output ndarray data type is dependent on how `x` interacts with output data type policy and whether that policy has been overridden by `options.dtype`.

	/**
	* Computes the minimum value along one or more ndarray dimensions according to a callback function, ignoring NaN values.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* function clbk( value ) {
	*     return value * 2.0;
	* }
	*
	* var x = array( [ -1.0, 2.0, NaN ] );
	*
	* var y = nanminBy( x, {}, clbk );
	* // returns <ndarray>[ -2.0 ]
	*/
	<T = unknown, U extends InputArray<T> = InputArray<T>, ThisArg = unknown>( x: U, options: Options, clbk: Callback<T, U, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, ThisArg>> ): OutputArray<number>; // NOTE: we lose type specificity here, but retaining specificity would likely be difficult and/or tedious to completely enumerate, as the output ndarray data type is dependent on how `x` interacts with output data type policy and whether that policy has been overridden by `options.dtype`.

	/**
	* Computes the minimum value along one or more ndarray dimensions according to a callback function, ignoring NaN values, and assigns results to a provided output ndarray.
	*
	* @param x - input ndarray
	* @param out - output ndarray
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	* var zeros = require( '@stdlib/ndarray/zeros' );
	*
	* var x = array( [ -1.0, 2.0, NaN ] );
	* var y = zeros( [] );
	*
	* function clbk( value ) {
	*     return value * 2.0;
	* }
	*
	* var out = nanminBy.assign( x, y, clbk );
	* // returns <ndarray>[ -2.0 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T = unknown, U extends InputArray<T> = InputArray<T>, V extends OutputArray<unknown> = OutputArray<unknown>, ThisArg = unknown>( x: U, out: V, clbk: Callback<T, U, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, ThisArg>> ): V;

	/**
	* Computes the minimum value along one or more ndarray dimensions according to a callback function, ignoring NaN values, and assigns results to a provided output ndarray.
	*
	* @param x - input ndarray
	* @param out - output ndarray
	* @param options - function options
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	* var zeros = require( '@stdlib/ndarray/zeros' );
	*
	* var x = array( [ -1.0, 2.0, NaN ] );
	* var y = zeros( [] );
	*
	* function clbk( value ) {
	*     return value * 2.0;
	* }
	*
	* var out = nanminBy.assign( x, y, {}, clbk );
	* // returns <ndarray>[ -2.0 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T = unknown, U extends InputArray<T> = InputArray<T>, V extends OutputArray<unknown> = OutputArray<unknown>, ThisArg = unknown>( x: U, out: V, options: BaseOptions, clbk: Callback<T, U, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, ThisArg>> ): V;
}

/**
* Computes the minimum value along one or more ndarray dimensions according to a callback function, ignoring NaN values.
*
* @param x - input ndarray
* @param options - function options
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ -1.0, 2.0, NaN ] );
*
* function clbk( value ) {
*     return value * 2.0;
* }
*
* var y = nanminBy( x, clbk );
* // returns <ndarray>[ -2.0 ]
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = array( [ -1.0, 2.0, NaN ] );
* var y = zeros( [] );
*
* function clbk( value ) {
*     return value * 2.0;
* }
*
* var out = nanminBy.assign( x, y, clbk );
* // returns <ndarray>[ -2.0 ]
*
* var bool = ( out === y );
* // returns true
*/
declare const nanminBy: Unary;


// EXPORTS //

export = nanminBy;
