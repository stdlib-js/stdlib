/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Planck distribution probability mass function (PMF).
*
* @module @stdlib/stats/base/dists/planck/pmf
*
* @example
* var pmf = require( '@stdlib/stats/base/dists/planck/pmf' );
*
* var y = pmf( 4.0, 0.3 );
* // returns ~0.0781
*
* y = pmf( 2.0, 1.7 );
* // returns ~0.0273
*
* y = pmf( -1.0, 0.5 );
* // returns 0.0
*
* var mypmf = pmf.factory( 0.5 );
* y = mypmf( 3.0 );
* // returns ~0.0878
*
* y = mypmf( 1.0 );
* // returns ~0.2387
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
