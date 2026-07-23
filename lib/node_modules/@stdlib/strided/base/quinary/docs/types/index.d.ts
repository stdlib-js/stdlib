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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Callback invoked for indexed strided input array elements.
*
* @param x - first strided array element
* @param y - second strided array element
* @param z - third strided array element
* @param w - fourth strided array element
* @param u - fifth strided array element
* @returns result
*/
type Quinary = ( x: any, y: any, z: any, w: any, u: any ) => any;

/**
* Interface describing `quinary`.
*/
interface Routine {
	/**
	* Applies a quinary callback to strided input array elements and assigns results to elements in a strided output array.
	*
	* @param arrays - array-like object containing five input arrays and one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride lengths for the input and output arrays
	* @param fcn - quinary callback
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add5' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var v = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1, 1, 1, 1 ];
	*
	* quinary( [ x, y, z, w, u, v ], shape, strides, add );
	*
	* console.log( v );
	* // => <Float64Array>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]
	*/
	( arrays: ArrayLike<ArrayLike<any>>, shape: ArrayLike<number>, strides: ArrayLike<number>, fcn: Quinary ): void;

	/**
	* Applies a quinary callback to strided input array elements and assigns results to elements in a strided output array using alternative indexing semantics.
	*
	* @param arrays - array-like object containing five input arrays and one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride lengths for the input and output arrays
	* @param offsets - array-like object containing the starting indices (i.e., index offsets) for the input and output arrays
	* @param fcn - quinary callback
	*
	* @example
	* var add = require( '@stdlib/number/float64/base/add5' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var v = new Float64Array( x.length );
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1, 1, 1, 1, 1 ];
	* var offsets = [ 0, 0, 0, 0, 0, 0 ];
	*
	* quinary.ndarray( [ x, y, z, w, u, v ], shape, strides, offsets, add );
	*
	* console.log( v );
	* // => <Float64Array>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]
	*/
	ndarray( arrays: ArrayLike<ArrayLike<any>>, shape: ArrayLike<number>, strides: ArrayLike<number>, offsets: ArrayLike<number>, fcn: Quinary ): void;
}

/**
* Applies a quinary callback to strided input array elements and assigns results to elements in a strided output array.
*
* @param arrays - array-like object containing five input arrays and one output array
* @param shape - array-like object containing a single element, the number of indexed elements
* @param strides - array-like object containing the stride lengths for the input and output arrays
* @param fcn - quinary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add5' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var v = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1, 1, 1, 1 ];
*
* quinary( [ x, y, z, w, u, v ], shape, strides, add );
*
* console.log( v );
* // => <Float64Array>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]
*
* @example
* var add = require( '@stdlib/number/float64/base/add5' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var v = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1, 1, 1, 1 ];
* var offsets = [ 0, 0, 0, 0, 0, 0 ];
*
* quinary.ndarray( [ x, y, z, w, u, v ], shape, strides, offsets, add );
*
* console.log( v );
* // => <Float64Array>[ 5.0, 10.0, 15.0, 20.0, 25.0 ]
*/
declare var quinary: Routine;


// EXPORTS //

export = quinary;
