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

/**
* Returns a boolean indicating if the sign bit is on (true) or off (false).
*
* @param x - single-precision floating-point number
* @returns boolean indicating if sign bit is on or off
*
* @example
* var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
*
* var bool = signbitf( toFloat32( 4.0 ) );
* // returns false
*
* @example
* var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
*
* var bool = signbitf( toFloat32( -9.14e-34 ) );
* // returns true
*
* @example
* var bool = signbitf( 0.0 );
* // returns false
*
* @example
* var bool = signbitf( -0.0 );
* // returns true
*/
declare function signbitf( x: number ): boolean;


// EXPORTS //

export = signbitf;
