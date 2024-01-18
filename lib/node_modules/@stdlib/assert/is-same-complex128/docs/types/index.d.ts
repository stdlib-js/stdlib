/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/**
* Tests if two arguments are both double-precision complex floating-point numbers and have the same value.
*
* ## Notes
*
* -   The function differs from the `===` operator in that the function treats `-0` and `+0` as distinct and `NaNs` as the same.
*
* @param v1 - first input value
* @param v2 - second input value
* @returns boolean indicating whether two arguments are the same
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
*
* var x = new Complex128( 1.0, 2.0 );
* var y = new Complex128( 1.0, 2.0 );
*
* var out = isSameComplex128( x, y );
* // returns true
*
* @example
* var Complex128 = require( '@stdlib/complex/float64' );
*
* var x = new Complex128( 1.0, 2.0 );
* var y = new Complex128( -1.0, -2.0 );
*
* var out = isSameComplex128( x, y );
* // returns false
*/
declare function isSameComplex128( v1: any, v2: any ): boolean;


// EXPORTS //

export = isSameComplex128;
