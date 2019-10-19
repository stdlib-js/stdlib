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
* If provided a value, returns an updated product; otherwise, returns the current product.
*
* ## Notes
*
* -   If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for all future invocations.
* -   For long running accumulations or accumulations of large numbers, care should be taken to prevent overflow. Note, however, that overflow/underflow may be transient, as the accumulator does not use a double-precision floating-point number to store an accumulated product. Instead, the accumulator splits an accumulated product into a normalized fraction and exponent and updates each component separately. Doing so guards against a loss in precision.
*
* @param x - value
* @returns product
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving product.
*
* ## Notes
*
* -   The `W` parameter defines the number of values over which to compute the moving product.
* -   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
*
* @param W - window size
* @throws must provide a positive integer
* @returns accumulator function
*
* @example
* var accumulator = incrmprod( 3 );
*
* var p = accumulator();
* // returns null
*
* p = accumulator( 2.0 );
* // returns 2.0
*
* p = accumulator( -5.0 );
* // returns -10.0
*
* p = accumulator( 3.0 );
* // returns -30.0
*
* p = accumulator( 5.0 );
* // returns -75.0
*
* p = accumulator();
* // returns -75.0
*/
declare function incrmprod( W: number ): accumulator;


// EXPORTS //

export = incrmprod;
