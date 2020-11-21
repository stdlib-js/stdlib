/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Return the number of non-nonsingleton dimensions.
*
* @module @stdlib/ndarray/base/nonsingleton-dimensions
*
* @example
* var nonsingletonDimensions = require( '@stdlib/ndarray/base/nonsingleton-dimensions' );
*
* var shape = [ 2, 2, 1 ];
*
* var n = nonsingletonDimensions( shape );
* // returns 2
*
* @example
* var nonsingletonDimensions = require( '@stdlib/ndarray/base/nonsingleton-dimensions' );
*
* var shape = [ 1, 1, 1 ];
*
* var n = nonsingletonDimensions( shape );
* // returns 0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
