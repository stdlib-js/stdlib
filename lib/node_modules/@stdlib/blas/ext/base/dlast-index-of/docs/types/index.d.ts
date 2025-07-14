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
* Interface describing `dlastIndexOf`.
*/
interface Routine {
	/**
	* Returns the last index of a specified search element in a double-precision floating-point strided array.
	*
	* ## Notes
	*
	* -   If the function is unable to find a search element, the function returns `-1`.
	*
	* @param N - number of indexed elements
	* @param searchElement - search element
	* @param x - input array
	* @param strideX - stride length
	* @returns index
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	*
	* var idx = dlastIndexOf( x.length, 2.0, x, 1 );
	* // returns 1
	*/
	( N: number, searchElement: number, x: Float64Array, strideX: number ): number;

	/**
	* Returns the last index of a specified search element in a double-precision floating-point strided array using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If the function is unable to find a search element, the function returns `-1`.
	*
	* @param N - number of indexed elements
	* @param searchElement - search element
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns index
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	*
	* var idx = dlastIndexOf.ndarray( x.length, 2.0, x, 1, 0 );
	* // returns 1
	*/
	ndarray( N: number, searchElement: number, x: Float64Array, strideX: number, offsetX: number ): number;
}

/**
* Returns the last index of a specified search element in a double-precision floating-point strided array.
*
* ## Notes
*
* -   If the function is unable to find a search element, the function returns `-1`.
*
* @param N - number of indexed elements
* @param searchElement - search element
* @param x - input array
* @param strideX - stride length
* @returns index
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var idx = dlastIndexOf( x.length, 2.0, x, 1 );
* // returns 1
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var idx = dlastIndexOf.ndarray( x.length, 2.0, x, 1, 0 );
* // returns 1
*/
declare var dlastIndexOf: Routine;


// EXPORTS //

export = dlastIndexOf;
