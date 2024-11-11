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
* Test whether two ndarrays have the same shape.
*
* @module @stdlib/ndarray/base/assert/has-equal-shape
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var hasEqualShape = require( '@stdlib/ndarray/base/assert/has-equal-shape' );
*
* var x = array( [ 1, 2, 3, 4 ] );
* var y = array( [ 5, 6, 7, 8 ] );
*
* var bool = hasEqualShape( x, y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
