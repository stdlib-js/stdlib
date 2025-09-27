/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import { Collection, AccessorArrayLike, Complex128Array, Complex64Array, BooleanArray } from '@stdlib/types/array';
import { float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, boolndarray, genericndarray, Order } from '@stdlib/types/ndarray';

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'float64'
*/
declare function array2ndarray( buf: Float64Array, order: Order ): float64ndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'float32'
*/
declare function array2ndarray( buf: Float32Array, order: Order ): float32ndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'complex128'
*/
declare function array2ndarray( buf: Complex128Array, order: Order ): complex128ndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var arr = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'complex64'
*/
declare function array2ndarray( buf: Complex64Array, order: Order ): complex64ndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var arr = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'int32'
*/
declare function array2ndarray( buf: Int32Array, order: Order ): int32ndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var Int16Array = require( '@stdlib/array/int16' );
*
* var arr = new Int16Array( [ 1, 2, 3, 4 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'int16'
*/
declare function array2ndarray( buf: Int16Array, order: Order ): int16ndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
*
* var arr = new Int8Array( [ 1, 2, 3, 4 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'int8'
*/
declare function array2ndarray( buf: Int8Array, order: Order ): int8ndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var arr = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'uint32'
*/
declare function array2ndarray( buf: Uint32Array, order: Order ): uint32ndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var arr = new Int16Array( [ 1, 2, 3, 4 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'uint16'
*/
declare function array2ndarray( buf: Uint16Array, order: Order ): uint16ndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var arr = new Int8Array( [ 1, 2, 3, 4 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'uint8'
*/
declare function array2ndarray( buf: Uint8Array, order: Order ): uint8ndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var arr = new Int8Array( [ 1, 2, 3, 4 ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'uint8c'
*/
declare function array2ndarray( buf: Uint8ClampedArray, order: Order ): uint8cndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var arr = new BooleanArray( [ true, false, true, false ] );
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'bool'
*/
declare function array2ndarray( buf: BooleanArray, order: Order ): boolndarray;

/**
* Converts an array to a one-dimensional ndarray.
*
* @param buf - input array
* @param order - memory layout (row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* var x = array2ndarray( arr, 'row-major' );
* // returns <ndarray>
*
* var dt = x.dtype;
* // returns 'generic'
*/
declare function array2ndarray<T = unknown>( buf: Array<T> | Collection<T> | AccessorArrayLike<T>, order: Order ): genericndarray<T>;


// EXPORTS //

export = array2ndarray;
