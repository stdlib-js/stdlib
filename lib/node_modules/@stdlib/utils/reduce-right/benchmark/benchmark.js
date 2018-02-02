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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var reduceRight = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var len;
	var o;
	var i;

	function sum( acc, v ) {
		return acc + v;
	}

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 10;
		o = reduceRight( arr, 0, sum );
		if ( isnan( o ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( o ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', function benchmark( b ) {
	var arr;
	var len;
	var o;
	var i;

	function sum( acc, v ) {
		return acc + v;
	}

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 10;
		o = arr.reduceRight( sum, 0 );
		if ( isnan( o ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( o ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::loop', function benchmark( b ) {
	var arr;
	var len;
	var o;
	var i;
	var j;

	function sum( acc, v ) {
		return acc + v;
	}

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 10;
		o = 0;
		for ( j = arr.length-1; j >= 0; j-- ) {
			o = sum( o, arr[ j ], j, arr );
		}
		if ( isnan( o ) ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( isnan( o ) ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::loop,inlined', function benchmark( b ) {
	var arr;
	var len;
	var o;
	var i;
	var j;

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 10;
		o = 0;
		for ( j = arr.length-1; j >= 0; j-- ) {
			o += arr[ j ];
		}
		if ( isnan( o ) ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( isnan( o ) ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::this_context', function benchmark( b ) {
	var arr;
	var len;
	var o;
	var i;

	function sum( acc, v ) {
		return acc + v;
	}

	arr = new Array( 100 );
	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 10;
		o = reduceRight( arr, 0, sum, {} );
		if ( isnan( o ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( o ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
