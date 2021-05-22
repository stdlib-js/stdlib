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
* Round a complex number toward negative infinity.
*
* @module @stdlib/math/base/special/cfloor
*
* @example
* var cfloor = require( '@stdlib/math/base/special/cfloor' );
*
* var v = cfloor( -4.2, 5.5 );
* // returns [ -5.0, 5.0 ]
*
* v = cfloor( 9.99999, 0.1 );
* // returns [ 9.0, 0.0 ]
*
* v = cfloor( 0.0, 0.0 );
* // returns [ 0.0, 0.0 ]
*
* v = cfloor( NaN, NaN );
* // returns [ NaN, NaN ]
*
* @example
* var cfloor = require( '@stdlib/math/base/special/cfloor' );
*
* var out = new Array( 2 );
*
* var v = cfloor( out, -4.2, 5.5 );
* // returns [ -5.0, 5.0 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var cfloor = require( './main.js' );


// EXPORTS //

module.exports = cfloor;
