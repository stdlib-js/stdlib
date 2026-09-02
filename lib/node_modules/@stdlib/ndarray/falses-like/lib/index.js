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
* Create an ndarray filled with `false` values and having the same shape and data type as a provided ndarray.
*
* @module @stdlib/ndarray/falses-like
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var empty = require( '@stdlib/ndarray/empty' );
* var falsesLike = require( '@stdlib/ndarray/falses-like' );
*
* var x = empty( [ 2, 2 ], {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* var y = falsesLike( x );
* // returns <ndarray>[ [ false, false ], [ false, false ] ]
*
* var sh = getShape( y );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( y ) );
* // returns 'generic'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
