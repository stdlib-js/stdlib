/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Computes the cosecant of a single-precision floating-point number (in degrees).
*
* @param x - input value (in degrees)
* @returns cosecant
*
* @example
* var v = cscdf( 30.0 );
* // returns ~2.0
*
* @example
* var v = cscdf( 45.0 );
* // returns ~1.41
*
* @example
* var v = cscdf( 60.0 );
* // returns ~1.15
*
* @example
* var v = cscdf( 90.0 );
* // returns 1.0
*
* @example
* var v = cscdf( 0.0 );
* // returns Infinity
*
* @example
* var v = cscdf( NaN );
* // returns NaN
*/
declare function cscdf( x: number ): number;


// EXPORTS //

export = cscdf;
