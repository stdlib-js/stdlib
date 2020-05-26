/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import { NumericArray } from '@stdlib/types/array';

/**
* Interface describing `cumin`.
*/
interface Routine {
	/**
	* Computes the cumulative minimum of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* cumin( x.length, x, 1, y, 1 );
	* // y => [ 1.0, 1.0, 2.0 ]
	*/
	( N: number, x: NumericArray, strideX: number, y: NumericArray, strideY: number ): NumericArray; // tslint:disable-line:max-line-length

	/**
	* Computes the cumulative minimum of a strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - output array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	* var y = [ 0.0, 0.0, 0.0 ];
	*
	* cumin.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, 1.0, 2.0 ]
	*/
	ndarray( N: number, x: NumericArray, strideX: number, offsetX: number, y: NumericArray, strideY: number, offsetY: number ): NumericArray; // tslint:disable-line:max-line-length
}

/**
* Computes the cumulative minimum of a strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - output array
* @param strideY - `y` stride length
* @returns output array
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
*
* cumin( x.length, x, 1, y, 1 );
* // y => [ 1.0, 1.0, 2.0 ]
*
* @example
* var x = [ 1.0, -2.0, 2.0 ] );
* var y = [ 0.0, 0.0, 0.0 ];
*
* cumin.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => [ 1.0, 1.0, 2.0 ]
*/
declare var cumin: Routine;


// EXPORTS //

export = cumin;
