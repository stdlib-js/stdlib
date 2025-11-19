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
* Create a function for applying a strided function to a provided ndarray.
*
* @module @stdlib/ndarray/base/nullary-strided1d-dispatch-factory
*
* @example
* var base = require( '@stdlib/blas/ext/base/ndarray/gsorthp' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var factory = require( '@stdlib/ndarray/base/nullary-strided1d-dispatch-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'all' );
*
* var table = {
*     'default': base
* };
* var sorthp = factory( table, [ idt ], odt );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var order = scalar2ndarray( 1.0, {
*     'dtype': 'generic'
* });
*
* var out = sorthp( x, order );
* // returns <ndarray>
*
* var arr = ndarray2array( x );
* // returns [ -3.0, -1.0, 2.0 ]
*
* var bool = ( out === x );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
