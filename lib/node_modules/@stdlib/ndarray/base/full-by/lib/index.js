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
* Create an ndarray filled according to a callback function and having a specified shape and data type.
*
* @module @stdlib/ndarray/base/full-by
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var fullBy = require( '@stdlib/ndarray/base/full-by' );
*
* function clbk() {
*     return 10.0;
* }
*
* var arr = fullBy( 'float64', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'float64'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
