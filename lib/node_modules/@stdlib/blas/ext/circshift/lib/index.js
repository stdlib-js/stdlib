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
* Circularly shift the elements of an input ndarray by a specified number of positions along one or more ndarray dimensions.
*
* @module @stdlib/blas/ext/circshift
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var circshift = require( '@stdlib/blas/ext/circshift' );
*
* var x = array( [ 1.0, 2.0, 3.0, 4.0 ], {
*     'shape': [ 2, 2 ],
*     'order': 'row-major'
* });
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*
* var y = circshift( x, 1, {
*     'dims': [ 0 ]
* });
* // returns <ndarray>[ [ 3.0, 4.0 ], [ 1.0, 2.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
