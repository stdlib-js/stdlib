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
* Search element.
*/
type SearchElement<T> = typedndarray<T> | T;

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
* Interface describing `indexOfNotEqual`.
*/
interface IndexOfNotEqual {
	/**
	* Returns the first index of an element which is not equal to a specified search element along an ndarray dimension.
	*
	* ## Notes
	*
	* -   When searching for a search element, the function checks for inequality using the strict inequality operator `!==`. As a consequence, `NaN` values are considered distinct from all values (including other `NaN` values), and `-0` and `+0` are considered the same.
	* -   If unable to find an element which is not equal to a specified search element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
	*
	* @param x - input ndarray
	* @param searchElement - search element
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 1.0, 1.0, 3.0 ] );
	*
	* var y = indexOfNotEqual( x, 1.0 );
	* // returns <ndarray>[ 2 ]
	*/
	<T = unknown>( x: InputArray<T>, searchElement: SearchElement<T>, options?: Options ): OutputArray;

	/**
	* Returns the first index of an element which is not equal to a specified search element along an ndarray dimension.
	*
	* ## Notes
	*
	* -   When searching for a search element, the function checks for inequality using the strict inequality operator `!==`. As a consequence, `NaN` values are considered distinct from all values (including other `NaN` values), and `-0` and `+0` are considered the same.
	* -   If unable to find an element which is not equal to a specified search element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
	*
	* @param x - input ndarray
	* @param searchElement - search element
	* @param fromIndex - index from which to begin searching
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 1.0, 2.0, 1.0, 1.0, 3.0, 1.0 ] );
	*
	* var y = indexOfNotEqual( x, 1.0, 2 );
	* // returns <ndarray>[ 4 ]
	*/
	<T = unknown>( x: InputArray<T>, searchElement: SearchElement<T>, fromIndex: FromIndex, options?: Options ): OutputArray;

	/**
	* Returns the first index of an element which is not equal to a specified search element along an ndarray dimension and assigns results to a provided output ndarray.
	*
	* ## Notes
	*
	* -   When searching for a search element, the function checks for inequality using the strict inequality operator `!==`. As a consequence, `NaN` values are considered distinct from all values (including other `NaN` values), and `-0` and `+0` are considered the same.
	* -   If unable to find an element which is not equal to a specified search element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
	*
	* @param x - input ndarray
	* @param searchElement - search element
	* @param out - output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 1.0, 1.0, 3.0 ] );
	* var y = zeros( [], {
	*     'dtype': 'int32'
	* } );
	*
	* var out = indexOfNotEqual.assign( x, 1.0, y );
	* // returns <ndarray>[ 2 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T = unknown, U extends OutputArray = OutputArray>( x: InputArray<T>, searchElement: SearchElement<T>, out: U, options?: BaseOptions ): U;

	/**
	* Returns the first index of an element which is not equal to a specified search element along an ndarray dimension and assigns results to a provided output ndarray.
	*
	* ## Notes
	*
	* -   When searching for a search element, the function checks for inequality using the strict inequality operator `!==`. As a consequence, `NaN` values are considered distinct from all values (including other `NaN` values), and `-0` and `+0` are considered the same.
	* -   If unable to find an element which is not equal to a specified search element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
	*
	* @param x - input ndarray
	* @param searchElement - search element
	* @param fromIndex - index from which to begin searching
	* @param out - output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 1.0, 2.0, 1.0, 1.0, 3.0, 1.0 ] );
	* var y = zeros( [], {
	*     'dtype': 'int32'
	* } );
	*
	* var out = indexOfNotEqual.assign( x, 1.0, 2, y );
	* // returns <ndarray>[ 4 ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T = unknown, U extends OutputArray = OutputArray>( x: InputArray<T>, searchElement: SearchElement<T>, fromIndex: FromIndex, out: U, options?: BaseOptions ): U;
}

/**
* Returns the first index of an element which is not equal to a specified search element along an ndarray dimension.
*
* ## Notes
*
* -   When searching for a search element, the function checks for inequality using the strict inequality operator `!==`. As a consequence, `NaN` values are considered distinct from all values (including other `NaN` values), and `-0` and `+0` are considered the same.
* -   If unable to find an element which is not equal to a specified search element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
*
* @param x - input ndarray
* @param searchElement - search element
* @param fromIndex - index from which to begin searching
* @param options - function options
* @returns output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 1.0, 1.0, 3.0 ] );
*
* var y = indexOfNotEqual( x, 1.0, 0 );
* // returns <ndarray>[ 2 ]
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 1.0, 2.0, 1.0, 1.0, 3.0, 1.0 ] );
* var y = zeros( [], {
*     'dtype': 'int32'
* } );
*
* var out = indexOfNotEqual.assign( x, 1.0, 2, y );
* // returns <ndarray>[ 4 ]
*
* var bool = ( out === y );
* // returns true
*/
declare const indexOfNotEqual: IndexOfNotEqual;


// EXPORTS //

export = indexOfNotEqual;
