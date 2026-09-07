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

import { ArrayLike } from '@stdlib/types/array';

/**
* If provided a value, the accumulator function returns updated minimum and maximum absolute values. If not provided a value, the accumulator function returns the current minimum and maximum absolute values.
*
* ## Notes
*
* -   If provided `NaN`, the value is ignored and does not affect the accumulated result.
*
* @param x - input value
* @returns output array or null
*/
type accumulator = ( x?: number ) => ArrayLike<number> | null;

/**
* Returns an accumulator function which incrementally computes minimum and maximum absolute values, ignoring `NaN` values.
*
* @param out - output array
* @returns accumulator function
*
* @example
* var accumulator = incrnanminmaxabs();
*
* var mm = accumulator();
* // returns null
*
* mm = accumulator( 2.0 );
* // returns [ 2.0, 2.0 ]
*
* mm = accumulator( NaN );
* // returns [ 2.0, 2.0 ]
*
* mm = accumulator( -5.0 );
* // returns [ 2.0, 5.0 ]
*
* mm = accumulator( 3.0 );
* // returns [ 2.0, 5.0 ]
*
* mm = accumulator();
* // returns [ 2.0, 5.0 ]
*/
declare function incrnanminmaxabs( out?: ArrayLike<number> ): accumulator;


// EXPORTS //

export = incrnanminmaxabs;
