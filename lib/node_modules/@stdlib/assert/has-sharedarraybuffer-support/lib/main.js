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

var isSharedArrayBuffer = require( '@stdlib/assert/is-sharedarraybuffer' );
var GlobalSharedArrayBuffer = require( './sharedarraybuffer.js' );


// MAIN //

/**
* Tests for native `SharedArrayBuffer` support.
*
* @returns {boolean} boolean indicating if an environment has `SharedArrayBuffer` support
*
* @example
* var bool = hasSharedArrayBufferSupport();
* // returns <boolean>
*/
function hasSharedArrayBufferSupport() { // eslint-disable-line id-length
	var bool;
	var b1;
	var b2;

	if ( typeof GlobalSharedArrayBuffer !== 'function' ) {
		return false;
	}
	// Test basic support...
	try {
		b1 = new GlobalSharedArrayBuffer( 16 );
		b2 = b1.slice( 4, 8 );
		bool = (
			isSharedArrayBuffer( b1 ) &&
			isSharedArrayBuffer( b2 ) &&
			b1.byteLength === 16 &&
			b2.byteLength === 4
		);
	} catch ( err ) { // eslint-disable-line no-unused-vars
		bool = false;
	}
	return bool;
}


// EXPORTS //

module.exports = hasSharedArrayBufferSupport;
