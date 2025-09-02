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
* Compute the variance of a strided array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.
*
* @module @stdlib/stats/strided/nanvarianceyc
*
* @example
* var nanvarianceyc = require( '@stdlib/stats/strided/nanvarianceyc' );
*
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = nanvarianceyc( x.length, 1.0, x, 1 );
* // returns ~4.3333
*
* @example
* var nanvarianceyc = require( '@stdlib/stats/strided/nanvarianceyc' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
*
* var v = nanvarianceyc.ndarray( 5, 1.0, x, 2, 1 );
* // returns 6.25
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "main.ndarray" }
