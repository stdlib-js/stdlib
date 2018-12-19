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

/**
* Test if a value is Node duplex stream-like.
*
* @module @stdlib/assert/is-node-duplex-stream-like
*
* @example
* var transformStream = require( '@stdlib/streams/node/transform' );
* var isNodeDuplexStreamLike = require( '@stdlib/assert/is-node-duplex-stream-like' );
*
* var stream = transformStream();
*
* var bool = isNodeDuplexStreamLike( stream );
* // returns true
*
* bool = isNodeDuplexStreamLike( {} );
* // returns false
*/

// MODULES //

var isNodeDuplexStreamLike = require( './main.js' );


// EXPORTS //

module.exports = isNodeDuplexStreamLike;
