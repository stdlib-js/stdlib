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
* Returns a string created by joining array elements using a specified separator.
*
* @param x - input array
* @param separator - separator element
* @returns string
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = join( x, ',' );
* // returns '1,2,3'
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = join( x, ',' );
* // returns '1 + 2i,3 + 4i,5 + 6i'
*/
declare function join<T extends TypedArray | ComplexTypedArray>( x: T, separator: string ): string;

/**
* Returns a string created by joining array elements using a specified separator.
*
* @param x - input array
* @param separator - separator element
* @returns string
*
* @example
* var x = [ 1, 2, 3 ];
*
* var out = join( x, ',' );
* // returns '1,2,3'
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var out = join( x, '-' );
* // returns '1-2-3-4-5-6'
*/
declare function join<T = unknown>( x: Collection<T>, separator: string ): string;


// EXPORTS //

export = join;
