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
* Discrete uniform distribution probability mass function (PMF).
*
* @module @stdlib/stats/base/dists/discrete-uniform/pmf
*
* @example
* var pmf = require( '@stdlib/stats/base/dists/discrete-uniform/pmf' );
*
* var y = pmf( 3.0, 2, 6 );
* // returns ~0.2
*
* var myPMF = pmf.factory( 6, 7 );
* y = myPMF( 7.0 );
* // returns 0.5
*
* y = myPMF( 5.0 );
* // returns 0.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var pmf = require( './pmf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( pmf, 'factory', factory );


// EXPORTS //

module.exports = pmf;
