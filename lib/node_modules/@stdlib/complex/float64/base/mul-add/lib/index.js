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
* Perform a multiply-add operation involving three double-precision complex floating-point numbers.
*
* @module @stdlib/complex/float64/base/mul-add
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var muladd = require( '@stdlib/complex/float64/base/mul-add' );
*
* var z1 = new Complex128( 5.0, 3.0 );
* // returns <Complex128>
*
* var z2 = new Complex128( -2.0, 1.0 );
* // returns <Complex128>
*
* var z3 = new Complex128( 7.0, -8.0 );
* // returns <Complex128>
*
* var out = muladd( z1, z2, z3 );
* // returns <Complex128>
*
* var re = real( out );
* // returns -6.0
*
* var im = imag( out );
* // returns -9.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );
var strided = require( './strided.js' );


// MAIN //

setReadOnly( main, 'assign', assign );
setReadOnly( main, 'strided', strided );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign", "strided": "main.strided" }
