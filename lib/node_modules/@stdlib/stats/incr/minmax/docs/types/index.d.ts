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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* If provided a value, the accumulator function returns updated minimum and maximum values. If not provided a value, the accumulator function returns the current minimum and maximum values.
*
* ## Notes
*
* -   If provided `NaN`, the minimum and maximum values are equal to `NaN` for all future invocations.
*
* @param x - input value
* @returns output array or null
*/
type accumulator = ( x?: number ) => ArrayLike<number> | null;

/**
* Returns an accumulator function which incrementally computes minimum and maximum values.
*
* @param out - output array
* @returns accumulator function
*
* @example
* var accumulator = incrminmax();
*
* var mm = accumulator();
* // returns null
*
* mm = accumulator( 2.0 );
* // returns [ 2.0, 2.0 ]
*
* mm = accumulator( -5.0 );
* // returns [ -5.0, 2.0 ]
*
* mm = accumulator( 3.0 );
* // returns [ -5.0, 3.0 ]
*
* mm = accumulator( 5.0 );
* // returns [ -5.0, 5.0 ]
*
* mm = accumulator();
* // returns [ -5.0, 5.0 ]
*/
declare function incrminmax( out?: ArrayLike<number> ): accumulator;


// EXPORTS //

export = incrminmax;
