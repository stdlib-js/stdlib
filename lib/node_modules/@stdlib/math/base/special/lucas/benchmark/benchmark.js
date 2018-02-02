/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PHI = require( '@stdlib/constants/math/float64-phi' );
var pkg = require( './../package.json' ).name;
var LUCAS = require( './../lib/lucas.json' );
var lucas = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*77.0 );
		y = lucas( x );
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

bench( pkg+'::analytic', function benchmark( b ) {
	var x;
	var y;
	var i;

	function lucas( n ) {
		return round( pow( PHI, n ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*77.0 );
		y = lucas( x );
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
		x = floor( randu()*77.0 );
		y = LUCAS[ x ];
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

	function lucas( n ) {
		if ( n === 0 ) {
			return 2;
		}
		if ( n === 1 ) {
			return 1;
		}
		return lucas( n-1 ) + lucas( n-2 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*40.0 ); // limit upper bound
		y = lucas( x );
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

	arr = new Array( 77 );
	arr[ 0 ] = 2;
	arr[ 1 ] = 1;
	N = 1;

	function lucas( n ) {
		if ( n <= N ) {
			return arr[ n ];
		}
		arr[ n ] = lucas( n-1 ) + lucas( n-2 );
		return arr[ n ];
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*40.0 ); // limit upper bound
		y = lucas( x );
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

	function lucas( n ) {
		var arr;
		var i;

		arr = new Array( n+1 );
		arr[ 0 ] = 2;
		arr[ 1 ] = 1;
		for ( i = 2; i <= n; i++ ) {
			arr[ i ] = arr[ i-1 ] + arr[ i-2 ];
		}
		return arr[ n ];
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*77.0 );
		y = lucas( x );
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

	function lucas( n ) {
		var a;
		var b;
		var c;
		var i;

		a = 2;
		if ( n === 0 ) {
			return a;
		}
		b = 1;
		for ( i = 2; i <= n; i++ ) {
			c = a + b;
			a = b;
			b = c;
		}
		return b;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*77.0 );
		y = lucas( x );
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

	arr = new Array( 77 );
	arr[ 0 ] = 2;
	arr[ 1 ] = 1;
	N = 1;

	function lucas( n ) {
		var i;
		if ( n > N ) {
			for ( i = N+1; i <= n; i++ ) {
				arr[ i ] = arr[ i-1 ] + arr[ i-2 ];
			}
			N = n;
		}
		return arr[ n ];
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu()*77.0 );
		y = lucas( x );
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
