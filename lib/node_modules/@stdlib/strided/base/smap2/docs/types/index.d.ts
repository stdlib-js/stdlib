/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Callback invoked for indexed strided input array elements.
*
* @param x - strided array element
* @param y - strided array element
* @returns result
*/
type Binary = ( x: number, y: number ) => number;

/**
* Interface describing `smap2`.
*/
interface Routine {
	/**
	* Applies a binary function to single-precision floating-point strided input arrays and assigns results to a single-precision floating-point strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param fcn - binary function to apply
	* @returns `z`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	* var addf = require( `@stdlib/math/base/ops/addf` );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* smap2( x.length, x, 1, y, 1, z, 1, addf );
	* // z => <Float32Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	( N: number, x: Float32Array, strideX: number, y: Float32Array, strideY: number, z: Float32Array, strideZ: number, fcn: Binary ): Float32Array;

	/**
	* Applies a binary function to single-precision floating-point strided input arrays and assigns results to a single-precision floating-point strided output array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param offsetZ - starting index for `z`
	* @param fcn - binary function to apply
	* @returns `z`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	* var addf = require( `@stdlib/math/base/ops/addf` );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, addf );
	* // z => <Float32Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	ndarray( N: number, x: Float32Array, strideX: number, offsetX: number, y: Float32Array, strideY: number, offsetY: number, z: Float32Array, strideZ: number, offsetZ: number, fcn: Binary ): Float32Array;
}

/**
* Applies a binary function to single-precision floating-point strided input arrays and assigns results to a single-precision floating-point strided output array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - input array
* @param strideY - `y` stride length
* @param z - destination array
* @param strideZ - `z` stride length
* @param fcn - binary function to apply
* @returns `z`
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
* var addf = require( `@stdlib/math/base/ops/addf` );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* smap2( x.length, x, 1, y, 1, z, 1, addf );
* // z => <Float32Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
* var addf = require( `@stdlib/math/base/ops/addf` );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, addf );
* // z => <Float32Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
declare var smap2: Routine;


// EXPORTS //

export = smap2;
