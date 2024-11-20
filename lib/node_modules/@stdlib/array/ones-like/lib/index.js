/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Create an array filled with ones and having the same length and data type as a provided input array.
*
* @module @stdlib/array/ones-like
*
* @example
* var onesLike = require( '@stdlib/array/ones-like' );
*
* var arr = onesLike( [ 0.0, 0.0 ] );
* // returns [ 1.0, 1.0 ]
*
* @example
* var onesLike = require( '@stdlib/array/ones-like' );
*
* var arr = onesLike( [ 0.0, 0.0 ], 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
