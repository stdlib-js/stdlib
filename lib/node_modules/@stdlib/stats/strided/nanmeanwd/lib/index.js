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
* Compute the arithmetic mean of a strided array, ignoring `NaN` values and using Welford's algorithm.
*
* @module @stdlib/stats/strided/nanmeanwd
*
* @example
* var nanmeanwd = require( '@stdlib/stats/strided/nanmeanwd' );
*
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = nanmeanwd( x.length, x, 1 );
* // returns ~0.3333
*
* @example
* var nanmeanwd = require( '@stdlib/stats/strided/nanmeanwd' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
*
* var v = nanmeanwd.ndarray( 5, x, 2, 1 );
* // returns 1.25
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
