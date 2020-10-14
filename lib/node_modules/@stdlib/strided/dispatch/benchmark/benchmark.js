/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

// MODULES //

var bench = require( '@stdlib/bench' );
var isFunction = require( '@stdlib/assert/is-function' );
var unary = require( '@stdlib/strided/base/unary' );
var abs = require( '@stdlib/math/base/special/abs' );
var pkg = require( './../package.json' ).name;
var dispatch = require( './../lib' );


// MAIN //

bench( pkg+'::fcns_array', function benchmark( b ) {
	var types;
	var fcns;
	var data;
	var out;
	var i;

	fcns = [ unary ];
	types = [ 'float64', 'float64' ];
	data = [ abs ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = dispatch( fcns, types, data, 5, 1, 1 );
		if ( typeof out !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( out ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::fcn_arg', function benchmark( b ) {
	var types;
	var data;
	var out;
	var i;

	types = [ 'float64', 'float64' ];
	data = [ abs ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = dispatch( unary, types, data, 5, 1, 1 );
		if ( typeof out !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( out ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
