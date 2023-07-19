/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>
/// <reference types="node"/>

import { ArrayLike } from '@stdlib/types/array';
import { Mode, Order } from '@stdlib/types/ndarray';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Specifies how to handle a linear index which exceeds array dimensions (default: 'throw').
	*/
	mode?: Mode;

	/**
	* specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major').
	*/
	order?: Order;
}

interface Ind2Sub {
	/**
	* Converts a linear index to an array of subscripts.
	*
	* ## Notes
	*
	* -   The function accepts the following "modes":
	*
	*     -   `throw`: throws an error when a linear index exceeds array dimensions.
	*     -   `wrap`: wrap around a linear index exceeding array dimensions using modulo arithmetic.
	*     -   `clamp`: set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.
	*
	*
	* @param shape - array shape
	* @param idx - linear index
	* @param options - function options
	* @param options.mode - specifies how to handle a linear index which exceeds array dimensions (default: 'throw')
	* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
	* @throws shape argument must be an array-like object containing nonnegative integers
	* @throws must provide valid options
	* @throws must provide a linear index which does not exceed array dimensions
	* @returns subscripts
	*
	* @example
	* var s = ind2sub( [ 3, 3, 3 ], 17 );
	* // returns [ 1, 2, 2 ]
	*/
	( shape: ArrayLike<number>, idx: number, options?: Options ): Array<number>;

	/**
	* Converts a linear index to an array of subscripts and assigns results to a provided output array.
	*
	* ## Notes
	*
	* -   The function accepts the following "modes":
	*
	*     -   `throw`: throws an error when a linear index exceeds array dimensions.
	*     -   `wrap`: wrap around a linear index exceeding array dimensions using modulo arithmetic.
	*     -   `clamp`: set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.
	*
	*
	* @param shape - array shape
	* @param idx - linear index
	* @param options - function options
	* @param options.mode - specifies how to handle a linear index which exceeds array dimensions (default: 'throw')
	* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
	* @param out - output array
	* @throws output argument must be either an array, typed array, or an object
	* @throws shape argument must be an array-like object containing nonnegative integers
	* @throws must provide valid options
	* @throws must provide a linear index which does not exceed array dimensions
	* @returns subscripts
	*
	* @example
	* var shape = [ 3, 3, 3 ];
	* var out = [ 0, 0, 0 ];
	*
	* var s = ind2sub.assign( shape, 17, out );
	* // returns [ 1, 2, 2 ]
	*
	* var bool = ( s === out );
	* // returns true
	*/
	assign( shape: ArrayLike<number>, idx: number, options: Options, out: any ): Array<number>; // tslint-disable-line max-line-length

	/**
	* Converts a linear index to an array of subscripts and assigns results to a provided output array.
	*
	* ## Notes
	*
	* -   The function accepts the following "modes":
	*
	*     -   `throw`: throws an error when a linear index exceeds array dimensions.
	*     -   `wrap`: wrap around a linear index exceeding array dimensions using modulo arithmetic.
	*     -   `clamp`: set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.
	*
	*
	* @param shape - array shape
	* @param idx - linear index
	* @param out - output array
	* @throws output argument must be either an array, typed array, or an object
	* @throws shape argument must be an array-like object containing nonnegative integers
	* @throws must provide a linear index which does not exceed array dimensions
	* @returns subscripts
	*
	* @example
	* var shape = [ 3, 3, 3 ];
	* var out = [ 0, 0, 0 ];
	*
	* var s = ind2sub.assign( shape, 17, out );
	* // returns [ 1, 2, 2 ]
	*
	* var bool = ( s === out );
	* // returns true
	*/
	assign( shape: ArrayLike<number>, idx: number, out: any ): Array<number>;
}

/**
* Converts a linear index to an array of subscripts.
*
* ## Notes
*
* -   The function accepts the following "modes":
*
*     -   `throw`: throws an error when a linear index exceeds array dimensions.
*     -   `wrap`: wrap around a linear index exceeding array dimensions using modulo arithmetic.
*     -   `clamp`: set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.
*
*
* @param shape - array shape
* @param idx - linear index
* @param options - function options
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions (default: 'throw')
* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
* @throws shape argument must be an array-like object containing nonnegative integers
* @throws must provide valid options
* @throws must provide a linear index which does not exceed array dimensions
* @returns subscripts
*
* @example
* var s = ind2sub( [ 3, 3, 3 ], 17 );
* // returns [ 1, 2, 2 ]
*
* @example
* var shape = [ 3, 3, 3 ];
* var out = [ 0, 0, 0 ];
*
* var s = ind2sub.assign( shape, 17, out );
* // returns [ 1, 2, 2 ]
*
* var bool = ( s === out );
* // returns true
*/
declare var ind2sub: Ind2Sub;

// EXPORTS //

export = ind2sub;
