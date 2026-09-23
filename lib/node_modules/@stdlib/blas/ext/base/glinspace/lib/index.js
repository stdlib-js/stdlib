/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Fill a strided array with linearly spaced values over a specified interval.
*
* @module @stdlib/blas/ext/base/glinspace
*
* @example
* var glinspace = require( '@stdlib/blas/ext/base/glinspace' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* glinspace( x.length, 0.0, 100.0, true, x, 1 );
* // x => [ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*
* @example
* var glinspace = require( '@stdlib/blas/ext/base/glinspace' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* glinspace.ndarray( x.length, 0.0, 100.0, false, x, 1, 0 );
* // x => [ 0.0, 20.0, 40.0, 60.0, 80.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "glinspace.ndarray" }
