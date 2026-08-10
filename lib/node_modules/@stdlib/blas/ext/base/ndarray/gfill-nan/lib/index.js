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
* Replace elements in a one-dimensional ndarray equal to `NaN` with a specified scalar constant.
*
* @module @stdlib/blas/ext/base/ndarray/gfill-nan
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var gfillNaN = require( '@stdlib/blas/ext/base/ndarray/gfill-nan' );
*
* var x = vector( [ NaN, -2.0, 3.0, NaN, 4.0, -6.0 ], 'generic' );
*
* var alpha = scalar2ndarray( 0.0, {
*     'dtype': 'generic'
* });
*
* var out = gfillNaN( [ x, alpha ] );
* // returns <ndarray>[ 0.0, -2.0, 3.0, 0.0, 4.0, -6.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
