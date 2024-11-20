/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/**
* Returns a list of output ndarray data type policies.
*
* ## Notes
*
* -   The output array contains the following data type policies:
*
*     -   `same`: return the same data type.
*     -   `promoted`: return a promoted data type.
*     -   `bool`: return a boolean data type.
*     -   `numeric`: return a numeric data type.
*     -   `real`: return a real-valued data type.
*     -   `signed_integer`: return a signed integer data type.
*     -   `unsigned_integer`: return an unsigned integer data type.
*     -   `integer`: return an integer data type (i.e., either signed or unsigned).
*     -   `floating_point`: return a floating-point data type (i.e., either real-valued or complex-valued).
*     -   `real_floating_point`: return a real-valued floating-point data type.
*     -   `complex_floating_point`: return a complex-valued floating-point data type.
*     -   `default`: return the default data type.
*
* @returns list of data type policies
*
* @example
* var list = policies();
* // returns [...]
*/
declare function policies(): Array<string>;


// EXPORTS //

export = policies;
