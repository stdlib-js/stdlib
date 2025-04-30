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
* Returns an index object associated with a specified identifier.
*
* @private
* @param {*} id - identifier
* @returns {(Node|null)} index object
*/
function find( id ) { // eslint-disable-line stdlib/no-redeclare
	var node = cache.first();
	while ( node ) {
		if ( node.value.id === id ) {
			return node;
		}
		node = node.next;
	}
	return null;
}


// EXPORTS //

module.exports = find;
