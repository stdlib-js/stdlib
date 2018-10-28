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
* Moment-generating function (MGF) for a beta distribution.
*
* @module @stdlib/stats/base/dists/beta/mgf
*
* @example
* var mgf = require( '@stdlib/stats/base/dists/beta/mgf' );
*
* var y = mgf( 0.5, 1.0, 1.0 );
* // returns ~1.297
*
* y = mgf( 0.5, 2.0, 4.0 );
* // returns ~1.186
*
* y = mgf( 3.0, 2.0, 2.0 );
* // returns ~5.575
*
* y = mgf( -0.8, 4.0, 4.0 );
* // returns ~0.676
*
* @example
* var factory = require( '@stdlib/stats/base/dists/beta/mgf' ).factory;
*
* var mgf = factory( 0.5, 0.5 );
*
* var y = mgf( 0.8 );
* // returns ~1.522
*
* y = mgf( 0.3 );
* // returns ~1.168
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var mgf = require( './mgf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( mgf, 'factory', factory );


// EXPORTS //

module.exports = mgf;
