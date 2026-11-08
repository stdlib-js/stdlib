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
* Computes the modified Huber loss gradient with respect to a model parameter.
*
* ## Notes
*
* -   If `y` is not +1 or -1, the function returns `NaN`.
*
* @param x - input value
* @param y - true target value
* @param p - predicted value
* @returns modified Huber loss gradient
*
* @example
* var v = modifiedHuberGradient( 3.4, 1.0, 0.782 );
* // returns ~-1.482
*
* @example
* var v = modifiedHuberGradient( -5.0, 1.0, 0.202 );
* // returns 7.98
*
* @example
* var v = modifiedHuberGradient( 2.3, 1.0, -0.999 );
* // returns ~-9.195
*
* @example
* var v = modifiedHuberGradient( 4.4, -1.0, 0.234 );
* // returns ~10.859
*
* @example
* var v = modifiedHuberGradient( 1.0, -1.0, 0.2 );
* // returns 2.4
*
* @example
* var v = modifiedHuberGradient( -5.1, 1.0, -0.9 );
* // returns 19.38
*/
declare function modifiedHuberGradient( x: number, y: number, p: number ): number;


// EXPORTS //

export = modifiedHuberGradient;
