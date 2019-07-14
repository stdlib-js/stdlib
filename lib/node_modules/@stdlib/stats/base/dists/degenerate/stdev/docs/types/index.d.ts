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
* Returns the standard deviation of a degenerate distribution.
*
* @param mu - constant value of distribution
* @returns standard deviation
*
* @example
* var v = stdev( 0.1 );
* // returns 0.0
*
* @example
* var v = stdev( 0.5 );
* // returns 0.0
*
* @example
* var v = stdev( 10.0 );
* // returns 0.0
*
* @example
* var v = stdev( NaN );
* // returns NaN
*/
declare function stdev( mu: number ): number;


// EXPORTS //

export = stdev;
