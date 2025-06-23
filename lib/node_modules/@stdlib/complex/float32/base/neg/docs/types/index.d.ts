/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Negates a single-precision complex floating-point number.
*
* @param z - complex number
* @returns result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var z = new Complex64( -4.2, 5.5 );
*
* var out = cnegf( z );
* // returns <Complex64>[ ~4.2, -5.5 ]
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var z = new Complex64( 0.0, 0.0 );
*
* var out = cnegf( z );
* // returns <Complex64>[ -0.0, -0.0 ]
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var z = new Complex64( NaN, NaN );
*
* var out = cnegf( z );
* // returns <Complex64>[ NaN, NaN ]
*/
declare function cnegf( z: Complex64 ): Complex64;


// EXPORTS //

export = cnegf;
