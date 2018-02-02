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
* Split a double-precision floating-point number into a normalized fraction and an integer power of two.
*
* @module @stdlib/math/base/special/frexp
*
* @example
* var frexp = require( '@stdlib/math/base/special/frexp' );
*
* var out = frexp( 4.0 );
* // returns [ 0.5, 3 ]
*
* out = frexp( 0.0 );
* // returns [ 0.0, 0 ]
*
* out = frexp( -0.0 );
* // returns [ -0.0, 0 ]
*
* out = frexp( NaN );
* // returns [ NaN, 0 ]
*
* out = frexp( Infinity );
* // returns [ Infinity , 0 ]
*
* out = frexp( -Infinity );
* // returns [ -Infinity , 0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var frexp = require( '@stdlib/math/base/special/frexp' );
*
* var out = new Float64Array( 2 );
*
* var y = frexp( out, 4.0 );
* // returns <Float64Array>[ 0.5, 3 ]
*
* var bool = ( y === out );
* // returns true
*/

// MODULES //

var frexp = require( './main.js' );


// EXPORTS //

module.exports = frexp;
