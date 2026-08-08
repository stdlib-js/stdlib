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
* Interface describing `dminheapSiftDown`.
*/
interface Routine {
	/**
	* Sifts a value down from a specified index in a double-precision floating-point strided min-heap until the heap property is restored.
	*
	* ## Notes
	*
	* -   The function assumes that the subtrees rooted at the children of `index` already satisfy the min-heap property and only the value being sifted may violate the min-heap invariant.
	* -   The min-heap algorithm is sensitive to the presence of `NaN` values. Since `NaN` comparisons always return `false`, if `NaN` values are present in the input array, the results may be unpredictable.
	*
	* @param N - number of indexed elements
	* @param index - logical index at which to begin sifting
	* @param value - value to place into the heap
	* @param x - heap storage array
	* @param strideX - stride length
	* @returns heap storage array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	*
	* dminheapSiftDown( 5, 0, 7.0, x, 1 );
	* // x => <Float64Array>[ 2.0, 4.0, 3.0, 7.0, 5.0 ]
	*/
	( N: number, index: number, value: number, x: Float64Array, strideX: number ): Float64Array;

	/**
	* Sifts a value down from a specified index in a double-precision floating-point strided min-heap until the heap property is restored using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   The function assumes that the subtrees rooted at the children of `index` already satisfy the min-heap property and only the value being sifted may violate the min-heap invariant.
	* -   The min-heap algorithm is sensitive to the presence of `NaN` values. Since `NaN` comparisons always return `false`, if `NaN` values are present in the input array, the results may be unpredictable.
	*
	* @param N - number of indexed elements
	* @param index - logical index at which to begin sifting
	* @param value - value to place into the heap
	* @param x - heap storage array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns heap storage array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	*
	* dminheapSiftDown.ndarray( 5, 0, 7.0, x, 1, 0 );
	* // x => <Float64Array>[ 2.0, 4.0, 3.0, 7.0, 5.0 ]
	*/
	ndarray( N: number, index: number, value: number, x: Float64Array, strideX: number, offsetX: number ): Float64Array;
}

/**
* Sifts a value down from a specified index in a double-precision floating-point strided min-heap until the heap property is restored.
*
* ## Notes
*
* -   The function assumes that the subtrees rooted at the children of `index` already satisfy the min-heap property and only the value being sifted may violate the min-heap invariant.
* -   The min-heap algorithm is sensitive to the presence of `NaN` values. Since `NaN` comparisons always return `false`, if `NaN` values are present in the input array, the results may be unpredictable.
*
* @param N - number of indexed elements
* @param index - logical index at which to begin sifting
* @param value - value to place into the heap
* @param x - heap storage array
* @param strideX - stride length
* @returns heap storage array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* dminheapSiftDown( 5, 0, 7.0, x, 1 );
* // x => <Float64Array>[ 2.0, 4.0, 3.0, 7.0, 5.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* dminheapSiftDown.ndarray( 5, 0, 7.0, x, 1, 0 );
* // x => <Float64Array>[ 2.0, 4.0, 3.0, 7.0, 5.0 ]
*/
declare var dminheapSiftDown: Routine;


// EXPORTS //

export = dminheapSiftDown;
