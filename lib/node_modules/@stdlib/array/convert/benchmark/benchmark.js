/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isCollection = require( '@stdlib/assert/is-collection' );
var pkg = require( './../package.json' ).name;
var convertArray = require( './../lib' );


// MAIN //

bench( pkg+':dtype=generic', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'generic' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=float64', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'float64' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=float32', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'float32' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=bool', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'bool' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=complex128', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'complex128' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=complex64', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'complex64' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=int32', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'int32' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=int16', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'int16' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=int8', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'int8' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint32', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'uint32' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint16', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'uint16' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint8', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'uint8' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint8c', function benchmark( b ) {
	var arr;
	var out;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] += 1;
		out = convertArray( arr, 'uint8c' );
		if ( out.length !== arr.length ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( !isCollection( out ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
