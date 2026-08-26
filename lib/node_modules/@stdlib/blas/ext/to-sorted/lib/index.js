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
* Return a new ndarray containing the elements of an input ndarray sorted along one or more ndarray dimensions.
*
* @module @stdlib/blas/ext/to-sorted
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var toSorted = require( '@stdlib/blas/ext/to-sorted' );
*
* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ] );
* // returns <ndarray>[ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ]
*
* var out = toSorted( x );
* // returns <ndarray>[ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var array = require( '@stdlib/ndarray/array' );
* var toSorted = require( '@stdlib/blas/ext/to-sorted' );
*
* var x = array( [ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ] );
* // returns <ndarray>[ [ [ 1.0, 2.0 ] ], [ [ -3.0, 4.0 ] ], [ [ -5.0, 6.0 ] ] ]
*
* var y = zeros( [ 3, 1, 2 ] );
* // returns <ndarray>[ [ [ 0.0, 0.0 ] ], [ [ 0.0, 0.0 ] ], [ [ 0.0, 0.0 ] ] ]
*
* var out = toSorted.assign( x, y );
* // returns <ndarray>[ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
*
* var bool = ( y === out );
* // returns true
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
