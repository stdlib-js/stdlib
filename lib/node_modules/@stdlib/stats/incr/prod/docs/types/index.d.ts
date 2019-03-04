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
* Returns an accumulator function which incrementally computes a product.
*
* @returns accumulator function
*
* @example
* var accumulator = incrprod();
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns 2.0
*
* v = accumulator( 3.0 );
* // returns 6.0
*
* v = accumulator( 4.0 );
* // returns 24.0
*
* v = accumulator();
* // returns 24.0
*/
declare function incrprod(): accumulator;


// EXPORTS //

export = incrprod;
