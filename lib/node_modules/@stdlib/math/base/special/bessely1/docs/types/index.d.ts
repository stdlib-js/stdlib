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
* Computes the Bessel function of the second kind of order one.
*
* ## Notes
*
* -   Accuracy for subnormal `x` is very poor. Full accuracy is achieved at `1.0e-308` but trends progressively to zero at `5e-324`. This suggests that underflow (or overflow, perhaps due to a reciprocal) is effectively cutting off digits of precision until the computation loses all accuracy at `5e-324`.
*
* @param x - input value
* @returns evaluated Bessel function
*
* @example
* var v = y1( 0.0 );
* // returns -Infinity
*
* v = y1( 1.0 );
* // returns ~-0.781
*
* v = y1( -1.0 );
* // returns NaN
*
* v = y1( Infinity );
* // returns 0.0
*
* v = y1( -Infinity );
* // returns NaN
*
* v = y1( NaN );
* // returns NaN
*/
declare function y1( x: number ): number;


// EXPORTS //

export = y1;
