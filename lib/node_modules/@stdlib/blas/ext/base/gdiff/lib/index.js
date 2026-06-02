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
* Calculate the k-th discrete forward difference of a strided array.
*
* @module @stdlib/blas/ext/base/gdiff
*
* @example
* var gdiff = require( '@stdlib/blas/ext/base/gdiff' );
*
* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
* var p = [ 1.0 ];
* var a = [ 22.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gdiff( x.length, 2, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
*
* console.log( out );
* // => [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*
* @example
* var gdiff = require( '@stdlib/blas/ext/base/gdiff' );
*
* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
* var p = [ 1.0 ];
* var a = [ 22.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gdiff.ndarray( x.length, 2, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );
*
* console.log( out );
* // => [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "main.ndarray" }
