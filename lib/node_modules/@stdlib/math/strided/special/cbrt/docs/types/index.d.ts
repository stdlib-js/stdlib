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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Interface describing `cbrt`.
*/
interface Routine {
	/**
	* Computes the cube root of each element in a strided array `x` and assigns the results to elements in a strided array `y`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* cbrt( x.length, 'float64', x, 1, 'float64', y, 1 );
	* // y => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
	*/
	( N: number, dtypeX: any, x: ArrayLike<number>, strideX: number, dtypeY: any, y: ArrayLike<number>, strideY: number ): ArrayLike<number>;

	/**
	* Computes the cube root of each element in a strided array `x` and assigns the results to elements in a strided array `y` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param dtypeY - `y` data type
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws seventh argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* cbrt.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	* // y => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
	*/
	ndarray( N: number, dtypeX: any, x: ArrayLike<number>, strideX: number, offsetX: number, dtypeY: any, y: ArrayLike<number>, strideY: number, offsetY: number ): ArrayLike<number>;
}

/**
* Computes the cube root of each element in a strided array `x` and assigns the results to elements in a strided array `y`.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - input array
* @param strideX - `x` stride length
* @param dtypeY - `y` data type
* @param y - destination array
* @param strideY - `y` stride length
* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws unable to resolve a strided array function supporting the provided array argument data types
* @returns `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cbrt( x.length, 'float64', x, 1, 'float64', y, 1 );
* // y => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 1.0, 8.0, 27.0, 64.0] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cbrt.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
* // y => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
*/
declare var cbrt: Routine;


// EXPORTS //

export = cbrt;
