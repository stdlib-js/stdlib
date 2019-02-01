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
* Evaluates the base 10 exponential function.
*
* @param x - input value
* @returns function value
*
* @example
* var v = exp10( 3.0 );
* // returns 1000.0
*
* @example
* var v = exp10( -9.0 );
* // returns 1.0e-9
*
* @example
* var v = exp10( 0.0 );
* // returns 1.0
*
* @example
* var v = exp10( NaN );
* // returns NaN
*/
declare function exp10( x: number ): number;


// EXPORTS //

export = exp10;
