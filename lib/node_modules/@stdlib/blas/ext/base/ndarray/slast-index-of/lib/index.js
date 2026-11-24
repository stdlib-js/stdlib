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

/**
* Return the last index of a search element in a one-dimensional single-precision floating-point ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/slast-index-of
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var slastIndexOf = require( '@stdlib/blas/ext/base/ndarray/slast-index-of' );
*
* var x = new Float32Vector( [ 1.0, 2.0, 4.0, 2.0 ] );
*
* var searchElement = scalar2ndarray( 2.0, {
*     'dtype': 'float32'
* });
*
* var fromIndex = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* var v = slastIndexOf( [ x, searchElement, fromIndex ] );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
