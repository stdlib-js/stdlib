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
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var TRIBONACCI = require( './../lib/tribonacci.json' );
var tribonacci = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*64.0 );
		y = tribonacci( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::table', function benchmark( b ) {
	var x;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*64.0 );
		y = TRIBONACCI[ x ];
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::naive_recursion', function benchmark( b ) {
	var x;
	var y;
	var i;

	function tribonacci( n ) {
		if ( n < 2 ) {
			return 0;
		}
		if ( n === 2 ) {
			return 1;
		}
		return tribonacci( n-1 ) + tribonacci( n-2 ) + tribonacci( n-3 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*10.0 ); // limit upper bound
		y = tribonacci( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::recursion_memoized', function benchmark( b ) {
	var arr;
	var N;
	var x;
	var y;
	var i;

	arr = new Array( 64 );
	arr[ 0 ] = 0;
	arr[ 1 ] = 0;
	arr[ 2 ] = 1;
	N = 2;

	function tribonacci( n ) {
		if ( n <= N ) {
			return arr[ n ];
		}
		arr[ n ] = tribonacci( n-1 ) + tribonacci( n-2 ) + tribonacci( n-3 );
		return arr[ n ];
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*10.0 ); // limit upper bound
		y = tribonacci( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::naive_iterative', function benchmark( b ) {
	var x;
	var y;
	var i;

	function tribonacci( n ) {
		var arr;
		var i;

		arr = new Array( n+1 );
		arr[ 0 ] = 0;
		arr[ 1 ] = 0;
		arr[ 2 ] = 1;
		for ( i = 3; i <= n; i++ ) {
			arr[ i ] = arr[ i-1 ] + arr[ i-2 ] + arr[ i-3 ];
		}
		return arr[ n ];
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*64.0 );
		y = tribonacci( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iterative', function benchmark( b ) {
	var x;
	var y;
	var i;

	function tribonacci( n ) {
		var a;
		var b;
		var c;
		var d;
		var i;

		a = 0;
		b = 0;
		c = 1;
		for ( i = 4; i <= n; i++ ) {
			d = a + b + c;
			a = b;
			b = c;
			c = d;
		}
		return c;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*64.0 );
		y = tribonacci( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iterative_memoized', function benchmark( b ) {
	var arr;
	var N;
	var x;
	var y;
	var i;

	arr = new Array( 64 );
	arr[ 0 ] = 0;
	arr[ 1 ] = 0;
	arr[ 2 ] = 1;
	N = 2;

	function tribonacci( n ) {
		var i;
		if ( n > N ) {
			for ( i = N+1; i <= n; i++ ) {
				arr[ i ] = arr[ i-1 ] + arr[ i-2 ] + arr[ i-3 ];
			}
			N = n;
		}
		return arr[ n ];
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*64.0 );
		y = tribonacci( x );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
