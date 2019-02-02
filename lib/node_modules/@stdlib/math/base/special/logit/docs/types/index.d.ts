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
* Evaluates the logit function.
*
* ## Notes
*
* -   Let `p` be the probability of some event. The logit function is defined as the logarithm of the odds `p / (1-p)`.
* -   If `p < 0` or `p > 1`, the function returns `NaN`.
*
* @param p - input value
* @returns function value
*
* @example
* var y = logit( 0.2 );
* // returns ~-1.386
*
* @example
* var y = logit( 0.9 );
* // returns ~2.197
*
* @example
* var y = logit( -4.0 );
* // returns NaN
*
* @example
* var y = logit( 1.5 );
* // returns NaN
*
* @example
* var y = logit( NaN );
* // returns NaN
*/
declare function logit( p: number ): number;


// EXPORTS //

export = logit;
