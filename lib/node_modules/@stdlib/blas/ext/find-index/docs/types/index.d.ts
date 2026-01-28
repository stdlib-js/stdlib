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

import { IntegerIndexAndGenericDataType as DataType, typedndarray } from '@stdlib/types/ndarray';

/**
* Input array.
*/
type InputArray<T> = typedndarray<T>;

/**
* Output array.
*/
type OutputArray = typedndarray<number>;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @returns boolean indicating whether an element passes a test
*/
type NullaryPredicate<ThisArg> = ( this: ThisArg ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an element passes a test
*/
type UnaryPredicate<T, ThisArg> = ( this: ThisArg, value: T ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @returns boolean indicating whether an element passes a test
*/
type BinaryPredicate<T, ThisArg> = ( this: ThisArg, value: T, index: number ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param array - input ndarray
* @returns boolean indicating whether an element passes a test
*/
type TernaryPredicate<T, U, ThisArg> = ( this: ThisArg, value: T, index: number, array: U ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param array - input ndarray
* @returns boolean indicating whether an element passes a test
*/
type Predicate<T, U, ThisArg> = NullaryPredicate<ThisArg> | UnaryPredicate<T, ThisArg> | BinaryPredicate<T, ThisArg> | TernaryPredicate<T, U, ThisArg>;

/**
* Interface defining "base" options.
*/
interface BaseOptions {
	/**
	* Dimension over which to perform operation. Default: `-1`.
	*
	* ## Notes
	*
	* -   If provided a negative integer, the dimension along which to perform the operation is determined by counting backward from the last dimension (where `-1` refers to the last dimension).
	*/
	dim?: number;
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
* Interface describing `findIndex`.
*/
interface FindIndex {
	/**
	* Returns the index of the first element along an ndarray dimension which passes a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If no element along an ndarray dimension passes a test implemented by the predicate function, the corresponding element in the returned ndarray is `-1`.
	*
	* @param x - input ndarray
	* @param clbk - predicate function
	* @param thisArg - predicate function execution context
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* function clbk( value ) {
	*     return value % 2.0 === 0.0;
	* }
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	*
	* var y = findIndex( x, clbk );
	* // returns <ndarray>
	*
	* var v = y.get();
	* // returns 1
	*/
	<T = unknown, U extends InputArray<T> = InputArray<T>, ThisArg = unknown>( x: U, clbk: Predicate<T, U, ThisArg>, thisArg?: ThisParameterType<Predicate<T, U, ThisArg>> ): OutputArray;

	/**
	* Returns the index of the first element along an ndarray dimension which passes a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If no element along an ndarray dimension passes a test implemented by the predicate function, the corresponding element in the returned ndarray is `-1`.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param clbk - predicate function
	* @param thisArg - predicate function execution context
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* function clbk( value ) {
	*     return value % 2.0 === 0.0;
	* }
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	*
	* var y = findIndex( x, {}, clbk );
	* // returns <ndarray>
	*
	* var v = y.get();
	* // returns 1
	*/
	<T = unknown, U extends InputArray<T> = InputArray<T>, ThisArg = unknown>( x: U, options: Options, clbk: Predicate<T, U, ThisArg>, thisArg?: ThisParameterType<Predicate<T, U, ThisArg>> ): OutputArray;

	/**
	* Returns the index of the first element along an ndarray dimension which passes a test implemented by a predicate function and assigns results to a provided output ndarray.
	*
	* ## Notes
	*
	* -   If no element along an ndarray dimension passes a test implemented by the predicate function, the corresponding element in the returned ndarray is `-1`.
	*
	* @param x - input ndarray
	* @param out - output ndarray
	* @param clbk - predicate function
	* @param thisArg - predicate function execution context
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	* var zeros = require( '@stdlib/ndarray/zeros' );
	*
	* function clbk( value ) {
	*     return value % 2.0 === 0.0;
	* }
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	* var y = zeros( [] );
	*
	* var out = findIndex.assign( x, y, clbk );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns 1
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T = unknown, U extends InputArray<T> = InputArray<T>, V extends OutputArray = OutputArray, ThisArg = unknown>( x: U, out: V, clbk: Predicate<T, U, ThisArg>, thisArg?: ThisParameterType<Predicate<T, U, ThisArg>> ): V;

	/**
	* Returns the index of the first element along an ndarray dimension which passes a test implemented by a predicate function and assigns results to a provided output ndarray.
	*
	* ## Notes
	*
	* -   If no element along an ndarray dimension passes a test implemented by the predicate function, the corresponding element in the returned ndarray is `-1`.
	*
	* @param x - input ndarray
	* @param out - output ndarray
	* @param options - function options
	* @param clbk - predicate function
	* @param thisArg - predicate function execution context
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	* var zeros = require( '@stdlib/ndarray/zeros' );
	*
	* function clbk( value ) {
	*     return value % 2.0 === 0.0;
	* }
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	* var y = zeros( [] );
	*
	* var out = findIndex.assign( x, y, {}, clbk );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns 1
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T = unknown, U extends InputArray<T> = InputArray<T>, V extends OutputArray = OutputArray, ThisArg = unknown>( x: U, out: V, options: BaseOptions, clbk: Predicate<T, U, ThisArg>, thisArg?: ThisParameterType<Predicate<T, U, ThisArg>> ): V;
}

/**
* Returns the index of the first element along an ndarray dimension which passes a test implemented by a predicate function.
*
* ## Notes
*
* -   If no element along an ndarray dimension passes a test implemented by the predicate function, the corresponding element in the returned ndarray is `-1`.
*
* @param x - input ndarray
* @param options - function options
* @param clbk - predicate function
* @param thisArg - predicate function execution context
* @returns output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* function clbk( value ) {
*     return value % 2.0 === 0.0;
* }
*
* var x = array( [ -1.0, 2.0, -3.0 ] )
*
* var y = findIndex( x, clbk );
* // returns <ndarray>
*
* var v = y.get();
* // returns 1
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* function clbk( value ) {
*     return value % 2.0 === 0.0;
* }
*
* var x = array( [ -1.0, 2.0, -3.0 ] )
* var y = zeros( [] );
*
* var out = findIndex.assign( x, y, clbk );
* // returns <ndarray>
*
* var v = out.get();
* // returns 1
*
* var bool = ( out === y );
* // returns true
*/
declare const findIndex: FindIndex;


// EXPORTS //

export = findIndex;
