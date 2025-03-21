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

var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var Float64Array = require( '@stdlib/array/float64' );
var GlobalArrayBuffer = require( './arraybuffer.js' );


// MAIN //

/**
* Tests for native `ArrayBuffer` support.
*
* @returns {boolean} boolean indicating if an environment has `ArrayBuffer` support
*
* @example
* var bool = hasArrayBufferSupport();
* // returns <boolean>
*/
function hasArrayBufferSupport() {
	var bool;
	var view;
	var buf;

	if ( typeof GlobalArrayBuffer !== 'function' ) {
		return false;
	}
	// Test basic support...
	try {
		buf = new GlobalArrayBuffer( 16 );
		bool = ( isArrayBuffer( buf ) && typeof GlobalArrayBuffer.isView === 'function' );
		if ( bool ) {
			view = new Float64Array( buf );
			view[ 0 ] = -3.14;
			view[ 1 ] = NaN;
			bool = (
				bool &&
				GlobalArrayBuffer.isView( view ) &&
				buf.byteLength === 16 &&
				view[ 0 ] === -3.14 &&
				view[ 1 ] !== view[ 1 ]
			);
		}
	} catch ( err ) { // eslint-disable-line no-unused-vars
		bool = false;
	}
	return bool;
}


// EXPORTS //

module.exports = hasArrayBufferSupport;
