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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
*
* @param out - output array
* @param x - single-precision floating-point number
* @returns output array
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
* var toFloat32 = require( `@stdlib/number/float64/base/to-float32` );
*
* var out = new Float32Array( 2 );
*
* var v = normalizef( out, toFloat32( 1.401e-45 ) );
* // returns <Float32Array>[ 1.1754943508222875e-38, -23 ]
*
* var bool = ( v === out );
* // returns true
*/
declare function normalizef( out: ArrayLike<number>, x: number ): ArrayLike<number>; // tslint-disable-line max-line-length

/**
* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
*
* @param x - single-precision floating-point number
* @returns output array
*
* @example
* var toFloat32 = require( `@stdlib/number/float64/base/to-float32` );
*
* var v = normalizef( toFloat32( 1.401e-45 ) );
* // returns [ 1.1754943508222875e-38, -23 ]
*
* @example
* var v = normalizef( 0.0 );
* // returns [ 0.0, 0 ]
*
* @example
* var PINF = require( `@stdlib/constants/float32/pinf` );
*
* var v = normalizef( PINF );
* // returns [ +Infinity, 0 ]
*
* @example
* var NINF = require( `@stdlib/constants/float32/ninf` );
*
* var v = normalizef( NINF );
* // returns [ -Infinity, 0 ]
*
* @example
* var v = normalizef( NaN );
* // returns [ NaN, 0 ]
*/
declare function normalizef( x: number ): ArrayLike<number>;


// EXPORTS //

export = normalizef;
