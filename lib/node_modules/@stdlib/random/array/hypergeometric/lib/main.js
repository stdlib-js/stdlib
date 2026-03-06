/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var factory = require( './factory.js' );


// MAIN //

/**
* Returns an array containing pseudorandom numbers drawn from a hypergeometric distribution.
*
* @name hypergeometric
* @type {Function}
* @param {NonNegativeInteger} len - array length
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @param {Options} [options] - options
* @param {string} [options.dtype="float64"] - output array data type
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {(Array|TypedArray)} output array
*
* @example
* var arr = hypergeometric( 10, 20, 10, 7 );
* // returns <Float64Array>
*
* @example
* var arr = hypergeometric( 10, 20, 10, 7, {
*     'dtype': 'generic'
* });
* // returns [...]
*/
var hypergeometric = factory();


// EXPORTS //

module.exports = hypergeometric;
