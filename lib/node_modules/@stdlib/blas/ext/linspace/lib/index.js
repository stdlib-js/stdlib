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
* Return a new ndarray filled with linearly spaced values over a specified interval along one or more ndarray dimensions.
*
* @module @stdlib/blas/ext/linspace
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var linspace = require( '@stdlib/blas/ext/linspace' );
*
* var out = linspace( [ 2, 4 ], 0.0, 3.0 );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var linspace = require( '@stdlib/blas/ext/linspace' );
*
* var x = zeros( [ 2, 4 ] );
* // returns <ndarray>
*
* var out = linspace.assign( x, 0.0, 3.0 );
* // returns <ndarray>
*
* var bool = ( out === x );
* // returns true
*
* var arr = ndarray2array( out );
* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
