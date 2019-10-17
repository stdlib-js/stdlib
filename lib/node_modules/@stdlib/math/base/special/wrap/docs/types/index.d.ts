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
* Wraps a value on the half-open interval `[min,max)`.
*
* @param v - input value
* @param min - minimum value
* @param max - maximum value
* @returns wrapped value
*
* @example
* var v = wrap( 3.14, 0.0, 5.0 );
* // returns 3.14
*
* v = wrap( -3.14, 0.0, 5.0 );
* // returns ~1.86
*
* v = wrap( 10.0, 0.0, 5.0 );
* // returns 0.0
*
* v = wrap( -0.0, 0.0, 5.0 );
* // returns 0.0
*
* v = wrap( 0.0, -0.0, 5.0 );
* // returns 0.0
*
* v = wrap( NaN, 0.0, 5.0 );
* // returns NaN
*
* v = wrap( 0.0, NaN, 5.0 );
* // returns NaN
*
* v = wrap( 3.14, 0.0, NaN );
* // returns NaN
*
* v = wrap( 3.14, 5.0, 0.0 );
* // returns NaN
*/
declare function wrap( v: number, min: number, max: number ): number;


// EXPORTS //

export = wrap;
