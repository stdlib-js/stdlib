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
* Round a complex number to the nearest multiple of `10^n` toward negative infinity.
*
* @module @stdlib/math/base/special/cfloorn
*
* @example
* var cfloorn = require( '@stdlib/math/base/special/cfloorn' );
*
* // Round components to 2 decimal places:
* var v = cfloorn( -3.141592653589793, 3.141592653589793, -2 );
* // returns [ -3.15, 3.14 ]
*
* // If n = 0, `cfloorn` behaves like `cfloor`:
* v = cfloorn( 9.99999, 0.1, 0 );
* // returns [ 9.0, 0.0 ]
*
* // Round components to the nearest thousand:
* v = cfloorn( 12368.0, -12368.0, 3 );
* // returns [ 12000.0, -13000.0 ]
*
* v = cfloorn( NaN, NaN, 2 );
* // returns [ NaN, NaN ]
*
* @example
* var cfloorn = require( '@stdlib/math/base/special/cfloorn' );
*
* var out = new Array( 2 );
*
* var v = cfloorn( out, -3.141592653589793, 3.141592653589793, -2 );
* // returns [ -3.15, 3.14 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var cfloorn = require( './main.js' );


// EXPORTS //

module.exports = cfloorn;
