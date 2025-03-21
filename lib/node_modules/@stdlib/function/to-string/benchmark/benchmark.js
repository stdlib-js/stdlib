/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var pkg = require( './../package.json' ).name;
var function2string = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var fcns;
	var v;
	var i;

	fcns = [
		add,
		multiply
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = function2string( fcns[ i%fcns.length ] );
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof v !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function add( x, y ) {
		return x + y;
	}

	function multiply( x, y ) {
		return x * y;
	}
});
