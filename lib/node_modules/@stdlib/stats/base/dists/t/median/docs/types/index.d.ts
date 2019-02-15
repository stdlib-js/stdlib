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
* Returns the median of a Student's t distribution.
*
* ## Notes
*
* -   If provided `v < 0`, the function returns `NaN`.
*
* @param v - degrees of freedom
* @returns median
*
* @example
* var v = median( 9.0 );
* // returns 0.0
*
* @example
* var v = median( 2.0 );
* // returns 0.0
*
* @example
* var v = median( -0.2 );
* // returns NaN
*
* @example
* var v = median( NaN );
* // returns NaN
*/
declare function median( v: number ): number;


// EXPORTS //

export = median;
