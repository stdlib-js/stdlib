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
* Returns the minimum absolute value.
*
* ## Notes
*
* -   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum, and thus, if not provided any arguments, the function returns positive infinity.
*
* @param x - first number
* @param y - second number
* @param args - numbers
* @returns minimum absolute value
*
* @example
* var v = minabs( -3.14, 4.2 );
* // returns 3.14
*
* @example
* var v = minabs( 5.9, 3.14, 4.2 );
* // returns 3.14
*
* @example
* var v = minabs( 3.14, NaN );
* // returns NaN
*
* @example
* var v = minabs( +0.0, -0.0 );
* // returns +0.0
*/
declare function minabs( x?: number, y?: number, ...args: Array<number> ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = minabs;
