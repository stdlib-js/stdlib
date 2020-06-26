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
* Computes the inverse cotangent of a number.
*
* @param x - input value
* @returns inverse cotangent (in radians)
*
* @example
* var v = acot( 2.0 );
* // returns ~0.4636
*
* @example
* var v = acot( 0.0 );
* // returns ~1.5708
*
* @example
* var v = acot( 0.5 );
* // returns ~1.1071
*
* @example
* var v = acot( 1.0 );
* // returns ~0.7854
*
* @example
* var v = acot( NaN );
* // returns NaN
*
* @example
* var v = acot( Infinity );
* // returns 0.0
*/
declare function acot( x: number ): number;


// EXPORTS //

export = acot;
