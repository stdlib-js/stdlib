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

var stream = require( 'stream' );
var transformStream = require( '@stdlib/streams/node/transform' );
var isNodeDuplexStreamLike = require( './../lib' );

var bool = isNodeDuplexStreamLike( new stream.Duplex() );
console.log( bool );
// => true

bool = isNodeDuplexStreamLike( new stream.Transform() );
console.log( bool );
// => true

bool = isNodeDuplexStreamLike( transformStream() );
console.log( bool );
// => true

bool = isNodeDuplexStreamLike( new stream.Writable() );
console.log( bool );
// => false

bool = isNodeDuplexStreamLike( new stream.Readable() );
console.log( bool );
// => false

bool = isNodeDuplexStreamLike( new stream.Stream() );
console.log( bool );
// => false

bool = isNodeDuplexStreamLike( {} );
console.log( bool );
// => false

bool = isNodeDuplexStreamLike( [] );
console.log( bool );
// => false

bool = isNodeDuplexStreamLike( null );
console.log( bool );
// => false

function Stream() {
	return this;
}

bool = isNodeDuplexStreamLike( Stream );
console.log( bool );
// => false

bool = isNodeDuplexStreamLike( new Stream() );
console.log( bool );
// => false
