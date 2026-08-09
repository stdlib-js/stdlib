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

import { Complex128Array } from '@stdlib/types/array';
import { Complex128 } from '@stdlib/types/complex';

/**
* Interface describing `zxsa`.
*/
interface Routine {
	/**
	* Subtracts a scalar constant from each element in a double-precision complex floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	*
	* var alpha = new Complex128( 10.0, 10.0 );
	*
	* zxsa( x.length, alpha, x, 1 );
	* // x => <Complex128Array>[ -9.0, -8.0, -7.0, -6.0, -5.0, -4.0, -3.0, -2.0 ]
	*/
	( N: number, alpha: Complex128, x: Complex128Array, strideX: number ): Complex128Array;

	/**
	* Subtracts a scalar constant from each element in a double-precision complex floating-point strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	*
	* var alpha = new Complex128( 10.0, 10.0 );
	*
	* zxsa.ndarray( x.length, alpha, x, 1, 0 );
	* // x => <Complex128Array>[ -9.0, -8.0, -7.0, -6.0, -5.0, -4.0, -3.0, -2.0 ]
	*/
	ndarray( N: number, alpha: Complex128, x: Complex128Array, strideX: number, offsetX: number ): Complex128Array;
}

/**
* Subtracts a scalar constant from each element in a double-precision complex floating-point strided array.
*
* @param N - number of indexed elements
* @param alpha - scalar constant
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var alpha = new Complex128( 10.0, 10.0 );
*
* zxsa( x.length, alpha, x, 1 );
* // x => <Complex128Array>[ -9.0, -8.0, -7.0, -6.0, -5.0, -4.0, -3.0, -2.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var alpha = new Complex128( 10.0, 10.0 );
*
* zxsa.ndarray( x.length, alpha, x, 1, 0 );
* // x => <Complex128Array>[ -9.0, -8.0, -7.0, -6.0, -5.0, -4.0, -3.0, -2.0 ]
*/
declare var zxsa: Routine;


// EXPORTS //

export = zxsa;
