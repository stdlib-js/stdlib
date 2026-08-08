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
* Create a function for applying a unary function to each element in a provided array.
*
* @module @stdlib/math/array/tools/unary-factory
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
* var unaryFactory = require( '@stdlib/math/array/tools/unary-factory' );
*
* var dtypes = [ 'float64', 'float32', 'generic' ];
*
* var abs = unaryFactory( base, dtypes, dtypes, 'same' );
* // returns <Function>
*
* var x = abs( [ -1.0, 2.0, -3.0, 4.0 ] );
* // returns [ 1.0, 2.0, 3.0, 4.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
