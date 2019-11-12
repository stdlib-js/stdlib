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
* Evaluates the signum function of a complex number.
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
* var v = csignum( out, -4.2, 5.5 );
* // returns <Float32Array>[ -0.6069136033622302, 0.79476781392673 ]
*
* var bool = ( v === out );
* // returns true
*/
declare function csignum( out: ArrayLike<number>, re: number, im: number ): ArrayLike<number>; // tslint-disable-line max-line-length

/**
* Evaluates the signum function of a complex number.
*
* @param re - real component
* @param im - imaginary component
* @returns real and imaginary components
*
* @example
* var v = csignum( -4.2, 5.5 );
* // returns [ -0.6069136033622302, 0.79476781392673 ]
*
* @example
* var v = csignum( 0.0, 0.0 );
* // returns [ 0.0, 0.0 ]
*
* @example
* var v = csignum( NaN, NaN );
* // returns [ NaN, NaN ]
*/
declare function csignum( re: number, im: number ): ArrayLike<number>;


// EXPORTS //

export = csignum;
