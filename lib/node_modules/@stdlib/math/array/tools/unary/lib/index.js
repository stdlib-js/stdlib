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
* Constructor for applying a unary function to each element in an input array.
*
* @module @stdlib/math/array/tools/unary
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
* var dtypes = require( '@stdlib/array/dtypes' );
* var Unary = require( '@stdlib/math/array/tools/unary' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policy = 'same';
*
* var abs = new Unary( base, idt, odt, policy );
*
* var x = [ -1.0, -2.0, -3.0 ];
*
* var y = abs.apply( x );
* // returns [ 1.0, 2.0, 3.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
