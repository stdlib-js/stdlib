/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* If provided a value, the accumulator function returns an updated accumulated value. If not provided a value, the accumulator function returns the current accumulated value.
*
* @param x - input value
* @param y - input value
* @returns sample absolute correlation coefficient or null
*/
type accumulator = ( x?: number, y?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a moving sample absolute Pearson product-moment correlation coefficient.
*
* @param W - window size
* @param meanx - mean value
* @param meany - mean value
* @returns accumulator function
*
* @example
* var accumulator = incrmapcorr( 3, -2.0, 10.0 );
*/
declare function incrmapcorr( W: number, meanx: number, meany: number ): accumulator; // tslint-disable-line max-line-length

/**
* Returns an accumulator function which incrementally computes a moving sample absolute Pearson product-moment correlation coefficient.
*
* @param W - window size
* @returns accumulator function
*
* @example
* var accumulator = incrmapcorr( 3 );
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
* ar = accumulator( 3.0, -1.0 );
* // returns ~0.925
*
* ar = accumulator( 5.0, -9.5 );
* // returns ~0.863
*
* ar = accumulator();
* // returns ~0.863
*/
declare function incrmapcorr( W: number ): accumulator;


// EXPORTS //

export = incrmapcorr;
