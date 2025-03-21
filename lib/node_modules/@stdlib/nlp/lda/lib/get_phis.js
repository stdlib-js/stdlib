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

var matrix = require( './matrix.js' );


// MAIN //

/**
* Get the phi matrix. Each row is a topic distribution over words.
*
* @private
* @returns {Matrix} phi parameter matrix
*/
function getPhis() {
	/* eslint-disable no-invalid-this */
	var Phi;
	var val;
	var k;
	var w;

	Phi = matrix( [ this.K, this.W ] );
	for ( k = 0; k < this.K; k++ ) {
		for ( w = 0; w < this.W; w++ ) {
			val = ( this.nw.get( w, k ) + this.beta ) /
				( this.nwSum[ k ] + ( this.W*this.beta ) );
			Phi.set( k, w, val );
		}
	}
	return Phi;
}


// EXPORTS //

module.exports = getPhis;
