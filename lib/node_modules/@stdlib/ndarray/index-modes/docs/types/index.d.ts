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
* Returns a list of ndarray index modes.
*
* ## Notes
*
* -   The output array contains the following modes:
*
*     -   throw: specifies that a function should throw an error when an index is
*     outside a restricted interval.
*     -   wrap: specifies that a function should wrap around an index using modulo
*     arithmetic.
*     -   clamp: specifies that a function should set an index less than zero to
*     zero (minimum index) and set an index greater than a maximum index value to
*     the maximum possible index.
*
* @returns list of ndarray index modes
*
* @example
* var list = modes();
* // returns [ 'throw', 'clamp', 'wrap' ]
*/
declare function modes(): Array<string>;


// EXPORTS //

export = modes;
