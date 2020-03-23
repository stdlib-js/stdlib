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

/**
* Interface describing `dasum`.
*/
interface Routine {
	/**
	* Computes the sum of the absolute values.
	*
	* @param N - number of values to sum
	* @param x - input array
	* @param stride - stride length
	* @returns sum of absolute values
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	*
	* var z = dasum( x.length, x, 1 );
	* // returns 15.0
	*/
	( N: number, x: Float64Array, stride: number ): number;

	/**
	* Computes the sum of the absolute values using alternative indexing semantics.
	*
	* @param N - number of values to sum
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns sum of absolute values
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = dasum.ndarray( x.length, x, 1, 0 );
	* // returns 21.0
	*/
	ndarray( N: number, x: Float64Array, stride: number, offset: number ): number; // tslint:disable-line:max-line-length
}

/**
* Computes the sum of the absolute values.
*
* @param N - number of values to sum
* @param x - input array
* @param stride - stride length
* @returns sum of absolute values
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = dasum( x.length, x, 1 );
* // returns 15.0
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = dasum.ndarray( x.length, x, 1, 0 );
* // returns 21.0
*/
declare var dasum: Routine;


// EXPORTS //

export = dasum;
