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
* Evaluate the moment-generating function (MGF) for an Erlang distribution.
*
* @module @stdlib/stats/base/dists/erlang/mgf
*
* @example
* var mgf = require( '@stdlib/stats/base/dists/erlang/mgf' );
*
* var y = mgf( 0.3, 1, 1.0 );
* // returns ~1.429
*
* var myMGF = mgf.factory( 2, 0.5 );
*
* y = myMGF( 0.2 );
* // returns ~2.778
*
* y = myMGF( -0.5 );
* // returns 0.25
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var mgf = require( './mgf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( mgf, 'factory', factory );


// EXPORTS //

module.exports = mgf;
