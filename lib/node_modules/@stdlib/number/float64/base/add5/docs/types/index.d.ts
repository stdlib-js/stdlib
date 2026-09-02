/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Computes the sum of five double-precision floating-point numbers.
*
* @param x - first input value
* @param y - second input value
* @param z - third input value
* @param w - fourth input value
* @param u - fifth input value
* @returns sum
*
* @example
* var v = add5( -1.0, 5.0, 2.0, -3.0, 4.0 );
* // returns 7.0
*
* @example
* var v = add5( 2.0, 5.0, 2.0, -3.0, 4.0 );
* // returns 10.0
*
* @example
* var v = add5( 0.0, 5.0, 2.0, -3.0, 4.0 );
* // returns 8.0
*
* @example
* var v = add5( -0.0, 0.0, -0.0, -0.0, -0.0 );
* // returns 0.0
*
* @example
* var v = add5( NaN, NaN, NaN, NaN, NaN );
* // returns NaN
*/
declare function add5( x: number, y: number, z: number, w: number, u: number ): number;


// EXPORTS //

export = add5;
