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
* Count the number of elements in an array which pass a test implemented by a predicate function.
*
* @module @stdlib/array/base/count-if
*
* @example
* var countIf = require( '@stdlib/array/base/count-if' );
*
* function predicate( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 1, 0, 1, 2 ];
*
* var n = countIf( x, predicate );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
