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
* Evaluate the moment-generating function (MGF) of a discrete uniform distribution.
*
* @module @stdlib/stats/base/dists/discrete-uniform/mgf
*
* @example
* var mgf = require( '@stdlib/stats/base/dists/discrete-uniform/mgf' );
*
* var y = mgf( 2.0, 0, 4 );
* // returns ~689.475
*
* y = mgf( -0.2, 0, 4 );
* // returns ~0.697
*
* y = mgf( 2.0, 0, 1 );
* // returns ~4.195
*
* var mymgf = mgf.factory( 6, 7 );
* y = mymgf( 0.1 );
* // returns ~1.918
*
* y = mymgf( 1.1 );
* // returns ~1471.722
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var mgf = require( './mgf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( mgf, 'factory', factory );


// EXPORTS //

module.exports = mgf;
