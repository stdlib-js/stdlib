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
* Computes a one-parameter Box-Cox transformation.
*
* @param x - input value
* @param lambda - power parameter
* @returns Box-Cox transformation
*
* @example
* var v = boxcox( 1.0, 2.5 );
* // returns 0.0
*
* @example
* var v = boxcox( 4.0, 2.5 );
* // returns 12.4
*
* @example
* var v = boxcox( 10.0, 2.5 );
* // returns ~126.0911
*
* @example
* var v = boxcox( 2.0, 0.0 );
* // returns ~0.6931
*
* @example
* var v = boxcox( -1.0, 2.5 );
* // returns NaN
*
* @example
* var v = boxcox( 0.0, -1.0 );
* // returns -Infinity
*/
declare function boxcox( x: number, lambda: number ): number;


// EXPORTS //

export = boxcox;
