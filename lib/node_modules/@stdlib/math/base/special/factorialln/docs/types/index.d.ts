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
* Evaluates the natural logarithm of the factorial of `x`.
*
* @param x - input value
* @returns natural logarithm of factorial of `x`
*
* @example
* var v = factorialln( 3.0 );
* // returns ~1.792
*
* @example
* var v = factorialln( 2.4 );
* // returns ~1.092
*
* @example
* var v = factorialln( -1.0 );
* // returns NaN
*
* @example
* var v = factorialln( -1.5 );
* // returns ~1.266
*
* @example
* var v = factorialln( NaN );
* // returns NaN
*/
declare function factorialln( x: number ): number;


// EXPORTS //

export = factorialln;
