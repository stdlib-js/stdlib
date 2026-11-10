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
* Subtract elements of a second one-dimensional ndarray from the corresponding elements of a first one-dimensional ndarray and assign the results to elements in a third one-dimensional ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/gwxsy
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var gwxsy = require( '@stdlib/blas/ext/base/ndarray/gwxsy' );
*
* var x = vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], 'generic' );
* var y = vector( [ 5.0, 4.0, 3.0, 2.0, 1.0 ], 'generic' );
* var w = vector( [ 0.0, 0.0, 0.0, 0.0, 0.0 ], 'generic' );
*
* var out = gwxsy( [ x, y, w ] );
* // returns <ndarray>[ -4.0, -2.0, 0.0, 2.0, 4.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
