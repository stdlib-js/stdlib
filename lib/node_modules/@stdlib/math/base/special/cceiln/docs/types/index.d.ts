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
* Rounds a complex number to the nearest multiple of `10^n` toward positive infinity.
*
* @param out - output array
* @param re - real component
* @param im - imaginary component
* @param n - integer power of 10
* @returns real and imaginary components
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var out = new Float32Array( 2 );
*
* var v = cceiln( out, 5.555, -3.333, -2 );
* // returns <Float32Array>[ 5.56, -3.33 ]
*
* var bool = ( v === out );
* // returns true
*/
declare function cceiln( out: ArrayLike<number>, re: number, im: number, n: number ): ArrayLike<number>; // tslint-disable-line max-line-length

/**
* Rounds a complex number to the nearest multiple of `10^n` toward positive infinity.
*
* @param re - real component
* @param im - imaginary component
* @param n - integer power of 10
* @returns real and imaginary components
*
* @example
* var out = cceiln( 5.555, -3.333, -2 );
* // returns [ 5.56, -3.33 ]
*/
declare function cceiln( re: number, im: number, n: number ): ArrayLike<number>;


// EXPORTS //

export = cceiln;
