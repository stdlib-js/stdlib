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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' );
var randu = require( '@stdlib/random/base/randu' );
var avgMatrix = require( './avg_matrix.js' );


// MAIN //

/**
* Fit model using collapsed Gibbs sampling.
*
* @private
* @param {PositiveInteger} iter - number of sampling iterations
* @param {PositiveInteger} burnin - number of estimates to be thrown away at beginning
* @param {PositiveInteger} thin - number of discarded in-between iterations
* @throws {TypeError} first argument must be a positive integer
* @throws {TypeError} second argument must be a positive integer
* @throws {TypeError} third argument must be a positive integer
*/
function fit( iter, burnin, thin ) {
	/* eslint-disable no-invalid-this */
	var kalpha;
	var wbeta;
	var topic;
	var theta;
	var prob;
	var word;
	var phi;
	var len;
	var nt;
	var d;
	var i;
	var j;
	var u;
	var w;

	if ( !isPositiveInteger( iter ) ) {
		throw new TypeError( 'invalid argument. First argument must be a positive integer. Value: `' + iter + '`.' );
	}
	if ( !isPositiveInteger( burnin ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a positive integer. Value: `' + burnin + '`.' );
	}
	if ( !isPositiveInteger( thin ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a positive integer. Value: `' + thin + '`.' );
	}

	wbeta = this.W * this.beta;
	kalpha = this.K * this.alpha;

	for ( i = 0; i < iter; i++ ) {
		for ( d = 0; d < this.D; d++ ) {
			for ( w = 0; w < this.ndSum[ d ]; w++ ) {
				word = this.w[ d ][ w ];
				topic = this.z[ d ][ w ];

				this.nw.set( word, topic, this.nw.get( word, topic ) - 1 );
				this.nd.set( d, topic, this.nd.get( d, topic ) - 1 );
				this.ndSum[ d ] -= 1;
				this.nwSum[ topic ] -= 1;

				prob = [];
				for ( j = 0; j < this.K; j++ ) {
					prob.push( ( this.nw.get( word, j ) + this.beta ) /
						( this.nwSum[ j ] + wbeta ) *
						( this.nd.get( d, j ) + this.alpha ) /
						( this.ndSum[ d ] + kalpha ) );
				}
				for ( j = 1; j < this.K; j++ ) {
					prob[ j ] += prob[ j - 1 ];
				}
				u = prob[ this.K - 1 ] * randu();
				topic = 0;
				for ( nt = 0; nt < this.K; nt++ ) {
					if ( prob[ nt ] > u ) {
						topic = nt;
						break;
					}
				}
				// Assign new z_i to counts...
				this.nw.set( word, topic, this.nw.get( word, topic ) + 1 );
				this.nd.set( d, topic, this.nd.get( d, topic ) + 1 );
				this.nwSum[ topic ] += 1;
				this.ndSum[ d ] += 1;

				this.z[ d ][ w ] = topic;
			}
		}

		if ( i % thin === 0 && i > burnin ) {
			phi = this.getPhis();
			theta = this.getThetas();

			this.phiList.push( phi );
			this.thetaList.push( theta );

			len = this.phiList.length;
			if ( len === 1 ) {
				this.avgPhi = phi;
			} else {
				this.avgPhi = avgMatrix( this.avgPhi, phi, len );
			}
			len = this.thetaList.length;
			if ( len === 1 ) {
				this.avgTheta = theta;
			} else {
				this.avgTheta = avgMatrix( this.avgTheta, theta, len );
			}
		}
	}
}


// EXPORTS //

module.exports = fit;
