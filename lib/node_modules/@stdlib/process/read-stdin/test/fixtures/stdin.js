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

var Readable = require( 'stream' ).Readable;


// MAIN //

/**
* Readable stream.
*
* @private
* @constructor
* @returns {Stream} Stream instance
*/
function Stream() {
	if ( !(this instanceof Stream) ) {
		return new Stream();
	}
	Readable.call( this );
	this.isTTY = false;
	return this;
}

// Create a prototype which inherits from the parent prototype:
Stream.prototype = Object.create( Readable.prototype );

// Set the constructor:
Stream.prototype.constructor = Stream;

/**
* Implements the `_read` method.
*
* @private
*/
Stream.prototype._read = function _read() {
	// noop
};


// EXPORTS //

module.exports = Stream;
