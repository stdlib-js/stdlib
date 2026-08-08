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
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var convertArray = require( './../lib' );


// MAIN //

bench( format( '%s:dtype=generic', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=float64', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=float32', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=bool', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=complex128', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=complex64', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=int32', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=int16', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=int8', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=uint32', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=uint16', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=uint8', pkg ), function benchmark( b ) {
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

bench( format( '%s:dtype=uint8c', pkg ), function benchmark( b ) {
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
