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

var RE_SUBSEQ = require( './re_subseq.js' );


// MAIN //

/**
* Tests if an indexing expression is a subsequence.
*
* @private
* @param {string} prop - property name
* @returns {boolean} result
*
* @example
* var out = isSubsequenceString( '::-2' );
* // returns true
*
* @example
* var out = isSubsequenceString( '10,1,::-1,:,-5,2::3' );
* // returns true
*
* @example
* var out = isSubsequenceString( '...' );
* // returns false
*
* @example
* var out = isSubsequenceString( '-2' );
* // returns false
*/
function isSubsequenceString( prop ) {
	// TODO: consider whether to make this check more robust (e.g., should we actually throw if someone tries to access `foo:bar`? If we make this check more exact, how would we distinguish between a non-existent `foo:bar` property and an actual error in the subsequence string?)
	return RE_SUBSEQ.test( prop );
}


// EXPORTS //

module.exports = isSubsequenceString;
