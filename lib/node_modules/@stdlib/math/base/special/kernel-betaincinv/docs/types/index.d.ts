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
* Calculates the inverse of the incomplete beta function.
*
* ## Notes
*
* -   Probabilities `p` and `q` must satisfy `p = 1 - q`.
*
* @param a - function parameter
* @param b - function parameter
* @param p - function parameter
* @param q - probability equal to `1 - p`
* @returns two-element array holding function value `y` and `1-y`
*
* @example
* var y = kernelBetaincinv( 3.0, 3.0, 0.2, 0.8 )
* // returns[ ~0.327, ~0.673 ]
* @example
* y = kernelBetaincinv( 3.0, 3.0, 0.4, 0.6 )
* // returns[ ~0.446, ~0.554 ]
* @example
* y = kernelBetaincinv( 1.0, 6.0, 0.4, 0.6 )
* // returns[ ~0.082, ~0.918 ]
* @example
* y = kernelBetaincinv( 1.0, 6.0, 0.8, 0.2 )
* // returns[ ~0.235, ~0.765 ]
*/
declare function kernelBetaincinv( a: number, b: number, p: number, q: number ): Array<number>; // tslint-disable-line max-line-length


// EXPORTS //

export = kernelBetaincinv;
