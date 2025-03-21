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
* Return a function which dispatches to specified functions based on input argument types.
*
* @module @stdlib/math/tools/unary
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
* var strided = require( '@stdlib/math/strided/special/abs' );
* var dispatcher = require( '@stdlib/ndarray/dispatch' );
* var unary = require( '@stdlib/ndarray/base/unary' );
* var Float64Array = require( '@stdlib/array/float64' );
* var dispatch = require( '@stdlib/math/tools/unary' );
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
* var nd = dispatcher( unary, types, data, 2, 1, 1 );
*
* var table = {
*     'number': base,
*     'complex': null,
*     'array': strided,
*     'ndarray': nd
* };
*
* var abs = dispatch( table );
*
* var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
* var y = abs( x );
* // returns <Float64Array>[ 1.0, 2.0, 3.0 ]
*/

// MAIN //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
