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
* Evaluates the Riemann zeta function as a function of a real variable `s`.
*
* @param s - input value
* @returns function value
*
* @example
* var v = zeta( 1.1 );
* // returns ~10.584
*
* @example
* var v = zeta( -4.0 );
* // returns 0.0
*
* @example
* var v = zeta( 70.0 );
* // returns 1.0
*
* @example
* var v = zeta( 0.5 );
* // returns ~-1.46
*
* @example
* var v = zeta( 1.0 ); // pole
* // returns NaN
*
* @example
* var v = zeta( NaN );
* // returns NaN
*/
declare function zeta( s: number ): number;


// EXPORTS //

export = zeta;
