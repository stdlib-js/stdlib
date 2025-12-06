/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Return a function which performs element-wise computation by applying a unary function to each element in an input ndarray.
*
* @module @stdlib/math/tools/unary
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
* var dispatch = require( '@stdlib/ndarray/dispatch' );
* var unary = require( '@stdlib/ndarray/base/unary' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
* var factory = require( '@stdlib/math/tools/unary' );
*
* var types = [
*     'float64', 'float64',
*     'float32', 'float32',
*     'generic', 'generic'
* ];
* var data = [
*     base,
*     base,
*     base
* ];
* var dispatcher = dispatch( unary, types, data, 2, 1, 1 );
*
* var idt = [ 'float64', 'float32', 'generic' ];
* var odt = idt;
*
* var policies = {
*     'output': 'real_and_generic',
*     'casting': 'none'
* };
* var abs = factory( dispatcher, [ idt ], odt, policies );
*
* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
* // returns <ndarray>
*
* var y = abs( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*/

// MAIN //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
