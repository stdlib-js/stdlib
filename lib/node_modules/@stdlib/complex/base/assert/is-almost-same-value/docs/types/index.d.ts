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

import { ComplexLike } from '@stdlib/types/complex';

/**
* Tests whether two complex numbers are approximately the same value within a specified number of ULPs (units in the last place).
*
* ## Notes
*
* -   The function differs from the `===` operator in that the function treats `-0` and `+0` as distinct and `NaNs` as the same.
*
* @param z1 - first complex number
* @param z2 - second complex number
* @param maxULP - maximum allowed ULP difference
* @returns boolean indicating whether two complex numbers are approximately the same value within a specified number of ULPs
*
* @example
* var EPS = require( '@stdlib/constants/float64/eps' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var z1 = new Complex128( 1.0, 3.0 );
* var z2 = new Complex128( 1.0+EPS, 3.0 );
*
* var bool = isAlmostSameValue( z1, z2, 0 );
* // returns false
*
* bool = isAlmostSameValue( z1, z2, 1 );
* // returns true
*/
declare function isAlmostSameValue( z1: ComplexLike, z2: ComplexLike, maxULP: number ): boolean;


// EXPORTS //

export = isAlmostSameValue;
