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
* Create a function for performing a reduction on two input ndarrays.
*
* @module @stdlib/ndarray/base/binary-reduce-strided1d-dispatch-factory
*
* @example
* var base = require( '@stdlib/blas/base/ndarray/gdot' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var factory = require( '@stdlib/ndarray/base/binary-reduce-strided1d-dispatch-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'promoted',
*     'casting': 'promoted'
* };
*
* var table = {
*     'default': base
* };
* var dot = factory( table, [ idt, idt ], odt, policies );
*
* var xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
* var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
*
* var z = dot( x, y );
* // returns <ndarray>
*
* var v = z.get();
* // returns -5.0
*
* @example
* var base = require( '@stdlib/blas/base/ndarray/gdot' );
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var factory = require( '@stdlib/ndarray/base/binary-reduce-strided1d-dispatch-factory' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'promoted',
*     'casting': 'promoted'
* };
*
* var table = {
*     'default': base
* };
* var dot = factory( table, [ idt, idt ], odt, policies );
*
* var xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
* var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
*
* var zbuf = [ 0.0 ];
* var z = new ndarray( 'generic', zbuf, [], [ 0 ], 0, 'row-major' );
*
* var out = dot.assign( x, y, z );
* // returns <ndarray>
*
* var v = out.get();
* // returns -5.0
*
* var bool = ( out === z );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
