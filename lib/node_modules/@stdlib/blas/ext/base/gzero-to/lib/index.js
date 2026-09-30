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
* Fill a strided array with linearly spaced numeric elements which increment by `1` starting from zero.
*
* @module @stdlib/blas/ext/base/gzero-to
*
* @example
* var gzeroTo = require( '@stdlib/blas/ext/base/gzero-to' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0 ];
*
* gzeroTo( x.length, x, 1 );
* // x => [ 0.0, 1.0, 2.0, 3.0 ]
*
* @example
* var gzeroTo = require( '@stdlib/blas/ext/base/gzero-to' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0 ];
*
* gzeroTo.ndarray( x.length, x, 1, 0 );
* // x => [ 0.0, 1.0, 2.0, 3.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
