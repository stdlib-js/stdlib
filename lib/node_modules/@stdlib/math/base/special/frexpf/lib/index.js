/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Split a single-precision floating-point number into a normalized fraction and an integer power of two.
*
* @module @stdlib/math/base/special/frexpf
*
* @example
* var frexpf = require( '@stdlib/math/base/special/frexpf' );
*
* var out = frexpf( 4.0 );
* // returns [ 0.5, 3 ]
*
* out = frexpf( 0.0 );
* // returns [ 0.0, 0 ]
*
* out = frexpf( -0.0 );
* // returns [ -0.0, 0 ]
*
* out = frexpf( NaN );
* // returns [ NaN, 0 ]
*
* out = frexpf( Infinity );
* // returns [ Infinity , 0 ]
*
* out = frexpf( -Infinity );
* // returns [ -Infinity , 0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var frexpf = require( '@stdlib/math/base/special/frexpf' );
*
* var out = new Float32Array( 2 );
*
* var y = frexpf.assign( 4.0, out, 1, 0 );
* // returns <Float32Array>[ 0.5, 3 ]
*
* var bool = ( y === out );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
