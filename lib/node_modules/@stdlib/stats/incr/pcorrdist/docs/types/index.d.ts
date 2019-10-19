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
* If provided input values, the accumulator function returns an updated sample correlation distance. If not provided input values, the accumulator function returns the current sample correlation distance.
*
* ## Notes
*
* -   The correlation distance is defined as one minus the Pearson product-moment correlation coefficient and, thus, resides on the interval [0,2].
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @param y - value
* @returns updated sample correlation distance
*/
type accumulator = ( x?: number, y?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a sample Pearson product-moment correlation distance.
*
* @param meanx - mean value
* @param meany - mean value
* @returns accumulator function
*
* @example
* var accumulator = incrpcorrdist( 2.0, -3.0 );
*/
declare function incrpcorrdist( meanx: number, meany: number ): accumulator;

/**
* Returns an accumulator function which incrementally computes a sample Pearson product-moment correlation distance.
*
* @returns accumulator function
*
* @example
* var accumulator = incrpcorrdist();
*
* var d = accumulator();
* // returns null
*
* d = accumulator( 2.0, 1.0 );
* // returns 1.0
*
* d = accumulator( -5.0, 3.14 );
* // returns ~2.0
*
* d = accumulator();
* // returns ~2.0
*/
declare function incrpcorrdist(): accumulator;


// EXPORTS //

export = incrpcorrdist;
