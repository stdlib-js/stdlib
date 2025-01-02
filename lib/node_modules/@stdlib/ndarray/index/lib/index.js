/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* ndarray index constructor.
*
* @module @stdlib/ndarray/index
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
* var ndindex = require( '@stdlib/ndarray/index' );
*
* var x = empty( [ 10 ], {
*     'dtype': 'uint8'
* });
*
* var idx = new ndindex( x );
* // returns <ndindex>
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var cartesianIndex = require( './cartesian.js' );
var linearIndex = require( './linear.js' );
var main = require( './main.js' );


// MAIN //

setReadOnly( main, 'cartesianIndex', cartesianIndex );
setReadOnly( main, 'linearIndex', linearIndex );


// EXPORTS //

module.exports = main;

// exports: { "cartesianIndex": "main.cartesianIndex", "linearIndex": "main.linearIndex", "free": "main.free", "get": "main.get" }
