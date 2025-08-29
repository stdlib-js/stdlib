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
* Return the index of the last element which passes a test implemented by a predicate function.
*
* @module @stdlib/blas/ext/base/gfind-last-index
*
* @example
* var gfindLastIndex = require( '@stdlib/blas/ext/base/gfind-last-index' );
*
* function isEven( v ) {
*     return v % 2.0 === 0.0;
* }
*
* var x = [ 1.0, 3.0, -5.0, 4.0, 3.0, -2.0, -3.0 ];
*
* var idx = gfindLastIndex( x.length, x, 1, isEven );
* // returns 5
*
* @example
* var gfindLastIndex = require( '@stdlib/blas/ext/base/gfind-last-index' );
*
* function isEven( v ) {
*     return v % 2.0 === 0.0;
* }
*
* var x = [ 1.0, 3.0, -5.0, 4.0, 3.0, -2.0, -3.0 ];
*
* var idx = gfindLastIndex.ndarray( x.length, x, 1, 0, isEven );
* // returns 5
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
