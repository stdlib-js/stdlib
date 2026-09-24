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
* Return the first index of a search element in a one-dimensional single-precision complex floating-point ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/cindex-of
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var cindexOf = require( '@stdlib/blas/ext/base/ndarray/cindex-of' );
*
* var x = new Complex64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var searchElement = scalar2ndarray( new Complex64( 3.0, 4.0 ), {
*     'dtype': 'complex64'
* });
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var v = cindexOf( [ x, searchElement, fromIndex ] );
* // returns 1
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
