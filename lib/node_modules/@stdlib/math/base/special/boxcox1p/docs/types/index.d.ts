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
* Computes a one-parameter Box-Cox transformation of `1+x`.
*
* @param x - input value
* @param lambda - power parameter
* @returns Box-Cox transformation of `1+x`
*
* @example
* var v = boxcox1p( 1.0, 2.5 );
* // returns ~1.8627
*
* @example
* var v = boxcox1p( 4.0, 2.5 );
* // returns ~21.9607
*
* @example
* var v = boxcox1p( 10.0, 2.5 );
* // returns ~160.1246
*
* @example
* var v = boxcox1p( 2.0, 0.0 );
* // returns ~1.0986
*
* @example
* var v = boxcox1p( -1.0, 2.5 );
* // returns -0.4
*
* @example
* var v = boxcox1p( 0.0, -1.0 );
* // returns 0.0
*
* @example
* var v = boxcox1p( -1.0, -1.0 );
* // returns -Infinity
*/
declare function boxcox1p( x: number, lambda: number ): number;


// EXPORTS //

export = boxcox1p;
