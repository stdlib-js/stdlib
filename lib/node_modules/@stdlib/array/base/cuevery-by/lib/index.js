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
* Cumulatively test whether every array element in a provided array passes a test implemented by a predicate function.
*
* @module @stdlib/array/base/cuevery-by
*
* @example
* var cueveryBy = require( '@stdlib/array/base/cuevery-by' );
*
* function isPositive( value ) {
*		return ( value > 0 );
* }
*
* var x = [ 1, 1, 1, 0, 1 ];
* var y = cueveryBy( x, isPositive );
* // returns [ true, true, true, false, false ]
*
* @example
* var cueveryBy = require( '@stdlib/array/base/cuevery-by' );
*
* var x = [ 1, 1, 1, 0, 1 ];
*
* var y = [ false, null, false, null, false, null, false, null, false, null ];
* var out = cueveryBy.assign( x, y, 2, 0, isPositive );
* // returns [ true, null, true, null, true, null, false, null, false, null ]
*
* var bool = ( arr === out );
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
