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
* Multiply a strided array `x` by a constant and add the result to a strided array `y` multiplied by a constant.
*
* @module @stdlib/blas/ext/base/gaxpby
*
* @example
* var gaxpby = require( '@stdlib/blas/ext/base/gaxpby' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
*
* gaxpby( x.length, 5.0, x, 1, 2.0, y, 1 );
* // y => [ 9.0, 16.0, 23.0, 30.0, 37.0 ]
*
* @example
* var gaxpby = require( '@stdlib/blas/ext/base/gaxpby' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
*
* gaxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, 0 );
* // y => [ 9.0, 16.0, 23.0, 30.0, 37.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
