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
* Computes the inverse of a one-parameter Box-Cox transformation.
*
* @param y - input value
* @param lambda - power parameter
* @returns inverse of the Box-Cox transformation
*
* @example
* var v = boxcoxinv( 1.0, 2.5 );
* // returns ~1.6505
*
* @example
* var v = boxcoxinv( 4.0, 2.5 );
* // returns ~2.6095
*
* @example
* var v = boxcoxinv( 10.0, 2.5 );
* // returns ~3.6812
*
* @example
* var v = boxcoxinv( 2.0, 0.0 );
* // returns ~7.3891
*
* @example
* var v = boxcoxinv( -1.0, 2.5 );
* // returns NaN
*
* @example
* var v = boxcoxinv( 0.0, -1.0 );
* // returns 1.0
*
* @example
* var v = boxcoxinv( 1.0, NaN );
* // returns NaN
*
* @example
* var v = boxcoxinv( NaN, 3.1 );
* // returns NaN
*/
declare function boxcoxinv( y: number, lambda: number ): number;


// EXPORTS //

export = boxcoxinv;
