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
* Return the first index of an element in a one-dimensional ndarray which is not equal to a specified search element.
*
* @module @stdlib/blas/ext/base/ndarray/gindex-of-not-equal
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var gindexOfNotEqual = require( '@stdlib/blas/ext/base/ndarray/gindex-of-not-equal' );
*
* var x = vector( [ 1.0, 1.0, 3.0 ], 'generic' );
*
* var searchElement = scalar2ndarray( 1.0, {
*     'dtype': 'generic'
* });
*
* var v = gindexOfNotEqual( [ x, searchElement ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
