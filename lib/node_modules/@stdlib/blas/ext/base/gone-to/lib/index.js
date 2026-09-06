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
* Fill a strided array with linearly spaced numeric elements which increment by `1` starting from one.
*
* @module @stdlib/blas/ext/base/gone-to
*
* @example
* var goneTo = require( '@stdlib/blas/ext/base/gone-to' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0 ];
*
* goneTo( x.length, x, 1 );
* // x => [ 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var goneTo = require( '@stdlib/blas/ext/base/gone-to' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0 ];
*
* goneTo.ndarray( x.length, x, 1, 0 );
* // x => [ 1.0, 2.0, 3.0, 4.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
