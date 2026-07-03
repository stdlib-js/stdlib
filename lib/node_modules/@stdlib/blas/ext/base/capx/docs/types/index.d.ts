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
* Interface describing `capx`.
*/
interface Routine {
	/**
	* Adds a scalar constant to each element in a single-precision complex floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	*
	* var alpha = new Complex64( 10.0, 10.0 );
	*
	* capx( x.length, alpha, x, 1 );
	* // x => <Complex64Array>[ 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0 ]
	*/
	( N: number, alpha: Complex64, x: Complex64Array, strideX: number ): Complex64Array;

	/**
	* Adds a scalar constant to each element in a single-precision complex floating-point strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	*
	* var alpha = new Complex64( 10.0, 10.0 );
	*
	* capx.ndarray( x.length, alpha, x, 1, 0 );
	* // x => <Complex64Array>[ 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0 ]
	*/
	ndarray( N: number, alpha: Complex64, x: Complex64Array, strideX: number, offsetX: number ): Complex64Array;
}

/**
* Adds a scalar constant to each element in a single-precision complex floating-point strided array.
*
* @param N - number of indexed elements
* @param alpha - scalar constant
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var alpha = new Complex64( 10.0, 10.0 );
*
* capx( x.length, alpha, x, 1 );
* // x => <Complex64Array>[ 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var alpha = new Complex64( 10.0, 10.0 );
*
* capx.ndarray( x.length, alpha, x, 1, 0 );
* // x => <Complex64Array>[ 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0 ]
*/
declare var capx: Routine;


// EXPORTS //

export = capx;
