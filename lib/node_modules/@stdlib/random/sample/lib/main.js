/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Samples elements from an array-like object.
*
* @name sample
* @type {Function}
* @param {ArrayLike} x - array-like object from which to sample
* @param {Options} [options] - function options
* @param {NonNegativeInteger} [options.size] - sample size
* @param {ProbabilityArray} [options.probs] - element probabilities
* @param {boolean} [options.replace=true] - boolean indicating whether to sample with replacement
* @throws {TypeError} first argument must be array-like
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} `size` option must be less than or equal to the length of `x` when the `replace` option is `false`
* @returns {Array} sample
*
* @example
* var out = sample( [ 3, null, NaN, 'abc', function(){} ] );
* // e.g., returns [ 3, 'abc', null, 3, null ]
*/
var sample = factory();


// EXPORTS //

module.exports = sample;
