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
* Returns the mode of a Bernoulli distribution.
*
* ## Notes
*
* -   If `p < 0` or `p > 1`, the function returns `NaN`.
* -   For `p = 0.5`, the mode is either `0` or `1`. This function returns `0` for `p = 0.5`.
*
* @param p - success probability
* @returns mode
*
* @example
* var v = mode( 0.1 );
* // returns 0
*
* @example
* var v = mode( 0.8 );
* // returns 1
*
* @example
* var v = mode( 0.5 );
* // returns 0
*
* @example
* var v = mode( 1.1 );
* // returns NaN
*
* @example
* var v = mode( NaN );
* // returns NaN
*/
declare function mode( p: number ): number;


// EXPORTS //

export = mode;
