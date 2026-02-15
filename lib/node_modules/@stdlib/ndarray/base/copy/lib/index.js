/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Copy an input ndarray to a new ndarray having the same shape and data type.
*
* @module @stdlib/ndarray/base/copy
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
* var copy = require( '@stdlib/ndarray/base/copy' );
*
* var x = zeros( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = copy( x );
* // returns <ndarray>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
