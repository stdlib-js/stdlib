/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Tests if two double-precision floating-point numbers are the same value.
*
* ## Notes
*
* -   The function differs from the `===` operator in that the function treats `NaNs` as the same value.
*
* @param a - first input value
* @param b - second input value
* @returns boolean indicating whether two double-precision floating-point numbers are the same value
*
* @example
* var bool = isSameValueZero( 3.14, 3.14 );
* // returns true
*
* @example
* var bool = isSameValueZero( -0.0, -0.0 );
* // returns true
*
* @example
* var bool = isSameValueZero( -0.0, 0.0 );
* // returns true
*
* @example
* var bool = isSameValueZero( NaN, NaN );
* // returns true
*/
declare function isSameValueZero( a: number, b: number ): boolean;


// EXPORTS //

export = isSameValueZero;
