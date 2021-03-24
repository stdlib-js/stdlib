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

/**
* Custom scale function.
*
* @param x - first value
* @param y - second value
* @returns custom scale
*/
type ScaleFunction = ( x: number, y: number ) => number;

/**
* Scale function name.
*
* ## Notes
*
* -   The following `scale` functions are supported:
*
*     -   'max-abs': maximum absolute value of `x` and `y` (default).
*     -   'max': maximum value of `x` and `y`.
*     -   'min-abs': minimum absolute value of `x` and `y`.
*     -   'min': minimum value of `x` and `y`.
*     -   'mean-abs': arithmetic mean of the absolute values of `x` and `y`.
*     -   'mean': arithmetic mean of `x` and `y`.
*     -   'x': `x` (*noncommutative*).
*     -   'y': `y` (*noncommutative*).
*/
type ScaleNames = 'max-abs' | 'max' | 'min-abs' | 'min' | 'mean-abs' | 'mean' | 'x' | 'y'; // tslint-disable-line max-line-length

/**
* Computes the relative difference in units of double-precision floating-point epsilon.
*
* ## Notes
*
* -   By default, the function scales the absolute difference by dividing the absolute difference by the maximum absolute value of `x` and `y`. To scale by a different function, specify a scale function name or custom scale function.
* -   If computing the relative difference in units of epsilon will result in overflow, the function returns the maximum double-precision floating-point number.
* -   If the absolute difference of `x` and `y` is `0`, the relative difference is always `0`.
* -   If `|x| = |y| = infinity`, the function returns `NaN`.
* -   If `|x| = |-y| = infinity`, the relative difference is `+infinity`.
* -   If a `scale` function returns `0`, the function returns `NaN`.
*
* @param x - first number
* @param y - second number
* @param scale - scale function (default: 'max-abs')
* @returns relative difference in units of double-precision floating-point epsilon
*
* @example
* var d = epsilonDifference( 12.15, 12.149999999999999 ); // => ~0.658ε
* // returns ~0.658
*
* @example
* var d = epsilonDifference( 2.4341309458983933, 2.4341309458633909, 'mean-abs' ); // => ~64761.5ε => ~1.438e-11
* // returns ~64761.5
*
* @example
* function scale( x, y ) {
*      // Return the minimum value:
*      return ( x > y ) ? y : x;
* }
*
* var d = epsilonDifference( 1.0000000000000002, 1.0000000000000100, scale ); // => ~44ε
* // returns ~44
*/
declare function epsilonDifference( x: number, y: number, scale?: ScaleFunction | ScaleNames ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = epsilonDifference;
