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
* Constructor which returns an object used to represent a generic, fixed-length raw binary data buffer.
*
* @module @stdlib/array/buffer
*
* @example
* var ctor = require( '@stdlib/array/buffer' );
*
* var buf = new ctor( 10 );
* // returns <ArrayBuffer>
*/

// MODULES //

var hasArrayBufferSupport = require( '@stdlib/assert/has-arraybuffer-support' );
var builtin = require( './arraybuffer.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var ctor;
if ( hasArrayBufferSupport() ) {
	ctor = builtin;
} else {
	ctor = polyfill;
}


// EXPORTS //

module.exports = ctor;
