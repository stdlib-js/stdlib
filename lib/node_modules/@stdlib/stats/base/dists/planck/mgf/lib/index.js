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
* Evaluate the moment-generating function (MGF) for a Planck distribution.
*
* @module @stdlib/stats/base/dists/planck/mgf
*
* @example
* var mgf = require( '@stdlib/stats/base/dists/planck/mgf' );
*
* var y = mgf( 0.2, 0.5 );
* // returns ~1.5181
*
* y = mgf( 0.4, 1.5 );
* // returns ~1.1645
*
* var mymgf = mgf.factory( 0.8 );
* y = mymgf( -0.2 );
* // returns ~0.8711
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
