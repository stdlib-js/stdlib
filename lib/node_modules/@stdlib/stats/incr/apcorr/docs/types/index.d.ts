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
* If provided arguments, returns an updated sample absolute Pearson product-moment correlation coefficient; otherwise, returns the current sample absolute Pearson product-moment correlation coefficient.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
*
* @param x - value
* @param y - value
* @returns sample absolute Pearson product-moment correlation coefficient
*/
type accumulator = ( x?: number, y?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a sample absolute Pearson product-moment correlation coefficient.
*
* @param meanx - mean value
* @param meany - mean value
* @returns accumulator function
*
* @example
* var accumulator = incrapcorr( 2.0, -3.0 );
*/
declare function incrapcorr( meanx: number, meany: number ): accumulator;

/**
* Returns an accumulator function which incrementally computes a sample absolute Pearson product-moment correlation coefficient.
*
* @returns accumulator function
*
* @example
* var accumulator = incrapcorr();
*
* var ar = accumulator();
* // returns null
*
* ar = accumulator( 2.0, 1.0 );
* // returns 0.0
*
* ar = accumulator( -5.0, 3.14 );
* // returns ~1.0
*
* ar = accumulator();
* // returns ~1.0
*/
declare function incrapcorr(): accumulator;


// EXPORTS //

export = incrapcorr;
