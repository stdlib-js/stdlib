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
* Cumulatively test whether every element in a one-dimensional ndarray is falsy.
*
* @module @stdlib/blas/ext/base/ndarray/gcunone
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var BooleanVector = require( '@stdlib/ndarray/vector/bool' );
* var gcunone = require( '@stdlib/blas/ext/base/ndarray/gcunone' );
*
* var x = vector( [ 0.0, 0.0, 1.0, 1.0 ], 'generic' );
* var out = new BooleanVector( 4 );
*
* var z = gcunone( [ x, out ] );
* // returns <ndarray>[ true, true, false, false ]
*
* var bool = ( z === out );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
