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
* Broadcast a scalar value to an ndarray of a specified shape.
*
* @module @stdlib/ndarray/broadcast-scalar
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var broadcastScalar = require( '@stdlib/ndarray/broadcast-scalar' );
*
* var x = broadcastScalar( 1.0, [ 2, 2 ] );
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ]
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
