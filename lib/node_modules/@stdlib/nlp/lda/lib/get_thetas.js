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
* Get theta matrix. Its rows correspond to document distributions over topics.
*
* @private
* @returns {Matrix} theta parameter matrix
*/
function getThetas() {
	/* eslint-disable no-invalid-this */
	var Theta;
	var val;
	var d;
	var k;

	Theta = matrix( [ this.D, this.K ] );
	for ( d = 0; d < this.D; d++ ) {
		for ( k = 0; k < this.K; k++ ) {
			val = ( this.nd.get( d, k ) + this.alpha ) /
				( this.ndSum[ d ] + ( this.K*this.alpha ) );
			Theta.set( d, k, val );
		}
	}
	return Theta;
}


// EXPORTS //

module.exports = getThetas;
