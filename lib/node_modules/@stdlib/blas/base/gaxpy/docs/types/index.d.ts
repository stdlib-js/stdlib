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
* Interface describing `gaxpy`.
*/
interface Routine {
	/**
	* Multiplies `x` by a constant `alpha` and adds the result to `y`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	*
	* gaxpy( x.length, 5.0, x, 1, y, 1 );
	* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*/
	( N: number, alpha: number, x: NumericArray, strideX: number, y: NumericArray, strideY: number ): NumericArray; // tslint:disable-line:max-line-length

	/**
	* Multiplies `x` by a constant `alpha` and adds the result to `y` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	*
	* gaxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
	* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*/
	ndarray( N: number, alpha: number, x: NumericArray, strideX: number, offsetX: number, y: NumericArray, strideY: number, offsetY: number ): NumericArray; // tslint:disable-line:max-line-length
}

/**
* Multiplies `x` by a constant `alpha` and adds the result to `y`.
*
* @param N - number of indexed elements
* @param alpha - constant
* @param x - input array
* @param strideX - `x` stride length
* @param y - destination array
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
*
* gaxpy( x.length, 5.0, x, 1, y, 1 );
* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
*
* gaxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*/
declare var gaxpy: Routine;


// EXPORTS //

export = gaxpy;
