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
* Returns a complex number with the same magnitude as `z` and the sign of `y*z`.
*
* @param out - output array
* @param re - real component
* @param im - imaginary component
* @param y - number from which to derive the sign
* @returns function result
*
* @example
* var out = new Array( 2 );
*
* var v = cflipsign( out, -4.2, 5.5, 55 );
* // returns [ -4.2, 5.5 ]
*
* var bool = ( v === out );
* // returns true
*/
declare function cflipsign( out: ArrayLike<number>, re: number, im: number, y: number ): ArrayLike<number>; // tslint-disable-line max-line-length

/**
* Returns a complex number with the same magnitude as `z` and the sign of `y*z`.
*
* @param re - real component
* @param im - imaginary component
* @param y - number from which to derive the sign
* @returns function result
*
* @example
* var v = cflipsign( -4.2, 5.5, 66 );
* // returns [ -4.2, 5.5 ]
*
* @example
* var v = cflipsign( 0.0, 0.0, -8 );
* // returns [ -0.0, -0.0 ]
*
* @example
* var v = cflipsign( NaN, NaN, -9 );
* // returns [ NaN, NaN ]
*/
declare function cflipsign( re: number, im: number, y: number ): ArrayLike<number>; // tslint-disable-line max-line-length


// EXPORTS //

export = cflipsign;
