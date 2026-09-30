/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Return the index of the last element in a one-dimensional single-precision floating-point ndarray equal to a corresponding element in another one-dimensional single-precision floating-point ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/slast-index-equal
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var slastIndexEqual = require( '@stdlib/blas/ext/base/ndarray/slast-index-equal' );
*
* var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float32Vector( [ 0.0, 0.0, 3.0, 0.0 ] );
*
* var fromIndex = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* var idx = slastIndexEqual( [ x, y, fromIndex ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
