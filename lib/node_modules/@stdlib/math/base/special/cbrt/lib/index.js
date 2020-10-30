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
* Compute the cube root of a double-precision floating-point number.
*
* @module @stdlib/math/base/special/cbrt
*
* @example
* var cbrt = require( '@stdlib/math/base/special/cbrt' );
*
* var v = cbrt( 64.0 );
* // returns 4.0
*
* v = cbrt( 27.0 );
* // returns 3.0
*
* v = cbrt( 0.0 );
* // returns 0.0
*
* v = cbrt( -0.0 );
* // returns -0.0
*
* v = cbrt( -9.0 );
* // returns ~-2.08
*
* v = cbrt( NaN );
* // returns NaN
*/

// MODULES //

var cbrt = require( './main.js' );


// EXPORTS //

module.exports = cbrt;
