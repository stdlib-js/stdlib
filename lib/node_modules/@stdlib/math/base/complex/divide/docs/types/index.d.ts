/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Divides two complex numbers.
*
* @param out - output array
* @param re1 - real component
* @param im1 - imaginary component
* @param re2 - real component
* @param im2 - imaginary component
* @returns real and imaginary components
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var out = new Float64Array( 2 );
* var v = cdiv( out, -13.0, -1.0, -2.0, 1.0 );
* // returns <Float64Array>[ 5.0, 3.0 ]
*/
declare function cdiv( out: ArrayLike<number>, re1: number, im1: number, re2: number, im2: number ): ArrayLike<number>; // tslint-disable-line max-line-length

/**
* Divides two complex numbers.
*
* @param re1 - real component
* @param im1 - imaginary component
* @param re2 - real component
* @param im2 - imaginary component
* @returns real and imaginary components
*
* @example
var v = cdiv( -13.0, -1.0, -2.0, 1.0 );
// returns [ 5.0, 3.0 ]
*/
declare function cdiv( re1: number, im1: number, re2: number, im2: number ): ArrayLike<number>; // tslint-disable-line max-line-length


// EXPORTS //

export = cdiv;
