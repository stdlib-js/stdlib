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
* Calculate the differences between consecutive elements of a one-dimensional ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/gediff
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var gediff = require( '@stdlib/blas/ext/base/ndarray/gediff' );
*
* var x = vector( [ 2.0, 4.0, 6.0, 8.0, 10.0 ], 'generic' );
* var prepend = vector( [ 1.0 ], 'generic' );
* var append = vector( [ 11.0 ], 'generic' );
* var out = vector( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ], 'generic' );
*
* var y = gediff( [ x, prepend, append, out ] );
* // returns <ndarray>[ 1.0, 2.0, 2.0, 2.0, 2.0, 11.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
