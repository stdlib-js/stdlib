/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Computes the cube root of a single-precision floating-point number.
*
* @param x - input value
* @returns cube root
*
* @example
* var v = cbrtf( 64.0 );
* // returns 4.0
*
* @example
* var v = cbrtf( 27.0 );
* // returns 3.0
*
* @example
* var v = cbrtf( 0.0 );
* // returns 0.0
*
* @example
* var v = cbrtf( -9.0 );
* // returns ~-2.08
*
* @example
* var v = cbrtf( NaN );
* // returns NaN
*/
declare function cbrtf( x: number ): number;


// EXPORTS //

export = cbrtf;
