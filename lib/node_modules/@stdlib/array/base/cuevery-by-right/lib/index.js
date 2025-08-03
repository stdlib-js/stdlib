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
* Cumulatively test whether every element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left.
*
* @module @stdlib/array/base/cuevery-by-right
*
* @example
* var cueveryByRight = require( '@stdlib/array/base/cuevery-by-right' );
*
* function fcn( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 0, 1, 1, 1 ];
*
* var y = cueveryByRight( x, fcn );
* //returns [ true, true, true, false, false ]
*
* @example
* var cueveryByRight = require( '@stdlib/array/base/cuevery-by-right' );
*
* function fcn( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 0, 1, 1, 1 ];
*
* var y1 = cueveryByRight( x, fcn );
* // returns [ true, true, true, false, false ]
*
* var y2 = [ false, null, false, null, false, null, false, null, false, null ];
* var out = cueveryByRight.assign( x, y2, 2, 0, fcn );
* // returns [ true, null, true, null, true, null, false, null, false, null ]
*
* var bool = ( out === y2 );
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
