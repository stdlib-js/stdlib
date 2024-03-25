/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Evaluate a polynomial using single-precision floating-point arithmetic.
*
* @module @stdlib/math/base/tools/evalpolyf
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var evalpolyf = require( '@stdlib/math/base/tools/evalpolyf' );
*
* var v = evalpolyf( new Float32Array( [ 3.0, 2.0, 1.0 ] ), 10.0 ); // 3*10^0 + 2*10^1 + 1*10^2
* // returns 123.0
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var evalpolyf = require( '@stdlib/math/base/tools/evalpolyf' );
*
* var polyval = evalpolyf.factory( new Float32Array( [ 3.0, 2.0, 1.0 ] ) );
*
* var v = polyval( 10.0 ); // => 3*10^0 + 2*10^1 + 1*10^2
* // returns 123.0
*
* v = polyval( 5.0 ); // => 3*5^0 + 2*5^1 + 1*5^2
* // returns 38.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
