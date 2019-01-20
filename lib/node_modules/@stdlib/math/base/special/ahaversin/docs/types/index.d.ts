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
* Computes the inverse half-value versed sine.
*
* @param x - input value
* @returns inverse half-value versed sine
*
* @example
* var v = ahaversin( 0.0 );
* // returns 0.0
*
* @example
* var v = ahaversin( 1.0 );
* // returns ~3.1416
*
* @example
* var v = ahaversin( 0.5 );
* // returns ~1.5708
*
* @example
* var v = ahaversin( NaN );
* // returns NaN
*/
declare function ahaversin( x: number ): number;


// EXPORTS //

export = ahaversin;
