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
* Take elements from one of two one-dimensional ndarrays depending on a condition.
*
* @module @stdlib/blas/ext/base/ndarray/gwhere
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var gwhere = require( '@stdlib/blas/ext/base/ndarray/gwhere' );
*
* var condition = vector( [ 1, 0, 1, 0, 1 ], 'generic' );
* var x = vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], 'generic' );
* var y = vector( [ 6.0, 7.0, 8.0, 9.0, 10.0 ], 'generic' );
* var out = vector( [ 0.0, 0.0, 0.0, 0.0, 0.0 ], 'generic' );
*
* var v = gwhere( [ condition, x, y, out ] );
* // returns <ndarray>[ 1.0, 7.0, 3.0, 9.0, 5.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
