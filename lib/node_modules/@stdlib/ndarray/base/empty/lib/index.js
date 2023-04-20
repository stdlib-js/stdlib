/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Create an uninitialized ndarray having a specified shape and data type.
*
* @module @stdlib/ndarray/base/empty
*
* @example
* var empty = require( '@stdlib/ndarray/base/empty' );
*
* var arr = empty( 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'float32'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
