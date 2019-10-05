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
* Rounds a numeric value to the nearest number toward positive infinity with \\(n\\) significant figures.
*
* @param x - input value
* @param n - number of significant figures
* @param b - base (default: 10)
* @returns rounded value
*
* @example
* var v = ceilsd( 3.141592653589793, 5 );
* // returns 3.1416
*
* @example
* var v = ceilsd( 3.141592653589793, 1 );
* // returns 4.0
*
* @example
* var v = ceilsd( 12368.0, 2 );
* // returns 13000.0
*
* @example
* var v = ceilsd( 0.0313, 2, 2 );
* // returns 0.046875
*/
declare function ceilsd( x: number, n: number, b?: number ): number;


// EXPORTS //

export = ceilsd;
