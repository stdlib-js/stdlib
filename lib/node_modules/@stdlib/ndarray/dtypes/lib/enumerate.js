/**
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

'use strict';

// MODULES //

var dtypes = require( './enum.js' );


// VARIABLES //

var dt = dtypes();


// MAIN //

/**
* Returns the integer value associated with a supported dtype for purposes of C inter-operation.
*
* ## Notes
*
* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the function should be used in an opaque manner.
* -   The main purpose of this function is JavaScript and C inter-operation of ndarray objects. While certain dtypes, such as "generic" and "binary", have special behavior in JavaScript, they do not have a direct complement in C.
*
* @param {string} dtype - data type
* @returns {(integer|void)} integer value or undefined
*
* @example
* var v = enumerate( 'int8' );
* // returns <number>
*/
function enumerate( dtype ) {
	return dt[ dtype ];
}


// EXPORTS //

module.exports = enumerate;
