/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/**
* Status code.
*
* ## Notes
*
* The status code indicates the following conditions:
*
* -   if equal to zero, then the factorization was successful.
* -   if less than zero, then the k-th argument had an illegal value, where `k = -StatusCode`.
* -   if greater than zero, then the leading principal minor of order `k` is not positive, where `k = StatusCode`. If `k < N`, then the factorization could not be completed. If `k = N`, then the factorization was completed, but `D(N) <= 0`, meaning that the matrix `A` is not positive definite.
*/
type StatusCode = number;

/**
* Interface describing `spttrf`.
*/
interface Routine {
	/**
	* Computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.
	*
	* @param N - order of matrix `A`
	* @param D - the `N` diagonal elements of `A`
	* @param E - the `N-1` subdiagonal elements of `A`
	* @returns status code
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var D = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	* var E = new Float32Array( [ 1.0, 2.0 ] );
	*
	* spttrf( 3, D, E );
	* // D => <Float32Array>[ 4, 4.75, ~5.15789 ]
	* // E => <Float32Array>[ 0.25, ~0.4210 ]
	*/
	( N: number, D: Float32Array, E: Float32Array ): StatusCode;

	/**
	* Computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A` using alternative indexing semantics.
	*
	* @param N - order of matrix `A`
	* @param D - the `N` diagonal elements of `A`
	* @param strideD - stride length for `D`
	* @param offsetD - starting index of `D`
	* @param E - the `N-1` subdiagonal elements of `A`
	* @param strideE - stride length for `E`
	* @param offsetE - starting index of `E`
	* @returns status code
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var D = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	* var E = new Float32Array( [ 1.0, 2.0 ] );
	*
	* spttrf.ndarray( 3, D, 1, 0, E, 1, 0 );
	* // D => <Float32Array>[ 4, 4.75, ~5.15789 ]
	* // E => <Float32Array>[ 0.25, ~0.4210 ]
	*/
	ndarray( N: number, D: Float32Array, strideD: number, offsetD: number, E: Float32Array, strideE: number, offsetE: number ): StatusCode;
}

/**
* Computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.
*
* @param N - order of matrix `A`
* @param D - the `N` diagonal elements of `A`
* @param E - the `N-1` subdiagonal elements of `A`
* @returns status code
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var D = new Float32Array( [ 4.0, 5.0, 6.0 ] );
* var E = new Float32Array( [ 1.0, 2.0 ] );
*
* spttrf( 3, D, E );
* // D => <Float32Array>[ 4, 4.75, ~5.15789 ]
* // E => <Float32Array>[ 0.25, ~0.4210 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var D = new Float32Array( [ 4.0, 5.0, 6.0 ] );
* var E = new Float32Array( [ 1.0, 2.0 ] );
*
* spttrf.ndarray( 3, D, 1, 0, E, 1, 0 );
* // D => <Float32Array>[ 4, 4.75, ~5.15789 ]
* // E => <Float32Array>[ 0.25, ~0.4210 ]
*/
declare var spttrf: Routine;


// EXPORTS //

export = spttrf;
