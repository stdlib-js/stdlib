/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* From index.
*/
type FromIndex = typedndarray<number> | number;

/**
* Output array.
*/
type OutputArray = typedndarray<number>;

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
* Interface describing `lastIndexOfTruthy`.
*/
interface LastIndexOfTruthy {
	/**
	* Returns the index of the last truthy element along an ndarray dimension.
	*
	* ## Notes
	*
	* -   If unable to find a truthy element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
	* -   The function explicitly treats `NaN` values as falsy.
	*
	* @param x - input ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 0.0, 0.0, 1.0, 0.0 ] );
	*
	* var y = lastIndexOfTruthy( x );
	* // returns <ndarray>[ 2 ]
	*/
	( x: InputArray<unknown>, options?: Options ): OutputArray;

	/**
	* Returns the index of the last truthy element along an ndarray dimension.
	*
	* ## Notes
	*
	* -   If unable to find a truthy element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
	* -   The function explicitly treats `NaN` values as falsy.
	*
	* @param x - input ndarray
	* @param fromIndex - index from which to begin searching
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 0.0, 0.0, 1.0, 0.0, 3.0, 0.0 ] );
	*
	* var y = lastIndexOfTruthy( x, 3 );
	* // returns <ndarray>[ 2 ]
	*/
	( x: InputArray<unknown>, fromIndex: FromIndex, options?: Options ): OutputArray;

	/**
	* Returns the index of the last truthy element along an ndarray dimension and assigns results to a provided output ndarray.
	*
	* ## Notes
	*
	* -   If unable to find a truthy element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
	* -   The function explicitly treats `NaN` values as falsy.
	*
	* @param x - input ndarray
	* @param out - output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 0.0, 0.0, 1.0, 0.0 ] );
	* var y = zeros( [], {
	*     'dtype': 'int32'
	* } );
	*
	* var out = lastIndexOfTruthy.assign( x, y );
	* // returns <ndarray>[ 2 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T extends OutputArray = OutputArray>( x: InputArray<unknown>, out: T, options?: BaseOptions ): T;

	/**
	* Returns the index of the last truthy element along an ndarray dimension and assigns results to a provided output ndarray.
	*
	* ## Notes
	*
	* -   If unable to find a truthy element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
	* -   The function explicitly treats `NaN` values as falsy.
	*
	* @param x - input ndarray
	* @param fromIndex - index from which to begin searching
	* @param out - output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 0.0, 0.0, 1.0, 0.0, 3.0, 0.0 ] );
	* var y = zeros( [], {
	*     'dtype': 'int32'
	* } );
	*
	* var out = lastIndexOfTruthy.assign( x, 3, y );
	* // returns <ndarray>[ 2 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T extends OutputArray = OutputArray>( x: InputArray<unknown>, fromIndex: FromIndex, out: T, options?: BaseOptions ): T;
}

/**
* Returns the index of the last truthy element along an ndarray dimension.
*
* ## Notes
*
* -   If unable to find a truthy element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
* -   The function explicitly treats `NaN` values as falsy.
*
* @param x - input ndarray
* @param fromIndex - index from which to begin searching
* @param options - function options
* @returns output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 0.0, 0.0, 1.0, 0.0 ] );
*
* var y = lastIndexOfTruthy( x, -1 );
* // returns <ndarray>[ 2 ]
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 0.0, 0.0, 1.0, 0.0, 3.0, 0.0 ] );
* var y = zeros( [], {
*     'dtype': 'int32'
* } );
*
* var out = lastIndexOfTruthy.assign( x, 3, y );
* // returns <ndarray>[ 2 ]
*
* var bool = ( out === y );
* // returns true
*/
declare const lastIndexOfTruthy: LastIndexOfTruthy;


// EXPORTS //

export = lastIndexOfTruthy;
