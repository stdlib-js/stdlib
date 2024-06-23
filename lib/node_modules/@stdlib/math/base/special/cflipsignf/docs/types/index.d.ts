/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import { Complex64 } from '@stdlib/types/complex';

/**
* Returns a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.
*
* @param z - input value
* @param y - number from which to derive the sign
* @returns result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var v = cflipsignf( new Complex64( -4.0, 5.0 ), -55.0 );
* // returns <Complex64>
*
* var re = real( v );
* // returns 4.0
*
* var im = imag( v );
* // returns -5.0
*/
declare function cflipsignf( z: Complex64, y: number ): Complex64;


// EXPORTS //

export = cflipsignf;
