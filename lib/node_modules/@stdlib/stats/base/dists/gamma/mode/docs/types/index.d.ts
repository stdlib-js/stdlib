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
* Returns the mode of a gamma distribution.
*
* ## Notes
*
* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
*
* @param alpha - shape parameter
* @param beta - rate parameter
* @returns mode
*
* @example
* var v = mode( 1.0, 1.0 );
* // returns 0.0
*
* @example
* var v = mode( 4.0, 12.0 );
* // returns 0.25
*
* @example
* var v = mode( 8.0, 2.0 );
* // returns 3.5
*
* @example
* var v = mode( 0.5, 2.0 );
* // returns NaN
*
* @example
* var v = mode( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = mode( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = mode( 2.0, NaN );
* // returns NaN
*
* @example
* var v = mode( NaN, 2.0 );
* // returns NaN
*/
declare function mode( alpha: number, beta: number ): number;


// EXPORTS //

export = mode;
