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
* Create a function for performing a reduction on a provided ndarray.
*
* @module @stdlib/ndarray/base/unary-reduce-strided1d-dispatch-factory
*
* @example
* var base = require( '@stdlib/stats/base/ndarray/max' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var factory = require( '@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'same',
*     'casting': 'none'
* };
*
* var table = {
*     'default': base
* };
* var max = factory( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var y = max( x );
* // returns <ndarray>
*
* var v = y.get();
* // returns 2.0
*
* @example
* var base = require( '@stdlib/stats/base/ndarray/max' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var factory = require( '@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'same',
*     'casting': 'none'
* };
*
* var table = {
*     'default': base
* };
* var max = factory( table, [ idt ], odt, policies );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 0.0 ];
* var y = new ndarray( 'generic', ybuf, [], [ 0 ], 0, 'row-major' );
*
* var out = max.assign( x, y );
* // returns <ndarray>
*
* var v = out.get();
* // returns 2.0
*
* var bool = ( out === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
