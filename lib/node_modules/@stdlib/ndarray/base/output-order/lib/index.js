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
* Resolve the order (i.e. memory layout) of an output ndarray according to a list of input ndarrays.
*
* @module @stdlib/ndarray/base/output-order
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var outputOrder = require( '@stdlib/ndarray/base/output-order' );
*
* var x = zeros( [ 2, 2 ] );
* var y = zeros( [ 2, 2 ] );
*
* var order = outputOrder( [ x, y ] );
* // returns <string>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
