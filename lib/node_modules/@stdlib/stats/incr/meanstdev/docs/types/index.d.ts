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
* -   If provided `NaN`, the arithmetic mean and corrected sample standard deviation values are equal to `NaN` for all future invocations.
*
* @param x - input value
* @returns output array or null
*/
type accumulator = ( x?: number ) => ArrayLike<number> | null;

/**
* Returns an accumulator function which incrementally computes an arithmetic mean and corrected sample standard deviation.
*
* @param out - output array
* @returns accumulator function
*
* @example
* var accumulator = incrmeanstdev();
*
* var ms = accumulator();
* // returns null
*
* ms = accumulator( 2.0 );
* // returns [ 2.0, 0.0 ]
*
* ms = accumulator( -5.0 );
* // returns [ -1.5, ~4.95 ]
*
* ms = accumulator( 3.0 );
* // returns [ 0.0, ~4.36 ]
*
* ms = accumulator( 5.0 );
* // returns [ 1.25, ~4.35 ]
*
* ms = accumulator();
* // returns [ 1.25, ~4.35 ]
*/
declare function incrmeanstdev( out?: ArrayLike<number> ): accumulator;


// EXPORTS //

export = incrmeanstdev;
