/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/**
* Returns an accessed value.
*
* @returns accessed value
*/
type Nullary = () => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @returns accessed value
*/
type Unary = ( value: any ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @returns accessed value
*/
type Binary = ( value: any, idx: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @returns accessed value
*/
type Ternary = ( value: any, idx: number, indices: Array<number> ) => number | void; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed value
*/
type Quaternary = ( value: any, idx: number, indices: Array<number>, arrays: Array<Float64Array> ) => number | void; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed value
*/
type Callback = Nullary | Unary | Binary | Ternary | Quaternary;

/**
* Interface describing `dcbrtBy`.
*/
interface Routine {
	/**
	* Computes the cube root of each element retrieved from an input double-precision floating-point strided array via a callback function and assigns each result to an element in an output double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns destination array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
	* var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dcbrtBy( x.length, x, 1, out, 1, accessor );
	* // out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
	*/
	( N: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number, clbk: Callback, thisArg?: any ): Float64Array; // tslint:disable-line:max-line-length

	/**
	* Computes the cube root of each element retrieved from an input double-precision floating-point strided array via a callback function and assigns each result to an element in an output double-precision floating-point strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns destination array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
	* var out = Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dcbrtBy.ndarray( x.length, x, 1, 0, out, 1, 0, accessor );
	* // out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number, clbk: Callback, thisArg?: any ): Float64Array; // tslint:disable-line:max-line-length
}

/**
* Computes the cube root of each element retrieved from an input double-precision floating-point strided array via a callback function and assigns each result to an element in an output double-precision floating-point strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - destination array
* @param strideY - `y` stride length
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns destination array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* function accessor( v ) {
*     return v;
* }
*
* var x = Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
* var out = Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dcbrtBy( x.length, x, 1, out, 1, accessor );
* // out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* function accessor( v ) {
*     return v;
* }
*
* var x = Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
* var out = Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dcbrtBy.ndarray( x.length, x, 1, 0, out, 1, 0, accessor );
* // out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
*/
declare var dcbrtBy: Routine;


// EXPORTS //

export = dcbrtBy;
