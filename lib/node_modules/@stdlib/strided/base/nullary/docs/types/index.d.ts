/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Callback invoked for each indexed strided array element.
*
* @returns result
*/
type Nullary = () => any;

/**
* Interface describing `nullary`.
*/
interface Routine {
	/**
	* Applies a nullary callback and assigns results to elements in a strided output array.
	*
	* @param arrays - array-like object containing one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride length for the output array
	* @param fcn - nullary callback
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function fill() {
	*     return 3.0;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	*
	* var shape = [ x.length ];
	* var strides = [ 1 ];
	*
	* nullary( [ x ], shape, strides, fill );
	*
	* console.log( x );
	* // => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0 ]
	*/
	( arrays: ArrayLike<ArrayLike<any>>, shape: ArrayLike<number>, strides: ArrayLike<number>, fcn: Nullary ): void; // tslint:disable-line:max-line-length

	/**
	* Applies a nullary callback and assigns results to elements in a strided output array using alternative indexing semantics.
	*
	* @param arrays - array-like object containing one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride length for the output array
	* @param offsets - array-like object containing the starting index (i.e., index offset) for the output array
	* @param fcn - nullary callback
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function fill() {
	*     return 3.0;
	* }
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	*
	* var shape = [ x.length ];
	* var strides = [ 1 ];
	* var offsets = [ 0 ];
	*
	* nullary.ndarray( [ x ], shape, strides, offsets, fill );
	*
	* console.log( x );
	* // => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0 ]
	*/
	ndarray( arrays: ArrayLike<ArrayLike<any>>, shape: ArrayLike<number>, strides: ArrayLike<number>, offsets: ArrayLike<number>, fcn: Nullary ): void; // tslint:disable-line:max-line-length
}

/**
* Applies a nullary callback and assigns results to elements in a strided output array.
*
* @param arrays - array-like object containing one output array
* @param shape - array-like object containing a single element, the number of indexed elements
* @param strides - array-like object containing the stride length for the output array
* @param fcn - nullary callback
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* function fill() {
*     return 3.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* var shape = [ x.length ];
* var strides = [ 1 ];
*
* nullary( [ x ], shape, strides, fill );
*
* console.log( x );
* // => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* function fill() {
*     return 3.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* var shape = [ x.length ];
* var strides = [ 1 ];
* var offsets = [ 0 ];
*
* nullary.ndarray( [ x ], shape, strides, offsets, fill );
*
* console.log( x );
* // => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0 ]
*/
declare var nullary: Routine;


// EXPORTS //

export = nullary;
