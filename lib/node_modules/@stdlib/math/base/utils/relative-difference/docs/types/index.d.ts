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
* Computes the relative difference of two real numbers.
*
* ## Notes
*
* -   By default, the function scales the absolute difference by dividing the absolute difference by the maximum absolute value of `x` and `y`. To scale by a different function, specify a scale function name or custom scale function.
* -   If the absolute difference of `x` and `y` is `0`, the relative difference is always `0`.
* -   If `|x| = |y| = infinity`, the function returns `NaN`.
* -   If `|x| = |-y| = infinity`, the relative difference is `+infinity`.
* -   If a `scale` function returns `0`, the function returns `NaN`.
*
* @param x - first number
* @param y - second number
* @param scale - scale function (default: 'max-abs')
* @throws must provide a recognized scale function name
* @returns relative difference
*
* @example
* var d = relativeDifference( 2.0, 5.0 ); // => 3/5
* // returns 0.6
*
* @example
* var d = relativeDifference( -1.0, 3.14 ); // => 4.14/3.14
* // returns ~1.318
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'max-abs' ); // => |-7/5|
* // returns 1.4
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'max' ); // => |-7/5|
* // returns 1.4
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'min-abs' ); // => |-7/2|
* // returns 3.5
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'min' ); // => |-7/-2|
* // returns 3.5
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'mean-abs' ); // => |-7/3.5|
* // returns 2.0
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'mean' ); // => |-7/1.5|
* // returns ~4.67
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'x' ); // => |-7/-2|
* // returns 3.5
*
* @example
* var d = relativeDifference( 5.0, -2.0, 'x' ); // => |7/5|
* // returns 1.4
*
* @example
* var d = relativeDifference( -2.0, 5.0, 'y' ); // => |-7/5|
* // returns 1.4
*
* @example
* var d = relativeDifference( 5.0, -2.0, 'y' ); // => |7/-2|
* // returns 3.5
*/
declare function relativeDifference( x: number, y: number, scale?: ScaleFunction | ScaleNames ): number; // tslint-disable-line max-line-length


// EXPORTS //

export = relativeDifference;
