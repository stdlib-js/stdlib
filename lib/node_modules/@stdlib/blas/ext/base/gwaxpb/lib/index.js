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
* Multiply each element in a strided array `x` by a scalar constant and add a scalar constant before assigning the results to a strided array `w`.
*
* @module @stdlib/blas/ext/base/gwaxpb
*
* @example
* var gwaxpb = require( '@stdlib/blas/ext/base/gwaxpb' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwaxpb( x.length, 5.0, 3.0, x, 1, w, 1 );
* // w => [ 8.0, 13.0, 18.0, 23.0, 28.0 ]
*
* @example
* var gwaxpb = require( '@stdlib/blas/ext/base/gwaxpb' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwaxpb.ndarray( x.length, 5.0, 3.0, x, 1, 0, w, 1, 0 );
* // w => [ 8.0, 13.0, 18.0, 23.0, 28.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
