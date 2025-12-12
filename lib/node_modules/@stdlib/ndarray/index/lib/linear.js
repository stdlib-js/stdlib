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

var createFactory = require( './factory.js' );


// MAIN //

/**
* Returns an ndarray index for indices representing locations in linear memory.
*
* @name linearIndex
* @type {Function}
* @param {ndarray} x - input ndarray
* @param {Options} [options] - function options
* @param {boolean} [options.persist=false] - boolean indicating whether to continue persisting an index object after first usage
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} first argument must be a valid index ndarray
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ndindex} ndindex instance
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'int32'
* });
*
* var idx = linearIndex( x );
* // returns <ndindex>
*/
var linearIndex = createFactory( 'linear' );


// EXPORTS //

module.exports = linearIndex;
