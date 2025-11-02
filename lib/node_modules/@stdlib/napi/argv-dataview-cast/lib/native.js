/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Wrapper function exposing the C API to JavaScript.
*
* @private
* @param {DataView} x - first input DataView
* @param {DataView} y - second input DataView
* @returns {DataView} second input DataView
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var DataView = require( '@stdlib/array/dataview' );
*
* var xbuf = new Float64Array( [ 1.0, 2.0 ] );
* var x = new DataView( xbuf.buffer );
*
* var ybuf = new Float64Array( [ 3.0, 4.0 ] );
* var y = new DataView( ybuf.buffer );
*
* var out = wrapper( x, y );
* // returns <DataView>
*
* var z = new Float64Array( y.buffer );
* // returns <Float64Array>[ 4.0, 6.0 ]
*/
function wrapper( x, y ) {
	addon( x, y );
	return y;
}


// EXPORTS //

module.exports = wrapper;
