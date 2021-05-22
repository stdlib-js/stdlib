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
* Return a complex number with the same magnitude as `z` and the sign of `y*z`.
*
* @module @stdlib/math/base/special/cflipsign
*
* @example
* var cflipsign = require( '@stdlib/math/base/special/cflipsign' );
*
* var v = cflipsign( -4.2, 5.5, 5 );
* // returns [ -4.2, 5.5 ]
*
* v = cflipsign( 0.0, 0.0, -99 );
* // returns [ -0.0, -0.0 ]
*
* v = cflipsign( NaN, NaN, 6 );
* // returns [ NaN, NaN ]
*
* @example
* var cflipsign = require( '@stdlib/math/base/special/cflipsign' );
*
* var out = new Array( 2 );
*
* var v = cflipsign( out, -4.2, 5.5, -7 );
* // returns [ 4.2, -5.5 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var cflipsign = require( './main.js' );


// EXPORTS //

module.exports = cflipsign;
