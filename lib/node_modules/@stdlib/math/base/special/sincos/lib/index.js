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
* Simultaneously compute the sine and cosine of a number.
*
* @module @stdlib/math/base/special/sincos
*
* @example
* var sincos = require( '@stdlib/math/base/special/sincos' );
*
* var v = sincos( 0.0 );
* // returns [ ~0.0, ~1.0 ]
*
* v = sincos( 3.141592653589793/2.0 );
* // returns [ ~1.0, ~0.0 ]
*
* v = sincos( -3.141592653589793/6.0 );
* // returns [ ~-0.5, ~0.866 ]
*
* v = sincos( NaN );
* // returns [ NaN, NaN ]
*
* @example
* var sincos = require( '@stdlib/math/base/special/sincos' );
*
* var out = new Float64Array( 2 );
*
* var v = sincos( out, 0.0 );
* // return <Float64Array>[ ~0.0, ~1.0 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var sincos = require( './main.js' );


// EXPORTS //

module.exports = sincos;
