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
* Calculate the differences between consecutive elements of a strided array.
*
* @module @stdlib/blas/ext/base/gediff
*
* @example
* var gediff = require( '@stdlib/blas/ext/base/gediff' );
*
* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
* var p = [ 1.0 ];
* var a = [ 22.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, 1 );
* // out => [ 1.0, 2.0, 3.0, 4.0, 5.0, 22.0 ]
*
* @example
* var gediff = require( '@stdlib/blas/ext/base/gediff' );
*
* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
* var p = [ 1.0 ];
* var a = [ 22.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 );
* // out => [ 1.0, 2.0, 3.0, 4.0, 5.0, 22.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
