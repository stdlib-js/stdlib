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
* Compute the Cartesian product for two strided arrays.
*
* @module @stdlib/blas/ext/base/gcartesian-product
*
* @example
* var gcartesianProduct = require( '@stdlib/blas/ext/base/gcartesian-product' );
*
* var x = [ 1.0, 2.0 ];
* var y = [ 3.0, 4.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gcartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2 );
* // out => [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ]
*
* @example
* var gcartesianProduct = require( '@stdlib/blas/ext/base/gcartesian-product' );
*
* var x = [ 1.0, 2.0 ];
* var y = [ 3.0, 4.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gcartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
* // out => [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
