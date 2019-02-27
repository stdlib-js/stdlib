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
* Returns the skewness for a normal distribution with mean `mu` and standard deviation `sigma`.
*
* ## Notes
*
* -   If provided `sigma <= 0`, the function returns `NaN`.
*
* @param mu - mean
* @param sigma - standard deviation
* @returns skewness
*
* @example
* var y = skewness( 0.0, 1.0 );
* // returns 0.0
*
* @example
* var y = skewness( 5.0, 3.0 );
* // returns 0.0
*
* @example
* var y = skewness( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = skewness( 0.0, NaN );
* // returns NaN
*
* @example
* var y = skewness( 0.0, 0.0 );
* // returns NaN
*/
declare function skewness( mu: number, sigma: number ): number;


// EXPORTS //

export = skewness;
