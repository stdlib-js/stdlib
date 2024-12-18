/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Cumulatively test whether at least one array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left.
*
* @module @stdlib/array/base/cuany-by-right
*
* @example
* var cuanyByRight = require( '@stdlib/array/base/cuany-by-right' );
*
* function isPositive( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 1, 0, 0, 0 ];
*
* var y = cuanyByRight( x, isPositive );
* // returns [ false, false, false, true, true ]
*
* @example
* var cuanyByRight = require( '@stdlib/array/base/cuany-by-right' );
*
* function isPositive( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 1, 0, 0, 0 ];
*
* var y = [ false, null, false, null, false, null, false, null, false, null ];
* var out = cuanyByRight.assign( x, y, 2, 0, isPositive );
* // returns [ false, null, false, null, false, null, true, null, true, null ]
*
* var bool = ( out === y );
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
