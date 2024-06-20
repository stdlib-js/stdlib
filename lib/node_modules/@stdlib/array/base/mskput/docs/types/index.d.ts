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
* Mode specifying behavior when the number of values to set is less than the number of falsy values in the mask array.
*
* ## Notes
*
* -   The function supports the following modes:
*
*     -   `'throw'`: specifies that the function must raise an exception when the function is provided insufficient `values` to satisfy the `mask` array.
*     -   `'broadcast'`: specifies that the function must broadcast a single-element `values` array and otherwise raise an exception when the function is provided insufficient `values` to satisfy the `mask` array.
*     -   `'repeat'`: specifies that the function must reuse provided `values` when replacing elements in `x` in order to satisfy the `mask` array.
*/
type Mode = 'throw' | 'broadcast' | 'repeat';

/**
* Replaces elements of an array with provided values according to a provided mask array.
*
* @param x - input array
* @param mask - mask array
* @param values - values to set
* @param mode - string specifying behavior when the number of values is less than the number of falsy values in the mask array
* @returns input array
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var mask = [ 1, 0, 0, 1 ];
* var values = [ 20, 30 ];
*
* var out = mskput( x, mask, values, 'throw' );
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
* var out = mskput( x, [ 1, 0, 0, 1 ], [ 30 ], 'broadcast' );
* // returns <Int32Array>[ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
declare function mskput<T extends TypedArray | BooleanTypedArray, U = unknown>( x: T, mask: MaskArray, values: ValuesArray<U>, mode: Mode ): T;

/**
* Replaces elements of an array with provided values according to a provided mask array.
*
* @param x - input array
* @param mask - mask array
* @param values - values to set
* @param mode - string specifying behavior when the number of values is less than the number of falsy values in the mask array
* @returns input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var mask = [ 1, 0, 0, 1 ];
* var values = new Complex128Array( [ 20.0, 30.0, 40, 5.0 ] );
*
* var out = mskput( x, mask, values, 'throw' );
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
* var mask = [ 1, 0, 0, 1 ];
* var values = new Complex128Array( [ 20.0, 30.0 ] );
*
* var out = mskput( x, mask, values, 'broadcast' );
* // returns <Complex128Array>
*
* var bool = ( out === x );
* // returns true
*/
declare function mskput<T extends ComplexTypedArray>( x: T, mask: MaskArray, values: ValuesArray<ComplexLike | [ number, number ]>, mode: Mode ): T;

/**
* Replaces elements of an array with provided values according to a provided mask array.
*
* @param x - input array
* @param mask - mask array
* @param values - values to set
* @param mode - string specifying behavior when the number of values is less than the number of falsy values in the mask array
* @returns input array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var mask = [ 1, 0, 0, 1 ];
* var values = [ 20, 30 ];
*
* var out = mskput( x, mask, values, 'throw' );
* // returns [ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = mskput( x, [ 1, 0, 0, 1 ], [ 30 ], 'broadcast' );
* // returns [ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
declare function mskput<T = unknown, U = unknown>( x: Array<T>, mask: MaskArray, values: ValuesArray<U>, mode: Mode ): Array<T | U>;

/**
* Replaces elements of an array with provided values according to a provided mask array.
*
* @param x - input array
* @param mask - mask array
* @param values - values to set
* @param mode - string specifying behavior when the number of values is less than the number of falsy values in the mask array
* @returns input array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
*
* var mask = [ 1, 0, 0, 1 ];
* var values = [ 20, 30 ];
*
* var out = mskput( x, mask, values, 'throw' );
*
* var bool = ( out === x );
* // returns true
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
*
* var out = mskput( x, [ 1, 0, 0, 1 ], [ 30 ], 'broadcast' );
*
* var bool = ( out === x );
* // returns true
*/
declare function mskput<T = unknown, U = unknown>( x: AccessorArrayLike<T>, mask: MaskArray, values: ValuesArray<U>, mode: Mode ): AccessorArrayLike<T | U>;

/**
* Replaces elements of an array with provided values according to a provided mask array.
*
* @param x - input array
* @param mask - mask array
* @param values - values to set
* @param mode - string specifying behavior when the number of values is less than the number of falsy values in the mask array
* @returns input array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var mask = [ 1, 0, 0, 1 ];
* var values = [ 20, 30 ];
*
* var out = mskput( x, mask, values, 'throw' );
* // returns [ 1, 20, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = mskput( x, [ 1, 0, 0, 1 ], [ 30 ], 'throw' );
* // returns [ 1, 30, 30, 4 ]
*
* var bool = ( out === x );
* // returns true
*/
declare function mskput<T = unknown, U = unknown>( x: Collection<T>, mask: MaskArray, values: ValuesArray<U>, mode: Mode ): Collection<T | U>;


// EXPORTS //

export = mskput;
