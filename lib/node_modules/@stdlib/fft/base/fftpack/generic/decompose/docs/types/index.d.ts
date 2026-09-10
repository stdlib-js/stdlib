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

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Factorizes a sequence length into a product of integers.
*
* @param N - length of the sequence
* @param M - number of trial divisors
* @param initial - array of initial trial divisors
* @param si - stride length for `initial`
* @param oi - starting index for `initial`
* @param out - output array for storing factorization results
* @param so - stride length for `out`
* @param oo - starting index for `out`
* @returns number of factors into which `N` was decomposed
*
* @example
* var initial = new Float64Array( [ 3, 4, 2, 5 ] );
* var factors = new Float64Array( 4 );
*
* var numFactors = decompose( 12, 4, initial, 1, 0, factors, 1, 0 );
* // returns 2
*/
declare function decompose( N: number, M: number, initial: Collection<number>, si: number, oi: number, out: Collection<number>, so: number, oo: number ): number;


// EXPORTS //

export = decompose;
