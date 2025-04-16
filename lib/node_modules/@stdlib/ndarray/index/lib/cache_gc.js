/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var cache = require( './cache.js' );


// MAIN //

/**
* Performs garbage collection on the index cache.
*
* @private
* @returns {Object} garbage collection results
*/
function gc() {
	var node;
	var N;
	var M;
	var v;

	node = cache.first();
	N = cache.length;
	while ( node ) {
		v = node.value;
		if ( !v.persist ) {
			cache.remove( node );
		}
		node = node.next;
	}
	M = cache.length;
	return {
		'size': M,
		'removed': N - M
	};
}


// EXPORTS //

module.exports = gc;
