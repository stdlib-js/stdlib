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

/* eslint-disable no-underscore-dangle */

'use strict';

// MODULES //

var isNodeStreamLike = require( '@stdlib/assert/is-node-stream-like' );


// MAIN //

/**
* Tests if a value is Node readable stream-like.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is Node readable stream-like
*
* @example
* var transformStream = require( '@stdlib/streams/node/transform' );
*
* var stream = transformStream();
*
* var bool = isNodeReadableStreamLike( stream );
* // returns true
*
* bool = isNodeReadableStreamLike( {} );
* // returns false
*/
function isNodeReadableStreamLike( value ) {
	return (
		// Must be stream-like:
		isNodeStreamLike( value ) &&

		// Should have readable stream methods:
		typeof value._read === 'function' &&

		// Should have readable stream state:
		typeof value._readableState === 'object'
	);
}


// EXPORTS //

module.exports = isNodeReadableStreamLike;
