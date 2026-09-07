/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* LAPACK auxiliary routine to test input for NaN by comparing two double-precision floating-point arguments for inequality.
*
* @param din1 - first input number
* @param din2 - second input number
* @returns boolean indicating whether the arguments are unequal
*
* @example
* var bool = dlaisnan( NaN, NaN );
* // returns true
*
* @example
* var bool = dlaisnan( NaN, 5.0 );
* // returns true
*
* @example
* var bool = dlaisnan( 5.0, 5.0 );
* // returns false
*/
declare function dlaisnan( din1: number, din2: number ): boolean;


// EXPORTS //

export = dlaisnan;
