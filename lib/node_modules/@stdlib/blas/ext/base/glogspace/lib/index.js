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
* Fill a strided array with logarithmically spaced values over a specified interval.
*
* @module @stdlib/blas/ext/base/glogspace
*
* @example
* var glogspace = require( '@stdlib/blas/ext/base/glogspace' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* glogspace( x.length, 10.0, 0.0, 5.0, true, x, 1 );
* // x => [ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
*
* @example
* var glogspace = require( '@stdlib/blas/ext/base/glogspace' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* glogspace.ndarray( x.length, 10.0, 0.0, 5.0, false, x, 1, 0 );
* // x => [ 1.0, 10.0, 100.0, 1000.0, 10000.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "glogspace.ndarray" }
