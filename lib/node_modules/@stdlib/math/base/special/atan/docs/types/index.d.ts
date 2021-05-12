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

/**
* Computes the arctangent of a number.
*
* @param x - input value
* @returns arctangent (in radians)
*
* @example
* var v = atan( 0.0 );
* // returns ~0.0
*
* @example
* var PI = require( `@stdlib/constants/float64/pi` );
*
* var v = atan( -PI/4.0 );
* // returns ~-0.666
*
* @example
* var PI = require( `@stdlib/constants/float64/pi` );
*
* var v = atan( PI/4.0 );
* // returns ~0.666
*
* @example
* var v = atan( NaN );
* // returns NaN
*/
declare function atan( x: number ): number;


// EXPORTS //

export = atan;
