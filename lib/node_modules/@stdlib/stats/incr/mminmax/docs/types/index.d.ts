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
* Returns an accumulator function which incrementally computes moving minimum and maximum values.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving minimum and maximum.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned minimum and maximum values are calculated from smaller sample sizes. Until the window is full, each returned minimum and maximum is calculated from all provided values.
*
* @param out - output array
* @param window - window size
* @throws window size must be a positive integer
* @returns accumulator function
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var accumulator = incrmminmax( new Float64Array( 2 ), 3 );
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
declare function incrmminmax( out: ArrayLike<number>, window: number ): accumulator; // tslint-disable-line max-line-length

/**
* Returns an accumulator function which incrementally computes moving minimum and maximum values.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving minimum and maximum.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned minimum and maximum values are calculated from smaller sample sizes. Until the window is full, each returned minimum and maximum is calculated from all provided values.
*
* @param window - window size
* @throws window size must be a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmminmax( 3 );
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
declare function incrmminmax( window: number ): accumulator;


// EXPORTS //

export = incrmminmax;
