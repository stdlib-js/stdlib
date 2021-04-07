/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var isDataView = require( '@stdlib/assert/is-dataview' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var GlobalDataView = require( './dataview.js' );


// MAIN //

/**
* Tests for native `DataView` support.
*
* @returns {boolean} boolean indicating if an environment has `DataView` support
*
* @example
* var bool = hasDataViewSupport();
* // returns <boolean>
*/
function hasDataViewSupport() {
	var bool;
	var view;
	var buf;

	if ( typeof GlobalDataView !== 'function' ) {
		return false;
	}
	// Test basic support...
	try {
		buf = new ArrayBuffer( 24 );
		view = new GlobalDataView( buf, 8 );
		bool = ( isDataView( view ) && typeof view.getFloat64 === 'function' && typeof view.setFloat64 === 'function' );
		if ( bool ) {
			view.setFloat64( 0, -3.14 );
			view.setFloat64( 8, NaN );
			bool = (
				bool &&
				view.buffer === buf &&
				view.byteLength === 16 &&
				view.byteOffset === 8 &&
				view.getFloat64( 0 ) === -3.14 &&
				view.getFloat64( 8 ) !== view.getFloat64( 8 )
			);
		}
	} catch ( err ) { // eslint-disable-line no-unused-vars
		bool = false;
	}
	return bool;
}


// EXPORTS //

module.exports = hasDataViewSupport;
