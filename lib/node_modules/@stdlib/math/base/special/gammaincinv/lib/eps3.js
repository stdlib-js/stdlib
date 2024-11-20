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
var rational1 = require( './rational_ak4bk4.js' );
var rational2 = require( './rational_ak5bk5.js' );
var rational3 = require( './rational_ak6bk6.js' );
var rational4 = require( './rational_ak7bk7.js' );
var rational5 = require( './rational_ak8bk8.js' );


// MAIN //

/**
* Evaluates the `eps3` function.
*
* @private
* @param {number} eta - eta value
* @returns {number} function value
*/
function eps3( eta ) {
	var x;
	var y;

	if ( eta < -8.0 ) {
		x = eta * eta;
		y = ln( -eta ) / eta;
		return ( -30.0 + ( eta*y*( (6.0*x*y*y)-12.0+x ) ) ) / ( 12.0*eta*x*x );
	}
	if ( eta < -4.0 ) {
		return rational1( eta ) / ( eta*eta );
	}
	if ( eta < -2.0 ) {
		return rational2( eta );
	}
	if ( eta < 2.0 ) {
		return rational3( eta );
	}
	if ( eta < 10.0 ) {
		x = 1.0 / eta;
		return rational4( x ) / ( eta*eta );
	}
	if ( eta < 100.0 ) {
		x = 1.0 / eta;
		return rational5( x ) / ( eta*eta );
	}
	return -ln( eta ) / ( 12.0*eta*eta*eta );
}


// EXPORTS //

module.exports = eps3;
