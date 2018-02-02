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
* Return a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
*
* @module @stdlib/number/float32/base/normalize
*
* @example
* var pow = require( '@stdlib/math/base/special/pow' );
* var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
* var normalizef = require( '@stdlib/number/float32/base/normalize' );
*
* var out = normalizef( toFloat32( 1.401e-45 ) );
* // returns [ 1.1754943508222875e-38, -23 ]
*
* var y = out[ 0 ];
* var exp = out[ 1 ];
*
* var bool = ( y*pow(2,exp) === toFloat32(1.401e-45) );
* // returns true
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
* var normalizef = require( '@stdlib/number/float32/base/normalize' );
*
* var out = new Float32Array( 2 );
*
* var v = normalizef( out, toFloat32( 1.401e-45 ) );
* // returns <Float32Array>[ 1.1754943508222875e-38, -23.0 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var normalizef = require( './main.js' );


// EXPORTS //

module.exports = normalizef;
