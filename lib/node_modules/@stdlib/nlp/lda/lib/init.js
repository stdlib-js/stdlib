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

var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );


// MAIN //

/**
* Randomly assign topics to words and keep track of the counts.
*
* @private
*/
function init() {
	/* eslint-disable no-invalid-this */
	var topic;
	var newz;
	var len;
	var wt;
	var d;
	var i;

	this.z = [];
	for ( d = 0; d < this.D; d++ ) {
		this.z.push( [] );
		len = this.w[ d ].length;

		// Initialize random topics...
		for ( i = 0; i < len; i++ ) {
			newz = floor( randu() * this.K );
			this.z[ d ].push( newz );
		}
		this.ndSum[ d ] = len;
		for ( i = 0; i < len; i++ ) {
			wt = this.w[ d ][ i ];
			topic = this.z[ d ][ i ];

			// Number of instances of word i assigned to topic j:
			this.nw.set( wt, topic, this.nw.get( wt, topic ) + 1 );

			// Number of words in document i assigned to topic j:
			this.nd.set( d, topic, this.nd.get( d, topic ) + 1 );

			// Total number of words assigned to topic j:
			this.nwSum[ topic ] = this.nwSum[ topic ] + 1;
		}
	}
}


// EXPORTS //

module.exports = init;
