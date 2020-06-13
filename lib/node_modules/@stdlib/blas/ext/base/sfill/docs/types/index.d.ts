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
* Interface describing `sfill`.
*/
interface Routine {
	/**
	* Fills a single-precision floating-point strided array with a specified scalar value.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - stride length
	* @returns `x`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* sfill( x.length, 5.0, x, 1 );
	* // x => <Float32Array>[ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*/
	( N: number, alpha: number, x: Float32Array, stride: number ): Float32Array;

	/**
	* Fills a single-precision floating-point strided array with a specified scalar value using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns `x`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* sfill.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => <Float32Array>[ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*/
	ndarray( N: number, alpha: number, x: Float32Array, stride: number, offset: number ): Float32Array; // tslint:disable-line:max-line-length
}

/**
* Fills a single-precision floating-point strided array with a specified scalar value.
*
* @param N - number of indexed elements
* @param alpha - constant
* @param x - input array
* @param stride - stride length
* @returns `x`
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* sfill( x.length, 5.0, x, 1 );
* // x => <Float32Array>[ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* sfill.ndarray( x.length, 5.0, x, 1, 0 );
* // x => <Float32Array>[ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
*/
declare var sfill: Routine;


// EXPORTS //

export = sfill;
