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
* Return a new ndarray containing the last elements which pass a test implemented by a predicate function along one or more ndarray dimensions.
*
* @module @stdlib/ndarray/find-last
*
* @example
* var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
* var array = require( '@stdlib/ndarray/array' );
* var findLast = require( '@stdlib/ndarray/find-last' );
*
* // Create an input ndarray:
* var x = array( [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ] ] );
* // returns <ndarray>
*
* // Perform reduction:
* var out = findLast( x, isEven );
* // returns <ndarray>[ 8.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
