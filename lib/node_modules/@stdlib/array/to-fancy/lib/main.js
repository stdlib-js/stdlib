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
* Converts an array to an object supporting fancy indexing.
*
* @name array2fancy
* @type {Function}
* @param {ArrayLike} x - input array
* @param {Options} [options] - function options
* @param {boolean} [options.strict=false] - boolean indicating whether to enforce strict bounds checking
* @param {Function} [options.cache] - cache for resolving array index objects
* @throws {TypeError} first argument must be array-like
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ArrayLike} fancy array
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var y = array2fancy( x );
* // returns <Array>
*
* var z = y[ '1::2' ];
* // returns [ 2, 4, 6 ]
*
* var len = z.length;
* // returns 3
*
* var v = z[ 0 ];
* // returns 2
*
* v = z[ 1 ];
* // returns 4
*
* v = z[ 2 ];
* // returns 6
*/
var array2fancy = factory();


// EXPORTS //

module.exports = array2fancy;
