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
* Computes the principal square root of a double-precision floating-point number.
*
* ## Notes
*
* -   For `x < 0`, the principal square root is not defined.
*
* @param x - input value
* @returns square root of `x`
*
* @example
* var v = sqrt( 4.0 );
* // returns 2.0
*
* @example
* var v = sqrt( 9.0 );
* // returns 3.0
*
* @example
* var v = sqrt( 0.0 );
* // returns 0.0
*
* @example
* var v = sqrt( -4.0 );
* // returns NaN
*
* @example
* var v = sqrt( NaN );
* // returns NaN
*/
declare function sqrt( x: number ): number;


// EXPORTS //

export = sqrt;
