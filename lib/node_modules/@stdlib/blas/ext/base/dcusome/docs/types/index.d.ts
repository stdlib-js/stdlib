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

import { BooleanArray } from '@stdlib/types/array';

/**
* Interface describing `dcusome`.
*/
interface Routine {
	/**
	* Cumulatively tests whether at least `k` elements in a double-precision floating-point strided array are truthy.
	*
	* @param N - number of indexed elements
	* @param k - minimum number of truthy elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var BooleanArray = require( '@stdlib/array/bool' );
	*
	* var x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0, 1.0 ] );
	* var out = new BooleanArray( 5 );
	*
	* dcusome( x.length, 2, x, 1, out, 1 );
	* // out => <BooleanArray>[ false, false, false, true, true ]
	*/
	( N: number, k: number, x: Float64Array, strideX: number, out: BooleanArray, strideOut: number ): BooleanArray;

	/**
	* Cumulatively tests whether at least `k` elements in a double-precision floating-point strided array are truthy using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param k - minimum number of truthy elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var BooleanArray = require( '@stdlib/array/bool' );
	*
	* var x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0, 1.0 ] );
	* var out = new BooleanArray( 5 );
	*
	* dcusome.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
	* // out => <BooleanArray>[ false, false, false, true, true ]
	*/
	ndarray( N: number, k: number, x: Float64Array, strideX: number, offsetX: number, out: BooleanArray, strideOut: number, offsetOut: number ): BooleanArray;
}

/**
* Cumulatively tests whether at least `k` elements in a double-precision floating-point strided array are truthy.
*
* @param N - number of indexed elements
* @param k - minimum number of truthy elements
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output array
* @param strideOut - stride length for `out`
* @returns output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0, 1.0 ] );
* var out = new BooleanArray( 5 );
*
* dcusome( x.length, 2, x, 1, out, 1 );
* // out => <BooleanArray>[ false, false, false, true, true ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0, 1.0 ] );
* var out = new BooleanArray( 5 );
*
* dcusome.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
* // out => <BooleanArray>[ false, false, false, true, true ]
*/
declare var dcusome: Routine;


// EXPORTS //

export = dcusome;
