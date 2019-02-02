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
* Evaluates the inverse error function.
*
* ## Notes
*
* -   If `|x| > 1`, the function returns `NaN`.
* -   As the inverse error function is an odd function (i.e., `erfinv(-x) == -erfinv(x)`), if provided `-0`, the function returns `-0`.
*
* @param x - input value
* @returns function value
*
* @example
* var y = erfinv( 0.5 );
* // returns ~0.4769
*
* @example
* var y = erfinv( 0.8 );
* // returns ~0.9062
*
* @example
* var y = erfinv( 0.0 );
* // returns 0.0
*
* @example
* var y = erfinv( -0.0 );
* // returns -0.0
*
* @example
* var y = erfinv( -1.0 );
* // returns -Infinity
*
* @example
* var y = erfinv( 1.0 );
* // returns Infinity
*
* @example
* var y = erfinv( NaN );
* // returns NaN
*/
declare function erfinv( x: number ): number;


// EXPORTS //

export = erfinv;
