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
* Converts an ndarray to an object supporting fancy indexing.
*
* @name ndarray2fancy
* @type {Function}
* @param {ndarrayLike} x - input ndarray
* @param {Options} [options] - function options
* @param {boolean} [options.strict=false] - boolean indicating whether to enforce strict bounds checking
* @param {Function} [options.cache] - cache for resolving ndarray index objects
* @throws {TypeError} first argument must be ndarray-like
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ndarrayLike} fancy ndarray
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = new ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var y = ndarray2fancy( x );
* // returns <ndarray>
*
* var v = y[ '1:,:' ];
* // returns <ndarray>
*/
var ndarray2fancy = factory();


// EXPORTS //

module.exports = ndarray2fancy;
