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

import { Collection, TypedArray, ComplexTypedArray, BooleanTypedArray } from '@stdlib/types/array';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Fills all elements within a portion of an array with a specified value.
*
* @param x - input array
* @param value - fill value
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns modified input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = fill( x, 4.0, 0, 3 );
* // returns <Float64Array>[ 4.0, 4.0, 4.0 ]
*/
declare function fill<T extends TypedArray>( x: T, value: number, start: number, end: number ): T;

/**
* Fills all elements within a portion of an array with a specified value.
*
* @param x - input array
* @param value - fill value
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns modified input array
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new BooleanArray( [ false, false, false ] );
*
* var out = fill( x, true, 0, 3 );
* // returns <BooleanArray>[ true, true, true ]
*/
declare function fill<T extends BooleanTypedArray>( x: T, value: boolean, start: number, end: number ): T; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Fills all elements within a portion of an array with a specified value.
*
* @param x - input array
* @param value - fill value
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns modified input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = fill( x, new Complex128( 7.0, 8.0 ), 0, 3 );
* // returns <Complex128Array>[ 7.0, 8.0, 7.0, 8.0, 7.0, 8.0 ]
*/
declare function fill<T extends ComplexTypedArray>( x: T, value: ComplexLike, start: number, end: number ): T; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Fills all elements within a portion of an array with a specified value.
*
* @param x - input array
* @param value - fill value
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns modified input array
*
* @example
* var x = [ 1, 2, 3 ];
*
* var out = fill( x, 4, 0, 3 );
* // returns [ 4, 4, 4 ]
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var out = fill( x, 8, 0, 3 );
* // returns [ 8, 8, 8, 4, 5, 6 ]
*/
declare function fill<T = unknown, U = unknown>( x: Array<T>, value: U, start: number, end: number ): Array<T | U>;

/**
* Fills all elements within a portion of an array with a specified value.
*
* @param x - input array
* @param value - fill value
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns modified input array
*
* @example
* var x = [ 1, 2, 3 ];
*
* var out = fill( x, 4, 0, 3 );
* // returns [ 4, 4, 4 ]
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var out = fill( x, 8, 0, 3 );
* // returns [ 8, 8, 8, 4, 5, 6 ]
*/
declare function fill<T = unknown, U = unknown>( x: Collection<T>, value: U, start: number, end: number ): Collection<T | U>;


// EXPORTS //

export = fill;
