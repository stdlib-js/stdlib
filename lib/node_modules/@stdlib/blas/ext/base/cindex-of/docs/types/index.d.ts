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

/// <reference types="@stdlib/types"/>

import { Complex64Array } from '@stdlib/types/array';
import { Complex64 } from '@stdlib/types/complex';

/**
* Interface describing `cindexOf`.
*/
interface Routine {
	/**
	* Returns the first index of a specified search element in a single-precision complex floating-point strided array.
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
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* var idx = cindexOf( x.length, new Complex64( 3.0, 4.0 ), x, 1 );
	* // returns 1
	*/
	( N: number, searchElement: Complex64, x: Complex64Array, strideX: number ): number;

	/**
	* Returns the first index of a specified search element in a single-precision complex floating-point strided array using alternative indexing semantics.
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
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* var idx = cindexOf.ndarray( x.length, new Complex64( 3.0, 4.0 ), x, 1, 0 );
	* // returns 1
	*/
	ndarray( N: number, searchElement: Complex64, x: Complex64Array, strideX: number, offsetX: number ): number;
}

/**
* Returns the first index of a specified search element in a single-precision complex floating-point strided array.
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
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var idx = cindexOf( x.length, new Complex64( 3.0, 4.0 ), x, 1 );
* // returns 1
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var idx = cindexOf.ndarray( x.length, new Complex64( 3.0, 4.0 ), x, 1, 0 );
* // returns 1
*/
declare var cindexOf: Routine;


// EXPORTS //

export = cindexOf;
