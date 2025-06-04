/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Computes `x - nπ/2 = r` (single-precision).
*
* ## Notes
*
* -   The function returns `n` and stores the remainder `r` as `y[0]`.
* -   For input values larger than `2^28 * π/2` in magnitude, the function only returns the last three binary digits of `n` and not the full result.
*
* @param x - input value
* @param y - remainder element
* @returns factor of `π/2`
*
* @example
* var y = [ 0.0 ];
* var n = rempio2f( 128.0, y );
* // returns 81
*
* var y1 = y[ 0 ];
* // returns ~0.765
*
* @example
* var y = [ 0.0 ];
* var n = rempio2f( NaN, y );
* // returns 0
*
* var y1 = y[ 0 ];
* // returns NaN
*/
declare function rempio2f( x: number, y: Collection<number> ): number;


// EXPORTS //

export = rempio2f;
