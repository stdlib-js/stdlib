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
* Returns a random permutation of elements in `arr`.
*
* @name shuffle
* @type {Function}
* @param {ArrayLike} arr - array-like object to shuffle
* @param {Options} [options] - function options
* @param {string} [options.copy="shallow"] - string indicating whether to return a copy (`deep`,`shallow` or `none`)
* @throws {TypeError} `options` must be an object
* @throws {TypeError} must provide valid options
* @returns {ArrayLike} the shuffled array-like object
*
* @example
* var data = [ 1, 2, 3 ];
* var out = shuffle( data );
* // e.g., returns [ 3, 1, 2 ]
*
* @example
* var data = [ 1, 2, 3 ];
* var out = shuffle( data, {
*     'copy': 'none'
* });
* var bool = ( data === out );
* // returns true
*/
var shuffle = factory();


// EXPORTS //

module.exports = shuffle;
