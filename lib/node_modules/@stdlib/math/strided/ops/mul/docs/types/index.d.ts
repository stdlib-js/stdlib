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

/// <reference types="@stdlib/types"/>

import { ArrayLike, ComplexTypedArray } from '@stdlib/types/array';

/**
* Real or complex number array.
*/
type RealOrComplexArray = ArrayLike<number> | ComplexTypedArray;

/**
* Interface describing `mul`.
*/
interface Routine {
	/**
	* Multiplies each element in a strided array `x` to a corresponding element in a strided array `y` and assigns the results to elements in a strided array `z`.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param dtypeY - `y` data type
	* @param y - input array
	* @param strideY - `y` stride length
	* @param dtypeZ - `z` data type
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws ninth argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `z`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* mul( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
	* // z => <Float64Array>[ -2.0, 2.0, 9.0, -20.0, 20.0 ]
	*/
	( N: number, dtypeX: any, x: RealOrComplexArray, strideX: number, dtypeY: any, y: RealOrComplexArray, strideY: number, dtypeZ: any, z: RealOrComplexArray, strideZ: number ): RealOrComplexArray;

	/**
	* Multiplies each element in a strided array `x` to a corresponding element in a strided array `y` and assigns the results to elements in a strided array `z` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param dtypeX - `x` data type
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param dtypeY - `y` data type
	* @param y - input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param dtypeZ - `z` data type
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param offsetZ - starting index for `z`
	* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws seventh argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws eleventh argument has insufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns `z`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* mul.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
	* // z => <Float64Array>[ -2.0, 2.0, 9.0, -20.0, 20.0 ]
	*/
	ndarray( N: number, dtypeX: any, x: RealOrComplexArray, strideX: number, offsetX: number, dtypeY: any, y: RealOrComplexArray, strideY: number, offsetY: number, dtypeZ: any, z: RealOrComplexArray, strideZ: number, offsetZ: number ): RealOrComplexArray;
}

/**
* Multiplies each element in a strided array `x` to a corresponding element in a strided array `y` and assigns the results to elements in a strided array `z`.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - input array
* @param strideX - `x` stride length
* @param dtypeY - `y` data type
* @param y - input array
* @param strideY - `y` stride length
* @param dtypeZ - `z` data type
* @param z - destination array
* @param strideZ - `z` stride length
* @throws third argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws sixth argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws ninth argument has insufficient elements based on the associated stride and the number of indexed elements
* @throws unable to resolve a strided array function supporting the provided array argument data types
* @returns `z`
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* mul( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 );
* // z => <Float64Array>[ -2.0, 2.0, 9.0, -20.0, 20.0 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* mul.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 );
* // z => <Float64Array>[ -2.0, 2.0, 9.0, -20.0, 20.0 ]
*/
declare var mul: Routine;


// EXPORTS //

export = mul;
