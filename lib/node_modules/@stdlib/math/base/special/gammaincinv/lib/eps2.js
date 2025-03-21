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

// MODULES //

var ln = require( '@stdlib/math/base/special/ln' );
var rateval1 = require( './rational_ak1bk1.js' );
var rateval2 = require( './rational_ak2bk2.js' );
var rateval3 = require( './rational_ak3bk3.js' );


// MAIN //

/**
* Evaluates the `eps2` function.
*
* @private
* @param {number} eta - eta value
* @returns {number} function value
*/
function eps2( eta ) {
	var lnmeta;
	var x;
	if ( eta < -5.0 ) {
		x = eta * eta;
		lnmeta = ln( -eta );
		return ( 12.0 - x - ( 6.0*( lnmeta*lnmeta ) ) ) / ( 12.0*x*eta );
	}
	if ( eta < -2.0 ) {
		return rateval1( eta );
	}
	if ( eta < 2.0 ) {
		return rateval2( eta );
	}
	if ( eta < 1000.0 ) {
		x = 1.0 / eta;
		return rateval3( eta ) / ( -12.0*eta );
	}
	return -1.0 / ( 12.0 * eta );
}


// EXPORTS //

module.exports = eps2;
