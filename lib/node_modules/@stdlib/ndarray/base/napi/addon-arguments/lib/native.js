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

var serialize = require( '@stdlib/ndarray/base/serialize-meta-data' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Wrapper function exposing the C API to JavaScript.
*
* @private
* @param {ndarray} x - input array
* @param {ndarray} y - destination array
* @returns {ndarray} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var xbuf = new Float64Array( 10 );
* var ybuf = new Float64Array( xbuf.length );
*
* var x = ndarray( 'float64', xbuf, [ 10 ], [ 1 ], 0, 'row-major' );
* var y = ndarray( 'float64', ybuf, [ 10 ], [ 1 ], 0, 'row-major' );
*
* wrapper( x, y );
*/
function wrapper( x, y ) {
	addon( x.data, serialize( x ), y.data, serialize( y ) );
	return y;
}


// EXPORTS //

module.exports = wrapper;
