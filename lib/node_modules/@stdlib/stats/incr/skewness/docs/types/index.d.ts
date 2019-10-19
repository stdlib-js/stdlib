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

/**
* If provided a value, the accumulator function returns an updated corrected sample skewness. If not provided a value, the accumulator function returns the current corrected sample skewness.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @returns corrected sample skewness or null
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a corrected sample skewness.
*
* ## Notes
*
* -   If provided a value, the accumulator function returns an updated corrected sample skewness. If not provided a value, the accumulator function returns the current corrected sample skewness.
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @returns accumulator function
*
* @example
* var accumulator = incrskewness();
*
* var skewness = accumulator();
* // returns null
*
* skewness = accumulator( 2.0 );
* // returns null
*
* skewness = accumulator( -5.0 );
* // returns null
*
* skewness = accumulator( -10.0 );
* // returns ~0.492
*
* skewness = accumulator();
* // returns ~0.492
*/
declare function incrskewness(): accumulator;


// EXPORTS //

export = incrskewness;
