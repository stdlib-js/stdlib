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
* Subtract elements of a strided array `y` from the corresponding elements of a strided array `x` and assign the results to elements in a strided array `w`.
*
* @module @stdlib/blas/ext/base/gwxsy
*
* @example
* var gwxsy = require( '@stdlib/blas/ext/base/gwxsy' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 5.0, 4.0, 3.0, 2.0, 1.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwxsy( x.length, x, 1, y, 1, w, 1 );
* // w => [ -4.0, -2.0, 0.0, 2.0, 4.0 ]
*
* @example
* var gwxsy = require( '@stdlib/blas/ext/base/gwxsy' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 5.0, 4.0, 3.0, 2.0, 1.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwxsy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
* // w => [ -4.0, -2.0, 0.0, 2.0, 4.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
