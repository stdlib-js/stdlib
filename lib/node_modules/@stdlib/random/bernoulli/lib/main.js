/**
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

'use strict';

// MODULES //

var factory = require( './factory.js' );


// MAIN //

/**
* Returns pseudorandom numbers drawn from a Bernoulli distribution.
*
* @name bernoulli
* @type {Function}
* @param {NonNegativeIntegerArray} shape - output ndarray shape
* @param {(Probability|ndarrayLike)} p - success probability
* @param {Options} [options] - options
* @param {*} [options.dtype] - output ndarray data type
* @param {string} [options.order="row-major"] - memory layout (either row-major or column-major)
* @param {string} [options.mode="throw"] - specifies how to handle indices which exceed ndarray dimensions
* @param {StringArray} [options.submode=["throw"]] - specifies how to handle subscripts which exceed ndarray dimensions on a per dimension basis
* @param {boolean} [options.readonly=false] - boolean indicating whether an ndarray should be read-only
* @throws {TypeError} first argument must be a valid shape
* @throws {TypeError} must provide valid distribution parameters
* @throws {TypeError} distribution parameters and the desired shape must be broadcast compatible
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var arr = bernoulli( [ 10 ], 0.5 );
* // returns <ndarray>
*
* @example
* var arr = bernoulli( [ 10 ], 0.5, {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*/
var bernoulli = factory();


// EXPORTS //

module.exports = bernoulli;
