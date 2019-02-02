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
* Evaluates the trigamma function.
*
* @param x - input value
* @returns function value
*
* @example
* var v = trigamma( -2.5 );
* // returns ~9.539
*
* @example
* var v = trigamma( 1.0 );
* // returns ~1.645
*
* @example
* var v = trigamma( 10.0 );
* // returns ~0.105
*
* @example
* var v = trigamma( NaN );
* // returns NaN
*
* @example
* var v = trigamma( -1.0 );
* // returns NaN
*/
declare function trigamma( x: number ): number;


// EXPORTS //

export = trigamma;
