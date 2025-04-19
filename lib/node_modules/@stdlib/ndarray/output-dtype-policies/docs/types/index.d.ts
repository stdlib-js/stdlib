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
* Data type policies.
*/
type Policies = [
	'same',
	'promoted',
	'boolean',
	'boolean_and_generic',
	'signed_integer',
	'signed_integer_and_generic',
	'unsigned_integer',
	'unsigned_integer_and_generic',
	'integer',
	'integer_and_generic',
	'floating_point',
	'floating_point_and_generic',
	'real_floating_point',
	'real_floating_point_and_generic',
	'complex_floating_point',
	'complex_floating_point_and_generic',
	'real_and_generic',
	'real',
	'numeric',
	'numeric_and_generic',
	'default'
];

/**
* Returns a list of output ndarray data type policies.
*
* ## Notes
*
* -   The output array contains the following data type policies:
*
*     -   `same`: return the same data type.
*     -   `promoted`: return a promoted data type.
*     -   `boolean`: return a boolean data type.
*     -   `boolean_and_generic`: return a boolean or "generic" data type.
*     -   `signed_integer`: return a signed integer data type.
*     -   `signed_integer_and_generic`: return a signed integer or "generic" data type.
*     -   `unsigned_integer`: return an unsigned integer data type.
*     -   `unsigned_integer_and_generic`: return an unsigned integer or "generic" data type.
*     -   `integer`: return an integer data type (i.e., either signed or unsigned).
*     -   `integer_and_generic`: return an integer (i.e., either signed or unsigned) or "generic" data type.
*     -   `floating_point`: return a floating-point data type (i.e., either real-valued or complex-valued).
*     -   `floating_point_and_generic`: return a floating-point (i.e., either real-valued or complex-valued) or "generic" data type.
*     -   `real_floating_point`: return a real-valued floating-point data type.
*     -   `real_floating_point_and_generic`: return a real-valued or "generic" floating-point data type.
*     -   `complex_floating_point`: return a complex-valued floating-point data type.
*     -   `complex_floating_point_and_generic`: return a complex-valued or "generic" floating-point data type.
*     -   `real`: return a real-valued data type.
*     -   `real_and_generic`: return a real-valued or "generic" data type.
*     -   `numeric`: return a numeric data type.
*     -   `numeric_and_generic`: return a numeric or "generic" data type.
*     -   `default`: return the default data type.
*
* @returns list of data type policies
*
* @example
* var list = policies();
* // returns [...]
*/
declare function policies(): Policies;


// EXPORTS //

export = policies;
