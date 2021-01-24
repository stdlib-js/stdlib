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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Function which operates on a number.
*
* @param x - input value
* @returns return value
*/
type ScalarFunction = ( x: number ) => number; // FIXME: add complex number support

/**
* Function which operates on each element in a strided input array `x` and assigns the results to elements in a strided output array `y`.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - destination array
* @param strideY - `y` stride length
* @returns `y` or `undefined`
*/
type StridedArrayFunction = ( N: number, x: ArrayLike<number>, strideX: number, y: ArrayLike<number>, strideY: number ) => ArrayLike<number> | void; // tslint:disable-line:max-line-length

/**
* Function which operates on each element in a strided input array `x` and assigns the results to elements in a strided output array `y` using alternative (i.e., ndarray) indexing semantics.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param offsetX - starting index for `x`
* @param y - destination array
* @param strideY - `y` stride length
* @param offsetY - starting index for `y`
* @returns `y` or `undefined`
*/
type StridedArrayFunctionWithOffsets = ( N: number, x: ArrayLike<number>, strideX: number, offsetX: number, y: ArrayLike<number>, strideY: number, offsetY: number ) => ArrayLike<number> | void; // tslint:disable-line:max-line-length

/**
* Interface describing a resolution table object.
*/
interface Table {
	/**
	* Strided look-up table for scalar arguments.
	*
	* ## Notes
	*
	* -   The strided look-up table should be comprised as follows:
	*
	*     ```text
	*     [ <dtype>, <fcn>, <dtype>, <fcn>, ... ]
	*     ```
	*/
	scalar?: ArrayLike<string | ScalarFunction>;

	/**
	* Strided look-up table for array-like object arguments.
	*
	* ## Notes
	*
	* -   The strided look-up table should be comprised as follows:
	*
	*     ```text
	*     [ <dtype>, <fcn>, <dtype>, <fcn>, ... ]
	*     ```
	*/
	array?: ArrayLike<string | StridedArrayFunction>;

	/**
	* Strided look-up table for ndarray arguments.
	*
	* ## Notes
	*
	* -   The strided look-up table should be comprised as follows:
	*
	*     ```text
	*     [ <dtype>, <fcn>, <dtype>, <fcn>, ... ]
	*     ```
	*/
	ndarray?: ArrayLike<string | StridedArrayFunctionWithOffsets>;
}

/**
* Interface describing a function which dispatches to a specific function based on input argument types.
*/
interface DispatchFunction {
	/**
	* Dispatches to a function which operates on a number.
	*
	* @param x - input value
	* @returns return value
	*
	* @example
	* var nabs = require( `@stdlib/math/base/special/abs` );
	*
	* var table = {
	*     'scalar': [
	*         'number', nabs
	*     ]
	* };
	*
	* var abs = dispatch( table );
	*
	* var y = abs( -1.0 );
	* // returns 1.0
	*/
	( x: number ): number;

	/**
	* Dispatches to a function which operates on an ndarray.
	*
	* @param x - input value
	* @returns return value
	*
	* @example
	* var dabs = require( `@stdlib/math/strided/special/dabs` );
	* var sabs = require( `@stdlib/math/strided/special/sabs` );
	* var gabs = require( `@stdlib/math/strided/special/abs` );
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var table = {
	*     'ndarray': [
	*         'float64', dabs.ndarray,
	*         'float32', sabs.ndarray,
	*         'generic', gabs.ndarray
	*     ]
	* };
	*
	* var abs = dispatch( table );
	*
	* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
	* var y = abs( x );
	* // returns <ndarray>
	*
	* var v = y.get( 0, 1 );
	* // returns 2.0
	*/
	( x: ndarray ): ndarray;

	/**
	* Dispatches to a function which operates on an array-like object.
	*
	* @param x - input value
	* @returns return value
	*
	* @example
	* var dabs = require( `@stdlib/math/strided/special/dabs` );
	* var sabs = require( `@stdlib/math/strided/special/sabs` );
	* var gabs = require( `@stdlib/math/strided/special/abs` );
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var table = {
	*     'array': [
	*         'float64', dabs,
	*         'float32', sabs,
	*         'generic', gabs
	*     ]
	* };
	*
	* var abs = dispatch( table );
	*
	* var x = new Float64Array( [ -1.0, -2.0 ] );
	* var y = abs( x );
	* // returns <Float64Array>[ 1.0, 2.0 ]
	*/
	( x: ArrayLike<number> ): ArrayLike<number>;
}

/**
* Returns a function which dispatches to specified functions based on input argument types.
*
* @param table - resolution table object
* @throws must provide valid table fields
* @throws table field values must be array-like objects having an even number of elements
* @throws table field values must consist of dtype-function pairs
* @returns dispatch function
*
* @example
* var nabs = require( `@stdlib/math/base/special/abs` );
* var dabs = require( `@stdlib/math/strided/special/dabs` );
* var sabs = require( `@stdlib/math/strided/special/sabs` );
* var gabs = require( `@stdlib/math/strided/special/abs` );
* var Float64Array = require( `@stdlib/array/float64` );
*
* var table = {
*     'scalar': [
*         'number', nabs
*     ],
*     'array': [
*         'float64', dabs,
*         'float32', sabs,
*         'generic', gabs
*     ],
*     'ndarray': [
*         'float64', dabs.ndarray,
*         'float32', sabs.ndarray,
*         'generic', gabs.ndarray
*     ]
* };
*
* var abs = dispatch( table );
*
* var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
* var y = abs( x );
* // returns <Float64Array>[ 1.0, 2.0, 3.0 ]
*/
declare function dispatch( table: Table ): DispatchFunction;


// EXPORTS //

export = dispatch;
