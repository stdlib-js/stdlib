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
* Interface describing `cunitspace`.
*/
interface Routine {
	/**
	* Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.
	*
	* @param N - number of indexed elements
	* @param start - starting value
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* cunitspace( x.length, new Complex64( 3.0, 0.0 ), x, 1 );
	* // x => <Complex64Array>[ 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ]
	*/
	( N: number, start: Complex64, x: Complex64Array, strideX: number ): Complex64Array;

	/**
	* Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param start - starting value
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* cunitspace.ndarray( x.length, new Complex64( 3.0, 0.0 ), x, 1, 0 );
	* // x => <Complex64Array>[ 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ]
	*/
	ndarray( N: number, start: Complex64, x: Complex64Array, strideX: number, offsetX: number ): Complex64Array;
}

/**
* Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.
*
* @param N - number of indexed elements
* @param start - starting value
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cunitspace( x.length, new Complex64( 3.0, 0.0 ), x, 1 );
* // x => <Complex64Array>[ 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cunitspace.ndarray( x.length, new Complex64( 3.0, 0.0 ), x, 1, 0 );
* // x => <Complex64Array>[ 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ]
*/
declare var cunitspace: Routine;


// EXPORTS //

export = cunitspace;
