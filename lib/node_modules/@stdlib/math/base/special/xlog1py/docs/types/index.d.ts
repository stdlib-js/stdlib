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
* Computes `x * ln(y+1)` so that the result is `0` if `x = 0`.
*
* @param x - input value
* @param y - input value
* @returns function value
*
* @example
* var out = xlog1py( 3.0, 2.0 );
* // returns ~3.296
*
* @example
* var out = xlog1py( 1.5, 5.9 );
* // returns ~2.897
*
* @example
* var out = xlog1py( 0.9, 1.0 );
* // returns ~0.624
*
* @example
* var out = xlog1py( 1.0, 0.0 );
* // returns 0.0
*
* @example
* var out = xlog1py( 0.0, -2.0 );
* // returns 0.0
*
* @example
* var out = xlog1py( 1.5, NaN );
* // returns NaN
*
* @example
* var out = xlog1py( 0.0, NaN );
* // returns NaN
*
* @example
* var out = xlog1py( NaN, 2.3 );
* // returns NaN
*/
declare function xlog1py( x: number, y: number ): number;


// EXPORTS //

export = xlog1py;
