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

/**
* Interface describing `zoneTo`.
*/
interface Routine {
	/**
	* Fills a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from one.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* zoneTo( x.length, x, 1 );
	* // x => <Complex128Array>[ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ]
	*/
	( N: number, x: Complex128Array, strideX: number ): Complex128Array;

	/**
	* Fills a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from one using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* zoneTo.ndarray( x.length, x, 1, 0 );
	* // x => <Complex128Array>[ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ]
	*/
	ndarray( N: number, x: Complex128Array, strideX: number, offsetX: number ): Complex128Array;
}

/**
* Fills a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from one.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zoneTo( x.length, x, 1 );
* // x => <Complex128Array>[ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zoneTo.ndarray( x.length, x, 1, 0 );
* // x => <Complex128Array>[ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ]
*/
declare var zoneTo: Routine;


// EXPORTS //

export = zoneTo;
