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

/**
* Interface describing `dfillNaN`.
*/
interface Routine {
	/**
	* Replaces double-precision floating-point strided array elements equal to `NaN` with a specified scalar constant.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ NaN, 1.0, 3.0, NaN, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* dfillNaN( x.length, 0.0, x, 1 );
	* // x => <Float64Array>[ 0.0, 1.0, 3.0, 0.0, 4.0, 0.0, -1.0, -3.0 ]
	*/
	( N: number, alpha: number, x: Float64Array, strideX: number ): Float64Array;

	/**
	* Replaces double-precision floating-point strided array elements equal to `NaN` with a specified scalar constant using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ NaN, 1.0, 3.0, NaN, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* dfillNaN.ndarray( x.length, 0.0, x, 1, 0 );
	* // x => <Float64Array>[ 0.0, 1.0, 3.0, 0.0, 4.0, 0.0, -1.0, -3.0 ]
	*/
	ndarray( N: number, alpha: number, x: Float64Array, strideX: number, offsetX: number ): Float64Array;
}

/**
* Replaces double-precision floating-point strided array elements equal to `NaN` with a specified scalar constant.
*
* @param N - number of indexed elements
* @param alpha - scalar constant
* @param x - input array
* @param strideX - stride length
* @returns `x`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ NaN, 1.0, 3.0, NaN, 4.0, 0.0, -1.0, -3.0 ] );
*
* dfillNaN( x.length, 0.0, x, 1 );
* // x => <Float64Array>[ 0.0, 1.0, 3.0, 0.0, 4.0, 0.0, -1.0, -3.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ NaN, 1.0, 3.0, NaN, 4.0, 0.0, -1.0, -3.0 ] );
*
* dfillNaN.ndarray( x.length, 0.0, x, 1, 0 );
* // x => <Float64Array>[ 0.0, 1.0, 3.0, 0.0, 4.0, 0.0, -1.0, -3.0 ]
*/
declare var dfillNaN: Routine;


// EXPORTS //

export = dfillNaN;
