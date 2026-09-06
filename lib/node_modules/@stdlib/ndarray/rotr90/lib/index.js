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
* Return a read-only view of a matrix (or a stack of matrices) rotated 90 degrees clockwise.
*
* @module @stdlib/ndarray/rotr90
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var rotr90 = require( '@stdlib/ndarray/rotr90' );
*
* var x = array( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ] );
* // returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ] ]
*
* var y = rotr90( x, 1 );
* // returns <ndarray>[ [ 4.0, 1.0 ], [ 5.0, 2.0 ], [ 6.0, 3.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
