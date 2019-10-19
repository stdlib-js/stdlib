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

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* If provided a value, the accumulator function returns updated results. If not provided a value, the accumulator function returns the current results.
*
* ## Notes
*
* -   If provided `NaN`, the arithmetic mean and unbiased sample variance values are equal to `NaN` for all future invocations.
*
* @param x - input value
* @returns output array or null
*/
type accumulator = ( x?: number ) => ArrayLike<number> | null;

/**
* Returns an accumulator function which incrementally computes an arithmetic mean and unbiased sample variance.
*
* @param out - output array
* @returns accumulator function
*
* @example
* var accumulator = incrmeanvar();
*
* var mv = accumulator();
* // returns null
*
* mv = accumulator( 2.0 );
* // returns [ 2.0, 0.0 ]
*
* mv = accumulator( -5.0 );
* // returns [ -1.5, 24.5 ]
*
* mv = accumulator( 3.0 );
* // returns [ 0.0, 19.0 ]
*
* mv = accumulator( 5.0 );
* // returns [ 1.25, ~18.92 ]
*
* mv = accumulator();
* // returns [ 1.25, ~18.92 ]
*/
declare function incrmeanvar( out?: ArrayLike<number> ): accumulator;


// EXPORTS //

export = incrmeanvar;
