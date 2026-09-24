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
* Add a scalar constant to each element in a strided array `x` and assign the results to elements in a strided array `w`.
*
* @module @stdlib/blas/ext/base/gwapx
*
* @example
* var gwapx = require( '@stdlib/blas/ext/base/gwapx' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwapx( x.length, 5.0, x, 1, w, 1 );
* // w => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
*
* @example
* var gwapx = require( '@stdlib/blas/ext/base/gwapx' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, 0 );
* // w => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
