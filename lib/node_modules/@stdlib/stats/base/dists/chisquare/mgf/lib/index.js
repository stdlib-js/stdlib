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
* Moment-generating function (MGF) for a chi-squared distribution.
*
* @module @stdlib/stats/base/dists/chisquare/mgf
*
* @example
* var mgf = require( '@stdlib/stats/base/dists/chisquare/mgf' );
*
* var y = mgf( 0.4, 2 );
* // returns ~5.0
*
* y = mgf( -1.0, 5.0 );
* // returns ~0.0642
*
* y = mgf( 0.0, 10.0 );
* // returns 1.0
*
* @example
* var factory = require( '@stdlib/stats/base/dists/chisquare/mgf' ).factory;
*
* var mgf = factory( 1.0 );
*
* var y = mgf( 0.2 );
* // returns ~1.291
*
* y = mgf( 0.4 );
* // returns ~2.236
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var mgf = require( './mgf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( mgf, 'factory', factory );


// EXPORTS //

module.exports = mgf;
