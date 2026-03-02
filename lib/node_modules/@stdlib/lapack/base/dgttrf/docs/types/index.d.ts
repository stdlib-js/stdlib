/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* -   if greater than zero, then `U(k, k)` is exactly zero the factorization has been completed, but the factor `U` is exactly singular, and division by zero will occur if it is used to solve a system of equations where `k = StatusCode`.
*/
type StatusCode = number;

/**
* Interface describing `dgttrf`.
*/
interface Routine {
	/**
	* Computes an `LU` factorization of a real tridiagonal matrix `A` using elimination with partial pivoting and row interchanges.
	*
	* ## Notes
	*
	* -   `DL` should have `N-1` indexed elements and is overwritten by the multipliers that define the matrix `L` from the `LU` factorization of `A`.
	* -   `D` should have `N` indexed elements and is overwritten by the diagonal elements of the upper triangular matrix `U` from the `LU` factorization of `A`.
	* -   `DU` should have `N-1` indexed elements and is overwritten by the elements of the first super-diagonal of `U`.
	* -   `DU2` should have `N-2` indexed elements and is overwritten by the elements of the second super-diagonal of `U`.
	* -   For `0 <= i < n`, row `i` of the matrix is interchanged with row `IPIV(i)`. `IPIV(i)` will always be either `i` or `i+1`. `IPIV(i) = i` indicates a row interchange was not required.
	*
	* @param N - number of rows/columns in `A`
	* @param DL - the first sub diagonal of `A`
	* @param D - the diagonal of `A`
	* @param DU - the first super-diagonal of `A`
	* @param DU2 - the second super-diagonal of `U`
	* @param IPIV - vector of pivot indices
	* @returns status code
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var Int32Array = require( '@stdlib/array/int32' );
	*
	* var DL = new Float64Array( [ 1.0, 1.0 ] );
	* var D = new Float64Array( [ 2.0, 3.0, 1.0 ] );
	* var DU = new Float64Array( [ 1.0, 1.0 ] );
	* var DU2 = new Float64Array( [ 0.0 ] );
	* var IPIV = new Int32Array( [ 0, 0, 0 ] );
	*
	* dgttrf( 3, DL, D, DU, DU2, IPIV );
	* // DL => <Float64Array>[ 0.5, 0.4 ]
	* // D => <Float64Array>[ 2.0, 2.5, 0.6 ]
	* // DU => <Float64Array>[ 1.0, 1.0 ]
	* // DU2 => <Float64Array>[ 0.0 ]
	* // IPIV => <Int32Array>[ 0, 1, 2 ]
	*/
	( N: number, DL: Float64Array, D: Float64Array, DU: Float64Array, DU2: Float64Array, IPIV: Int32Array ): StatusCode;

	/**
	* Computes an `LU` factorization of a real tridiagonal matrix `A` using elimination with partial pivoting and row interchanges and alternative indexing semantics.
	*
	* ## Notes
	*
	* -   `DL` should have `N-1` indexed elements and is overwritten by the multipliers that define the matrix `L` from the `LU` factorization of `A`.
	* -   `D` should have `N` indexed elements and is overwritten by the diagonal elements of the upper triangular matrix `U` from the `LU` factorization of `A`.
	* -   `DU` should have `N-1` indexed elements and is overwritten by the elements of the first super-diagonal of `U`.
	* -   `DU2` should have `N-2` indexed elements and is overwritten by the elements of the second super-diagonal of `U`.
	* -   For `0 <= i < n`, row `i` of the matrix is interchanged with row `IPIV(i)`. `IPIV(i)` will always be either `i` or `i+1`. `IPIV(i) = i` indicates a row interchange was not required.
	*
	* @param N - number of rows/columns in `A`
	* @param DL - the first sub diagonal of `A`
	* @param strideDL - stride length for `DL`
	* @param offsetDL - starting index of `DL`
	* @param D - the diagonal of `A`
	* @param strideD - stride length for `D`
	* @param offsetD - starting index of `D`
	* @param DU - the first super-diagonal of `A`
	* @param strideDU - stride length for `DU`
	* @param offsetDU - starting index of `DU`
	* @param DU2 - the second super-diagonal of `U`
	* @param strideDU2 - stride length for `DU2`
	* @param offsetDU2 - starting index of `DU2`
	* @param IPIV - vector of pivot indices
	* @param strideIPIV - stride length for `IPIV`
	* @param offsetIPIV - starting index of `IPIV`
	* @returns status code
	*
	* @example
	* var DL = new Float64Array( [ 1.0, 1.0 ] );
	* var D = new Float64Array( [ 2.0, 3.0, 1.0 ] );
	* var DU = new Float64Array( [ 1.0, 1.0 ] );
	* var DU2 = new Float64Array( [ 0.0 ] );
	* var IPIV = new Int32Array( [ 0, 0, 0 ] );
	*
	* dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 );
	* // DL => <Float64Array>[ 0.5, 0.4 ]
	* // D => <Float64Array>[ 2.0, 2.5, 0.6 ]
	* // DU => <Float64Array>[ 1.0, 1.0 ]
	* // DU2 => <Float64Array>[ 0.0 ]
	* // IPIV => <Int32Array>[ 0, 1, 2 ]
	*/
	ndarray( N: number, DL: Float64Array, strideDL: number, offsetDL: number, D: Float64Array, strideD: number, offsetD: number, DU: Float64Array, strideDU: number, offsetDU: number, DU2: Float64Array, strideDU2: number, offsetDU2: number, IPIV: Int32Array, strideIPIV: number, offsetIPIV: number ): StatusCode;
}

/**
* LAPACK routine to compute an `LU` factorization of a real tridiagonal matrix `A` using elimination with partial pivoting and row interchanges.
*
* ## Notes
*
* -   `DL` should have `N-1` indexed elements and is overwritten by the multipliers that define the matrix `L` from the `LU` factorization of `A`.
* -   `D` should have `N` indexed elements and is overwritten by the diagonal elements of the upper triangular matrix `U` from the `LU` factorization of `A`.
* -   `DU` should have `N-1` indexed elements and is overwritten by the elements of the first super-diagonal of `U`.
* -   `DU2` should have `N-2` indexed elements and is overwritten by the elements of the second super-diagonal of `U`.
* -   For `0 <= i < n`, row `i` of the matrix is interchanged with row `IPIV(i)`. `IPIV(i)` will always be either `i` or `i+1`. `IPIV(i) = i` indicates a row interchange was not required.
*
* @param N - number of rows/columns in `A`
* @param DL - the first sub diagonal of `A`
* @param D - the diagonal of `A`
* @param DU - the first super-diagonal of `A`
* @param DU2 - the second super-diagonal of `U`
* @param IPIV - vector of pivot indices
* @returns status code
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Int32Array = require( '@stdlib/array/int32' );
*
* var DL = new Float64Array( [ 1.0, 1.0 ] );
* var D = new Float64Array( [ 2.0, 3.0, 1.0 ] );
* var DU = new Float64Array( [ 1.0, 1.0 ] );
* var DU2 = new Float64Array( [ 0.0 ] );
* var IPIV = new Int32Array( [ 0, 0, 0 ] );
*
* dgttrf( 3, DL, D, DU, DU2, IPIV );
* // DL => <Float64Array>[ 0.5, 0.4 ]
* // D => <Float64Array>[ 2.0, 2.5, 0.6 ]
* // DU => <Float64Array>[ 1.0, 1.0 ]
* // DU2 => <Float64Array>[ 0.0 ]
* // IPIV => <Int32Array>[ 0, 1, 2 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Int32Array = require( '@stdlib/array/int32' );
*
* var DL = new Float64Array( [ 1.0, 1.0 ] );
* var D = new Float64Array( [ 2.0, 3.0, 1.0 ] );
* var DU = new Float64Array( [ 1.0, 1.0 ] );
* var DU2 = new Float64Array( [ 0.0 ] );
* var IPIV = new Int32Array( [ 0, 0, 0 ] );
*
* dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 );
* // DL => <Float64Array>[ 0.5, 0.4 ]
* // D => <Float64Array>[ 2.0, 2.5, 0.6 ]
* // DU => <Float64Array>[ 1.0, 1.0 ]
* // DU2 => <Float64Array>[ 0.0 ]
* // IPIV => <Int32Array>[ 0, 1, 2 ]
*/
declare var dgttrf: Routine;


// EXPORTS //

export = dgttrf;
