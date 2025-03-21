/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Compute the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* @module @stdlib/blas/ext/base/gnannsumkbn
*
* @example
* var gnannsumkbn = require( '@stdlib/blas/ext/base/gnannsumkbn' );
*
* var x = [ 1.0, -2.0, NaN, 2.0 ];
* var out = [ 0.0, 0 ];
*
* var v = gnannsumkbn( x.length, x, 1, out, 1 );
* // returns [ 1.0, 3 ]
*
* @example
* var gnannsumkbn = require( '@stdlib/blas/ext/base/gnannsumkbn' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
* var out = [ 0.0, 0 ];
*
* var v = gnannsumkbn.ndarray( 5, x, 2, 1, out, 1, 0 );
* // returns [ 5.0, 4 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
