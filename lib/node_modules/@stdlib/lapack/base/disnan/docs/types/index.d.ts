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
* Tests whether a double-precision floating-point number is NaN.
*
* @param x - input value
* @returns boolean indicating whether an input value is NaN
*
* @example
* var bool = disnan( NaN );
* // returns true
*
* @example
* var bool = disnan( 5.0 );
* // returns false
*/
declare function disnan( x: number ): boolean;


// EXPORTS //

export = disnan;
