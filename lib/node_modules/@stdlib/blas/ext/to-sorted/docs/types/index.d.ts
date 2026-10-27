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

import { ArrayLike } from '@stdlib/types/array';
import { RealAndGenericDataType as DataType, typedndarray, realndarray, genericndarray } from '@stdlib/types/ndarray';

/**
* Input array.
*/
type InputArray = realndarray | genericndarray<number|string>;

/**
* Output array.
*/
type OutputArray = realndarray | genericndarray<number|string>;

/**
* Sort order.
*/
type SortOrder = typedndarray<number> | genericndarray<number> | number | 'descending' | 'desc' | 'ascending' | 'asc';

/**
* Interface defining "base" options.
*/
interface BaseOptions {
	/**
	* List of dimensions over which to perform operation.
	*/
	dims?: ArrayLike<number>;
}

/**
* Interface defining options.
*/
interface Options extends BaseOptions {
	/**
	* Output ndarray data type.
	*/
	dtype: DataType;
}

/**
* Interface for performing an operation on an ndarray.
*/
interface ToSorted {
	/**
	* Returns a new ndarray containing the elements of an input ndarray sorted along one or more ndarray dimensions.
	*
	* ## Notes
	*
	* -   If `sortOrder < 0.0` or is either `'desc'` or `'descending'`, the input ndarray is sorted in **decreasing** order. If `sortOrder > 0.0` or is either `'asc'` or `'ascending'`, the input ndarray is sorted in **increasing** order. If `sortOrder == 0.0`, the input ndarray is left unchanged.
	* -   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
	* -   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
	*
	* @param x - input ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ] );
	* // returns <ndarray>[ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ]
	*
	* var out = toSorted( x );
	* // returns <ndarray>[ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
	*/
	<T extends InputArray = InputArray>( x: T, options?: BaseOptions ): T;

	/**
	* Returns a new ndarray containing the elements of an input ndarray sorted along one or more ndarray dimensions.
	*
	* ## Notes
	*
	* -   If `sortOrder < 0.0` or is either `'desc'` or `'descending'`, the input ndarray is sorted in **decreasing** order. If `sortOrder > 0.0` or is either `'asc'` or `'ascending'`, the input ndarray is sorted in **increasing** order. If `sortOrder == 0.0`, the input ndarray is left unchanged.
	* -   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
	* -   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
	*
	* @param x - input ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ] );
	* // returns <ndarray>[ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ]
	*
	* var out = toSorted( x );
	* // returns <ndarray>[ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
	*/
	<T extends InputArray = InputArray, U extends OutputArray = OutputArray>( x: T, options?: Options ): U; // NOTE: we lose type specificity here. We can likely address this with type maps

	/**
	* Returns a new ndarray containing the elements of an input ndarray sorted along one or more ndarray dimensions.
	*
	* ## Notes
	*
	* -   If `sortOrder < 0.0` or is either `'desc'` or `'descending'`, the input ndarray is sorted in **decreasing** order. If `sortOrder > 0.0` or is either `'asc'` or `'ascending'`, the input ndarray is sorted in **increasing** order. If `sortOrder == 0.0`, the input ndarray is left unchanged.
	* -   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
	* -   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
	*
	* @param x - input ndarray
	* @param sortOrder - sort order
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ] );
	* // returns <ndarray>[ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ]
	*
	* var out = toSorted( x, 1.0 );
	* // returns <ndarray>[ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
	*/
	<T extends InputArray = InputArray>( x: T, sortOrder: SortOrder, options?: BaseOptions ): T;

	/**
	* Returns a new ndarray containing the elements of an input ndarray sorted along one or more ndarray dimensions.
	*
	* ## Notes
	*
	* -   If `sortOrder < 0.0` or is either `'desc'` or `'descending'`, the input ndarray is sorted in **decreasing** order. If `sortOrder > 0.0` or is either `'asc'` or `'ascending'`, the input ndarray is sorted in **increasing** order. If `sortOrder == 0.0`, the input ndarray is left unchanged.
	* -   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
	* -   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
	*
	* @param x - input ndarray
	* @param sortOrder - sort order
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ] );
	* // returns <ndarray>[ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ]
	*
	* var out = toSorted( x, 1.0 );
	* // returns <ndarray>[ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
	*/
	<T extends InputArray = InputArray, U extends OutputArray = OutputArray>( x: T, sortOrder: SortOrder, options?: Options ): U; // NOTE: we lose type specificity here. We can likely address this with type maps

	/**
	* Sorts the elements in an input ndarray along one or more ndarray dimensions and assigns the results to an output ndarray.
	*
	* ## Notes
	*
	* -   If `sortOrder < 0.0` or is either `'desc'` or `'descending'`, the input ndarray is sorted in **decreasing** order. If `sortOrder > 0.0` or is either `'asc'` or `'ascending'`, the input ndarray is sorted in **increasing** order. If `sortOrder == 0.0`, the input ndarray is left unchanged.
	* -   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
	* -   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
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
	* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ] );
	* // returns <ndarray>[ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ]
	*
	* var y = zeros( [ 3, 1, 2 ] );
	* // returns <ndarray>[ [ [ 0.0, 0.0 ] ], [ [ 0.0, 0.0 ] ], [ [ 0.0, 0.0 ] ] ]
	*
	* var out = toSorted.assign( x, y );
	* // returns <ndarray>[ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T extends InputArray = InputArray, U extends OutputArray = OutputArray>( x: T, out: U, options?: BaseOptions ): U;

	/**
	* Sorts the elements in an input ndarray along one or more ndarray dimensions and assigns the results to an output ndarray.
	*
	* ## Notes
	*
	* -   If `sortOrder < 0.0` or is either `'desc'` or `'descending'`, the input ndarray is sorted in **decreasing** order. If `sortOrder > 0.0` or is either `'asc'` or `'ascending'`, the input ndarray is sorted in **increasing** order. If `sortOrder == 0.0`, the input ndarray is left unchanged.
	* -   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
	* -   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
	*
	* @param x - input ndarray
	* @param sortOrder - sort order
	* @param out - output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ] );
	* // returns <ndarray>[ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ]
	*
	* var y = zeros( [ 3, 1, 2 ] );
	* // returns <ndarray>[ [ [ 0.0, 0.0 ] ], [ [ 0.0, 0.0 ] ], [ [ 0.0, 0.0 ] ] ]
	*
	* var out = toSorted.assign( x, 1, y );
	* // returns <ndarray>[ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T extends InputArray = InputArray, U extends OutputArray = OutputArray>( x: T, sortOrder: SortOrder, out: U, options?: BaseOptions ): U;
}

/**
* Returns a new ndarray with the elements of an input ndarray sorted along one or more ndarray dimensions.
*
* ## Notes
*
* -   If `sortOrder < 0.0` or is either `'desc'` or `'descending'`, the input ndarray is sorted in **decreasing** order. If `sortOrder > 0.0` or is either `'asc'` or `'ascending'`, the input ndarray is sorted in **increasing** order. If `sortOrder == 0.0`, the input ndarray is left unchanged.
* -   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
* -   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
*
* @param x - input ndarray
* @param sortOrder - sort order
* @param options - function options
* @returns output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ] );
* // returns <ndarray>[ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ]
*
* var out = toSorted( x, 1.0 );
* // returns <ndarray>[ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ] );
* // returns <ndarray>[ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ]
*
* var y = zeros( [ 3, 1, 2 ] );
* // returns <ndarray>[ [ [ 0.0, 0.0 ] ], [ [ 0.0, 0.0 ] ], [ [ 0.0, 0.0 ] ] ]
*
* var out = toSorted.assign( x, y );
* // returns <ndarray>[ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
*
* var bool = ( out === y );
* // returns true
*/
declare const toSorted: ToSorted;


// EXPORTS //

export = toSorted;
