/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Hypergeometric distribution probability mass function (PMF).
*
* @module @stdlib/stats/base/dists/hypergeometric/pmf
*
* @example
* var pmf = require( '@stdlib/stats/base/dists/hypergeometric/pmf' );
*
* var y = pmf( 1.0, 8, 4, 2 );
* // returns ~0.571
*
* y = pmf( 2.0, 8, 4, 2 );
* // returns ~0.214
*
* y = pmf( 0.0, 8, 4, 2 );
* // returns ~0.214
*
* y = pmf( 1.5, 8, 4, 2 );
* // returns 0.0
*
* var mypmf = pmf.factory( 30, 20, 5 );
* y = mypmf( 4.0 );
* // returns ~0.34
*
* y = mypmf( 1.0 );
* // returns ~0.029
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var pmf = require( './pmf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( pmf, 'factory', factory );


// EXPORTS //

module.exports = pmf;
