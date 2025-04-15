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
* Tests if a finite single-precision floating-point number is an odd number.
*
* ## Notes
*
* -   The function assumes a finite number. If provided positive or negative infinity, the function will return `true`, when, in fact, the result is undefined.
*
* @param x - value to test
* @returns boolean indicating whether the value is an odd number
*
* @example
* var bool = isOddf( 5.0 );
* // returns true
*
* @example
* var bool = isOddf( -2.0 );
* // returns false
*
* @example
* var bool = isOddf( 0.0 );
* // returns false
*
* @example
* var bool = isOddf( NaN );
* // returns false
*/
declare function isOddf( x: number ): boolean;


// EXPORTS //

export = isOddf;
