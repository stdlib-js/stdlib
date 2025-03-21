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
* Create a zero-filled array having the same length and data type as a provided input array.
*
* @module @stdlib/array/zeros-like
*
* @example
* var zerosLike = require( '@stdlib/array/zeros-like' );
*
* var arr = zerosLike( [ 0.0, 0.0 ] );
* // returns [ 0.0, 0.0 ]
*
* @example
* var zerosLike = require( '@stdlib/array/zeros-like' );
*
* var arr = zerosLike( [ 0.0, 0.0 ], 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
