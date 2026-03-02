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
* Sort a one-dimensional ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/gsort
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var gsort = require( '@stdlib/blas/ext/base/ndarray/gsort' );
*
* var x = array( [ 1.0, -2.0, 3.0, -4.0 ], {
*    'dtype': 'generic'
* });
* // returns <ndarray>[ 1.0, -2.0, 3.0, -4.0 ]
*
* var ord = scalar2ndarray( 1.0, {
*    'dtype': 'generic'
* });
* // returns <ndarray>[ 1.0 ]
*
* var out = gsort( [ x, ord ] );
* // returns <ndarray>[ -4.0, -2.0, 1.0, 3.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
