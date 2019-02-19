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
* Returns the mode of a Cauchy distribution.
*
* ## Notes
*
* -   If provided `gamma <= 0`, the function returns `NaN`.
*
* @param x0 - location parameter
* @param gamma - scale parameter
* @returns mode
*
* @example
* var v = mode( 10.0, 5.0 );
* // returns 10.0
*
* @example
* var v = mode( 7.0, 0.1 );
* // returns 7.0
*
* @example
* var v = mode( 10.0, -0.5 );
* // returns NaN
*/
declare function mode( x0: number, gamma: number ): number;


// EXPORTS //

export = mode;
