/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Casting policies.
*/
type Policies = [
	'none',
	'promoted',
	'accumulation',
	'output'
];

/**
* Returns a list of input ndarray casting policies.
*
* ## Notes
*
* -   The output array contains the following policies:
*
*     -   `none`: no guidance on specific casting behavior. An input ndarray may or may not be cast depending on the needs of an implementation.
*     -   `promoted`: cast an input ndarray to a promoted data type.
*     -   `accumulation`: cast an input ndarray to a data type amenable to accumulation.
*     -   `output`: cast an input ndarray to the data type of the output ndarray.
*
* @returns list of policies
*
* @example
* var list = policies();
* // returns [...]
*/
declare function policies(): Policies;


// EXPORTS //

export = policies;
