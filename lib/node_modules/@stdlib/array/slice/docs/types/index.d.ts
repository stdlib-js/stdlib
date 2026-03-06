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

import { Collection, TypedArray, ComplexTypedArray } from '@stdlib/types/array';

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = slice( x );
* // returns <Float64Array>[ 1.0, 2.0, 3.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = slice( x );
* // returns <Complex64Array>
*/
declare function slice<T extends TypedArray | ComplexTypedArray>( x: T, start?: number, end?: number ): T;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var x = [ 1, 2, 3 ];
*
* var out = slice( x );
* // returns [ 1, 2, 3 ]
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var out = slice( x, 0, 2 );
* // returns [ 1, 2 ]
*/
declare function slice<T = unknown>( x: Collection<T>, start?: number, end?: number ): Array<T>;


// EXPORTS //

export = slice;
