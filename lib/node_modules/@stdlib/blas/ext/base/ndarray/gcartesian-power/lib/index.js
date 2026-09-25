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
* Compute the Cartesian power for an ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/gcartesian-power
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var zeros = require( '@stdlib/ndarray/zeros' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var gcartesianPower = require( '@stdlib/blas/ext/base/ndarray/gcartesian-power' );
*
* var x = vector( [ 1.0, 2.0 ], 'generic' );
* var out = zeros( [ 4, 2 ], {
*     'dtype': 'generic'
* });
*
* var k = scalar2ndarray( 2, {
*     'dtype': 'generic'
* });
*
* var v = gcartesianPower( [ x, out, k ] );
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 2.0 ], [ 2.0, 1.0 ], [ 2.0, 2.0 ] ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
