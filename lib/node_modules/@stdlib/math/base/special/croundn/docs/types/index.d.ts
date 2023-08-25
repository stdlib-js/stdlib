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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex128 } from '@stdlib/types/complex';

/**
* Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n`.
*
* ## Notes
*
* - When operating on floating-point numbers in bases other than `2`, rounding to specified digits can be inexact.
*
* @param z - input value
* @param n - integer power of 10
* @returns result
*
* @example
* var Complex128 = require( `@stdlib/complex/float64` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* var v = cceil( new Complex128( 5.555, -3.333 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns 5.56
*
* var im = imag( v );
* // returns -3.34
*/
declare function croundn( z: Complex128, n: number ): Complex128;


// EXPORTS //

export = croundn;
