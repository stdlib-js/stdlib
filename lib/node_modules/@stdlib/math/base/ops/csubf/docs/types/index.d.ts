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

import { Complex64 } from '@stdlib/types/object';

/**
* Subtracts two single-precision complex floating-point numbers.
*
* @param z1 - complex number
* @param z2 - complex number
* @returns result
*
* @example
* var Complex64 = require( `@stdlib/complex/float32` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* var z1 = new Complex64( 5.0, 3.0 );
* // returns <Complex64>
*
* var z2 = new Complex64( -2.0, 1.0 );
* // returns <Complex64>
*
* var out = csubf( z1, z2 );
* // returns <Complex64>
*
* var re = real( out );
* // returns 7.0
*
* var im = imag( out );
* // returns 2.0
*/
declare function csubf( z1: Complex64, z2: Complex64 ): Complex64;


// EXPORTS //

export = csubf;
