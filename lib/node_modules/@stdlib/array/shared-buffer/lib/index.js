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
* Constructor returning an object used to represent a generic, fixed-length raw binary data buffer which can be used to create views of shared memory.
*
* @module @stdlib/array/shared-buffer
*
* @example
* var ctor = require( '@stdlib/array/shared-buffer' );
*
* var buf;
* try {
*     buf = new ctor( 10 );
*     // returns <SharedArrayBuffer>
* } catch ( err ) {
*     console.log( 'Environment does not support SharedArrayBuffers.' );
* }
*/

// MODULES //

var hasSharedArrayBufferSupport = require( '@stdlib/assert/has-sharedarraybuffer-support' ); // eslint-disable-line id-length
var builtin = require( './sharedarraybuffer.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var ctor;
if ( hasSharedArrayBufferSupport() ) {
	ctor = builtin;
} else {
	ctor = polyfill;
}


// EXPORTS //

module.exports = ctor;
