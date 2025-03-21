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

import { Collection, AccessorArrayLike, TypedArray, ComplexTypedArray, BooleanTypedArray } from '@stdlib/types/array';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Mask array.
*/
type MaskArray = Collection | AccessorArrayLike<any>;

/**
* Values array.
*/
type ValuesArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Mode specifying behavior when the number of values to set does not equal the number of truthy values in the mask array.
	*
	* ## Notes
	*
	* -   The function supports the following modes:
	*
	*     -   `'strict'`: specifies that the function must raise an exception when the number of `values` does not **exactly** equal the number of truthy `mask` values.
	*    -   `'non_strict'`: specifies that the function must raise an exception when the function is provided insufficient `values` to satisfy the `mask` array.
	*    -   `'strict_broadcast'`: specifies that the function must broadcast a single-element `values` array and otherwise raise an exception when the number of `values` does not **exactly** equal the number of truthy `mask` values.
	*    -   `'broadcast'`: specifies that the function must broadcast a single-element `values` array and otherwise raise an exception when the function is provided insufficient `values` to satisfy the `mask` array.
	*    -   `'repeat'`: specifies that the function must reuse provided `values` when replacing elements in `x` in order to satisfy the `mask` array.
	*/
	mode?: 'strict' | 'non_strict' | 'strict_broadcast' | 'broadcast' | 'repeat';
}

/**
* Replaces elements of an array with provided values according to a provided mask array.
*
* @param x - input array
* @param mask - mask array
* @param values - values to set
* @param options - function options
* @returns input array
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var mask = [ 0, 1, 1, 0 ];
* var values = [ 20, 30 ];
*
* var out = place( x, mask, values );
* // returns <Int32Array>[ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var out = place( x, [ 0, 1, 1, 0 ], [ 30 ] );
* // returns <Int32Array>[ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
declare function place<T extends TypedArray | BooleanTypedArray, U = unknown>( x: T, mask: MaskArray, values: ValuesArray<U>, options?: Options ): T;

/**
* Replaces elements of an array with provided values according to a provided mask array.
*
* @param x - input array
* @param mask - mask array
* @param values - values to set
* @param options - function options
* @returns input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var mask = [ 0, 1, 1, 0 ];
* var values = new Complex128Array( [ 20.0, 30.0, 40, 5.0 ] );
*
* var out = place( x, mask, values );
* // returns <Complex128Array>
*
* var bool = ( out === x );
* // returns true
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var mask = [ 0, 1, 1, 0 ];
* var values = new Complex128Array( [ 20.0, 30.0 ] );
*
* var out = place( x, mask, values );
* // returns <Complex128Array>
*
* var bool = ( out === x );
* // returns true
*/
declare function place<T extends ComplexTypedArray>( x: T, mask: MaskArray, values: ValuesArray<ComplexLike | [ number, number ]>, options?: Options ): T;

/**
* Replaces elements of an array with provided values according to a provided mask array.
*
* @param x - input array
* @param mask - mask array
* @param values - values to set
* @param options - function options
* @returns input array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var mask = [ 0, 1, 1, 0 ];
* var values = [ 20, 30 ];
*
* var out = place( x, mask, values );
* // returns [ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = place( x, [ 0, 1, 1, 0 ], [ 30 ] );
* // returns [ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
declare function place<T = unknown, U = unknown>( x: Array<T>, mask: MaskArray, values: ValuesArray<U>, options?: Options ): Array<T | U>;

/**
* Replaces elements of an array with provided values according to a provided mask array.
*
* @param x - input array
* @param mask - mask array
* @param values - values to set
* @param options - function options
* @returns input array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
*
* var mask = [ 0, 1, 1, 0 ];
* var values = [ 20, 30 ];
*
* var out = place( x, mask, values );
*
* var bool = ( out === x );
* // returns true
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
*
* var out = place( x, [ 0, 1, 1, 0 ], [ 30 ] );
*
* var bool = ( out === x );
* // returns true
*/
declare function place<T = unknown, U = unknown>( x: AccessorArrayLike<T>, mask: MaskArray, values: ValuesArray<U>, options?: Options ): AccessorArrayLike<T | U>;

/**
* Replaces elements of an array with provided values according to a provided mask array.
*
* @param x - input array
* @param mask - mask array
* @param values - values to set
* @param options - function options
* @returns input array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var mask = [ 0, 1, 1, 0 ];
* var values = [ 20, 30 ];
*
* var out = place( x, mask, values );
* // returns [ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = place( x, [ 0, 1, 1, 0 ], [ 30 ] );
* // returns [ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
declare function place<T = unknown, U = unknown>( x: Collection<T>, mask: MaskArray, values: ValuesArray<U>, options?: Options ): Collection<T | U>;


// EXPORTS //

export = place;
