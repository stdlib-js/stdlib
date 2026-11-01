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
* Subtract a scalar constant from each element in a strided array and divide each result by a scalar constant before assigning the results to a strided array `w`.
*
* @module @stdlib/blas/ext/base/gwxsadb
*
* @example
* var gwxsadb = require( '@stdlib/blas/ext/base/gwxsadb' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwxsadb( x.length, 3.0, 2.0, x, 1, w, 1 );
* // w => [ -1.0, -0.5, 0.0, 0.5, 1.0 ]
*
* @example
* var gwxsadb = require( '@stdlib/blas/ext/base/gwxsadb' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1, 0 );
* // w => [ -1.0, -0.5, 0.0, 0.5, 1.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
