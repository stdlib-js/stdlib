/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { Collection, AccessorArrayLike, Complex128Array, Complex64Array } from '@stdlib/types/array';
import { Mode } from '@stdlib/types/ndarray';

/**
* Index array.
*/
type IndexArray = Collection<number> | AccessorArrayLike<number>;

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Index mode.
	*/
	mode?: Mode;
}

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var zeroTo = require( '@stdlib/array/zero-to' );
*
* var x = zeroTo( 4, 'float64' );
* var y = take( x, [ 1, 3 ] );
* // returns <Float64Array>[ 2.0, 4.0 ]
*/
declare function take( x: Float64Array, indices: IndexArray, options?: Options ): Float64Array;

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var zeroTo = require( '@stdlib/array/zero-to' );
*
* var x = zeroTo( 4, 'float32' );
* var y = take( x, [ 1, 3 ] );
* // returns <Float32Array>[ 2.0, 4.0 ]
*/
declare function take( x: Float32Array, indices: IndexArray, options?: Options ): Float32Array;

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var zeroTo = require( '@stdlib/array/zero-to' );
*
* var x = zeroTo( 4, 'int32' );
* var y = take( x, [ 1, 3 ] );
* // returns <Int32Array>[ 2, 4 ]
*/
declare function take( x: Int32Array, indices: IndexArray, options?: Options ): Int32Array;

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var zeroTo = require( '@stdlib/array/zero-to' );
*
* var x = zeroTo( 4, 'int16' );
* var y = take( x, [ 1, 3 ] );
* // returns <Int16Array>[ 2, 4 ]
*/
declare function take( x: Int16Array, indices: IndexArray, options?: Options ): Int16Array;

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var zeroTo = require( '@stdlib/array/zero-to' );
*
* var x = zeroTo( 4, 'int8' );
* var y = take( x, [ 1, 3 ] );
* // returns <Int8Array>[ 2, 4 ]
*/
declare function take( x: Int8Array, indices: IndexArray, options?: Options ): Int8Array;

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var zeroTo = require( '@stdlib/array/zero-to' );
*
* var x = zeroTo( 4, 'uint32' );
* var y = take( x, [ 1, 3 ] );
* // returns <Uint32Array>[ 2, 4 ]
*/
declare function take( x: Uint32Array, indices: IndexArray, options?: Options ): Uint32Array;

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var zeroTo = require( '@stdlib/array/zero-to' );
*
* var x = zeroTo( 4, 'uint16' );
* var y = take( x, [ 1, 3 ] );
* // returns <Uint16Array>[ 2, 4 ]
*/
declare function take( x: Uint16Array, indices: IndexArray, options?: Options ): Uint16Array;

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var zeroTo = require( '@stdlib/array/zero-to' );
*
* var x = zeroTo( 4, 'uint8' );
* var y = take( x, [ 1, 3 ] );
* // returns <Uint8Array>[ 2, 4 ]
*/
declare function take( x: Uint8Array, indices: IndexArray, options?: Options ): Uint8Array;

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var zeroTo = require( '@stdlib/array/zero-to' );
*
* var x = zeroTo( 4, 'uint8c' );
* var y = take( x, [ 1, 3 ] );
* // returns <Uint8ClampedArray>[ 2, 4 ]
*/
declare function take( x: Uint8ClampedArray, indices: IndexArray, options?: Options ): Uint8ClampedArray;

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var zeroTo = require( '@stdlib/array/zero-to' );
*
* var x = zeroTo( 4, 'complex128' );
* var y = take( x, [ 1, 3 ] );
* // returns <Complex128Array>[ 2.0, 0.0, 4.0, 0.0 ]
*/
declare function take( x: Complex128Array, indices: IndexArray, options?: Options ): Complex128Array;

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var zeroTo = require( '@stdlib/array/zero-to' );
*
* var x = zeroTo( 4, 'complex64' );
* var y = take( x, [ 1, 3 ] );
* // returns <Complex64Array>[ 2.0, 0.0, 4.0, 0.0 ]
*/
declare function take( x: Complex64Array, indices: IndexArray, options?: Options ): Complex64Array;

/**
* Takes elements from an array.
*
* @param x - input array
* @param indices - list of element indices
* @param options - function options
* @returns output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var y = take( x, [ 1, 3 ] );
* // returns [ 2, 4 ]
*/
declare function take<T = unknown>( x: Collection<T> | AccessorArrayLike<T>, indices: IndexArray, options?: Options ): Array<T>;


// EXPORTS //

export = take;
