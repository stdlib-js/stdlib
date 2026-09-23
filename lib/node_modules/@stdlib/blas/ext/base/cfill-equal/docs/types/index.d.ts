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
* Interface describing `cfillEqual`.
*/
interface Routine {
	/**
	* Replaces single-precision complex floating-point strided array elements equal to a provided search element with a specified scalar constant.
	*
	* @param N - number of indexed elements
	* @param searchElement - search element
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ] );
	* var searchElement = new Complex64( 0.0, 0.0 );
	* var alpha = new Complex64( 5.0, 5.0 );
	*
	* cfillEqual( x.length, searchElement, alpha, x, 1 );
	* // x => <Complex64Array>[ 1.0, 2.0, 5.0, 5.0, 3.0, 4.0, 5.0, 5.0 ]
	*/
	( N: number, searchElement: Complex64, alpha: Complex64, x: Complex64Array, strideX: number ): Complex64Array;

	/**
	* Replaces single-precision complex floating-point strided array elements equal to a provided search element with a specified scalar constant using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param searchElement - search element
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns `x`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ] );
	* var searchElement = new Complex64( 0.0, 0.0 );
	* var alpha = new Complex64( 5.0, 5.0 );
	*
	* cfillEqual.ndarray( x.length, searchElement, alpha, x, 1, 0 );
	* // x => <Complex64Array>[ 1.0, 2.0, 5.0, 5.0, 3.0, 4.0, 5.0, 5.0 ]
	*/
	ndarray( N: number, searchElement: Complex64, alpha: Complex64, x: Complex64Array, strideX: number, offsetX: number ): Complex64Array;
}

/**
* Replaces single-precision complex floating-point strided array elements equal to a provided search element with a specified scalar constant.
*
* @param N - number of indexed elements
* @param searchElement - search element
* @param alpha - scalar constant
* @param x - input array
* @param strideX - stride length
* @returns `x`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ] );
* var searchElement = new Complex64( 0.0, 0.0 );
* var alpha = new Complex64( 5.0, 5.0 );
*
* cfillEqual( x.length, searchElement, alpha, x, 1 );
* // x => <Complex64Array>[ 1.0, 2.0, 5.0, 5.0, 3.0, 4.0, 5.0, 5.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ] );
* var searchElement = new Complex64( 0.0, 0.0 );
* var alpha = new Complex64( 5.0, 5.0 );
*
* cfillEqual.ndarray( x.length, searchElement, alpha, x, 1, 0 );
* // x => <Complex64Array>[ 1.0, 2.0, 5.0, 5.0, 3.0, 4.0, 5.0, 5.0 ]
*/
declare var cfillEqual: Routine;


// EXPORTS //

export = cfillEqual;
