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
* If provided a value, the accumulator function returns an updated moving arithmetic mean and corrected sample standard deviation. If not provided a value, the accumulator function returns the current moving arithmetic mean and corrected sample standard deviation.
*
* ## Notes
*
* -   If provided `NaN`, the moving arithmetic mean and corrected sample standard deviation are equal to `NaN` for all future invocations.
*
* @param x - input value
* @returns output array or null
*/
type accumulator = ( x?: number ) => ArrayLike<number> | null;

/**
* Returns an accumulator function which incrementally computes a moving arithmetic mean and corrected sample standard deviation.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving arithmetic mean and corrected sample standard deviation.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned moving arithmetic mean and corrected sample standard deviation are calculated from smaller sample sizes. Until the window is full, each returned moving arithmetic mean and corrected sample standard deviation is calculated from all provided values.
*
* @param out - output array
* @param window - window size
* @throws window size must be a positive integer
* @returns accumulator function
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var accumulator = incrmmeanstdev( new Float64Array( 2 ), 3 );
*
* var mm = accumulator();
* // returns null
*/
declare function incrmmeanstdev( out: ArrayLike<number>, window: number ): accumulator;

/**
* Returns an accumulator function which incrementally computes a moving arithmetic mean and corrected sample standard deviation.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving arithmetic mean and corrected sample standard deviation.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned moving arithmetic mean and corrected sample standard deviation are calculated from smaller sample sizes. Until the window is full, each returned moving arithmetic mean and corrected sample standard deviation is calculated from all provided values.
*
* @param window - window size
* @throws window size must be a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmmeanstdev( 3 );
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns [ 2.0, 0.0 ]
*
* v = accumulator( -5.0 );
* // returns [ -1.5, ~4.95 ]
*
* v = accumulator( 3.0 );
* // returns [ 0.0, ~4.36 ]
*
* v = accumulator( 5.0 );
* // returns [ 1.0, ~5.29 ]
*
* v = accumulator();
* // returns [ 1.0, ~5.29 ]
*/
declare function incrmmeanstdev( window: number ): accumulator;


// EXPORTS //

export = incrmmeanstdev;
