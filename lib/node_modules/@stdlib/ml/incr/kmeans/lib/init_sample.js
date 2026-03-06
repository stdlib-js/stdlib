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

var factory = require( '@stdlib/random/sample' ).factory;
var dcopy = require( '@stdlib/blas/base/dcopy' ).ndarray;


// MAIN //

/**
* Initializes centroids by randomly sampling from a data buffer.
*
* @private
* @param {ndarray} out - output centroids `kxd` matrix
* @param {ndarray} buffer - buffer from which to sample
* @param {*} seed - PRNG seed
* @returns {ndarray} centroids
*/
function sample( out, buffer, seed ) {
	var rand;
	var inds;
	var obuf;
	var buf;
	var sb1;
	var sb2;
	var so2;
	var oo;
	var s;
	var M;
	var N;
	var i;

	M = out.shape[ 0 ];
	N = out.shape[ 1 ];

	obuf = out.data;
	so2 = out.strides[ 1 ];
	oo = out.offset;

	buf = buffer.data;
	sb1 = buffer.strides[ 0 ];
	sb2 = buffer.strides[ 1 ];

	// Generate an array of data vector indices...
	inds = [];
	for ( i = 0; i < buffer.shape[ 0 ]; i++ ) {
		inds.push( i );
	}
	// Only randomly sample from the data buffer if the number of centroids is not equal to the number of data vectors...
	if ( M === inds.length ) {
		// Buffer already qualifies as a "random" sample:
		s = inds;
	} else {
		// Create a seeded random sampler (without replacement):
		rand = factory({
			'seed': seed,
			'size': M,
			'mutate': false,
			'replacement': false
		});

		// Generate a random sample:
		s = rand( inds );
	}
	// Update the centroids...
	for ( i = 0; i < M; i++ ) {
		// Note: the following is likely to be an "out-of-order" copy...
		dcopy( N, buf, sb2, sb1*s[i], obuf, so2, oo );
	}
	return out;
}


// EXPORTS //

module.exports = sample;
