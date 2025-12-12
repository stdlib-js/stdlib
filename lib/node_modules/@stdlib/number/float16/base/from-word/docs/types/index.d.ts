/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Creates a half-precision floating-point number from an unsigned integer corresponding to an IEEE 754 binary representation.
*
* @param word - unsigned integer
* @returns half-precision floating-point number
*
* @example
* var word = 15411; // => 0 01111 0000110011
*
* var f16 = fromWord( word ); // when printed, implicitly promoted to float64
* // returns 1.0498046875
*/
declare function fromWord( word: number ): number;


// EXPORTS //

export = fromWord;
