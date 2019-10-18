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
* Evaluates the Heaviside function.
*
* ## Notes
*
* -   The `continuity` parameter may be one of the following:
*
*     -   'half-maximum': if `x == 0`, the function returns `0.5`.
*     -   'left-continuous': if `x == 0`, the function returns `0`.
*     -   'right-continuous': if `x == 0`, the function returns `1`.
*
* -   By default, if `x == 0`, the function returns `NaN` (i.e., the function is discontinuous).
*
* @param x - input value
* @param continuity - continuity option
* @returns function value
*
* @example
* var v = heaviside( 3.14 );
* // returns 1.0
*
* @example
* var v = heaviside( -3.14 );
* // returns 0.0
*
* @example
* var v = heaviside( 0.0 );
* // returns NaN
*
* @example
* var v = heaviside( 0.0, 'half-maximum' );
* // returns 0.5
*
* @example
* var v = heaviside( 0.0, 'left-continuous' );
* // returns 0.0
*
* @example
* var v = heaviside( 0.0, 'right-continuous' );
* // returns 1.0
*
* @example
* var v = heaviside( NaN );
* // returns NaN
*/
declare function heaviside( x: number, continuity?: 'half-maximum' | 'left-continuous' | 'right-continuous' ): number; // tslint-disable-line max-lines-length


// EXPORTS //

export = heaviside;
