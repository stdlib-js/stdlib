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
* Computes the inverse of a complex number.
*
* @param out - output array
* @param re - real component
* @param im - imaginary component
* @returns real and imaginary components
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var out = new Float32Array( 2 );
*
* var v = cinv( out, 2.0, 4.0 );
* // returns <Float32Array>[ 0.1, -0.2 ]
*
* var bool = ( v === out );
* // returns true
*/
declare function cinv( out: ArrayLike<number>, re: number, im: number ): ArrayLike<number>; // tslint-disable-line max-line-length

/**
* Computes the inverse of a complex number.
*
* @param re - real component
* @param im - imaginary component
* @returns real and imaginary components
*
* @example
* var v = cinv( 2.0, 4.0 );
* // returns [ 0.1, -0.2 ]
*/
declare function cinv( re: number, im: number ): ArrayLike<number>;


// EXPORTS //

export = cinv;
