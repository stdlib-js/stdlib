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
* Round a complex number to the nearest multiple of `10^n` toward positive infinity.
*
* @module @stdlib/math/base/special/cceiln
*
* @example
* var cceiln = require( '@stdlib/math/base/special/cceiln' );
*
* // Round components to 2 decimal places:
* var v = cceiln( -3.141592653589793, 3.141592653589793, -2 );
* // returns [ -3.14, 3.15 ]
*
* // If n = 0, `cceiln` behaves like `cceil`:
* v = cceiln( 9.99999, 0.1, 0 );
* // returns [ 10.0, 1.0 ]
*
* // Round components to the nearest thousand:
* v = cceiln( 12368.0, -12368.0, 3 );
* // returns [ 13000.0, -12000.0 ]
*
* v = cceiln( NaN, NaN, 2 );
* // returns [ NaN, NaN ]
*
* @example
* var cceiln = require( '@stdlib/math/base/special/cceiln' );
*
* var out = [ 0.0, 0.0 ];
*
* var v = cceiln( out, -3.141592653589793, 3.141592653589793, -2 );
* // returns [ -3.14, 3.15 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var cceiln = require( './main.js' );


// EXPORTS //

module.exports = cceiln;
