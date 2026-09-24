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
* Generate a Vandermonde matrix.
*
* @module @stdlib/blas/ext/base/ndarray/gvander
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var zeros = require( '@stdlib/ndarray/zeros' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var gvander = require( '@stdlib/blas/ext/base/ndarray/gvander' );
*
* var x = vector( [ 1.0, 2.0, 3.0 ], 'generic' );
* var out = zeros( [ 3, 3 ], {
*     'dtype': 'generic'
* });
*
* var mode = scalar2ndarray( 1, {
*     'dtype': 'generic'
* });
*
* var v = gvander( [ x, out, mode ] );
* // returns <ndarray>[ [ 1.0, 1.0, 1.0 ], [ 1.0, 2.0, 4.0 ], [ 1.0, 3.0, 9.0 ] ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
