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

/**
* Create an ndarray function interface which performs multiple dispatch.
*
* @module @stdlib/ndarray/dispatch
*
* @example
* var dispatch = require( '@stdlib/ndarray/dispatch' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var unary = require( '@stdlib/ndarray/base/unary' );
* var abs = require( '@stdlib/math/base/special/abs' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var types = [
*     'float64', 'float64'
* ];
*
* var data = [
*     abs
* ];
*
* var absolute = dispatch( unary, types, data, 2, 1, 1 );
*
* // ...
*
* var xbuf = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var x = ndarray( 'float64', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
* var y = ndarray( 'float64', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* absolute( x, y );
* // ybuf => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/

// MODULES //

var dispatch = require( './main.js' );


// EXPORTS //

module.exports = dispatch;
