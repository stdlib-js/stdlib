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
import { Order } from '@stdlib/types/ndarray';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Specifies how to handle subscripts which exceed array dimensions (default: ['throw']).
	*/
	mode?: Array<string>;

	/**
	* specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major').
	*/
	order?: Order;
}

/**
* Converts subscripts to a linear index.
*
* ## Notes
*
* -   The function accepts the following "modes":
*
*     -   `throw`: throws an error when a subscript exceeds array dimensions.
*     -   `wrap`: wrap around subscripts exceeding array dimensions using modulo arithmetic.
*     -   `clamp`: set subscripts exceeding array dimensions to either `0` (minimum index) or the maximum index along a particular dimension.
*
* -   If provided fewer modes than dimensions, the function recycles modes using modulo arithmetic.
*
*
* @param shape - array shape
* @param args - subscripts followed by an optional options object
* @throws first argument must be an array-like object containing nonnegative integers
* @throws subscripts must be integer valued
* @throws must provide valid options
* @throws must provide subscripts which do not exceed array dimensions
* @throws number of subscripts much match the number of dimensions
* @returns linear index
*
* @example
* var i = sub2ind( [ 3, 3, 3 ], 1, 2, 2 );
* // returns 17
*/
declare function sub2ind( shape: ArrayLike<number>, ...args: Array<number|Options> ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = sub2ind;
