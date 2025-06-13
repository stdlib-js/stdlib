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
var instanceOf = require( '@stdlib/assert/instance-of' );
var randu = require( '@stdlib/random/base/randu' );
var pkg = require( './../package.json' ).name;
var CircularBuffer = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation,new,size', function benchmark( b ) {
	var buf;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf = new CircularBuffer( 3 );
		if ( typeof buf !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( buf, CircularBuffer ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new,buffer', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	arr = [ 0, 0, 0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf = new CircularBuffer( arr );
		if ( typeof buf !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( buf, CircularBuffer ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new,size', function benchmark( b ) {
	var circularBuffer;
	var buf;
	var i;

	circularBuffer = CircularBuffer;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf = circularBuffer( 3 );
		if ( typeof buf !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( buf, CircularBuffer ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new,buffer', function benchmark( b ) {
	var circularBuffer;
	var buf;
	var arr;
	var i;

	circularBuffer = CircularBuffer;

	arr = [ 0, 0, 0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf = circularBuffer( arr );
		if ( typeof buf !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( buf, CircularBuffer ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':count', function benchmark( b ) {
	var buf;
	var v;
	var i;

	buf = new CircularBuffer( 3 );
	buf.push( 1 );
	buf.push( 2 );
	buf.push( 3 );
	buf.push( 4 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf._count = i; // eslint-disable-line no-underscore-dangle
		v = buf.count;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':full', function benchmark( b ) {
	var bool;
	var buf;
	var i;

	buf = new CircularBuffer( 3 );
	buf.push( 1 );
	buf.push( 2 );
	buf.push( 3 );
	buf.push( 4 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf._count = i; // eslint-disable-line no-underscore-dangle
		bool = buf.full;
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( typeof bool !== 'boolean' ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':iterator', function benchmark( b ) {
	var iter;
	var buf;
	var i;

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		iter = buf.iterator();
		if ( typeof iter !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof iter !== 'object' || typeof iter.next !== 'function' ) {
		b.fail( 'should return an iterator protocol-compliant object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':length', function benchmark( b ) {
	var len;
	var buf;
	var i;

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf._length = i % 14; // eslint-disable-line no-underscore-dangle
		len = buf.length;
		if ( len < 0 ) {
			b.fail( 'should be a nonnegative integer' );
		}
	}
	b.toc();
	if ( len !== len ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':push', function benchmark( b ) {
	var buf;
	var v;
	var i;

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = buf.push( randu() );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toArray', function benchmark( b ) {
	var arr;
	var buf;
	var i;

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf._buffer[ 0 ] = randu(); // eslint-disable-line no-underscore-dangle
		arr = buf.toArray();
		if ( arr.length !== 3 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( arr.length !== 3 ) {
		b.fail( 'should have expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toJSON', function benchmark( b ) {
	var buf;
	var o;
	var i;

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		buf._buffer[ 0 ] = randu(); // eslint-disable-line no-underscore-dangle
		o = buf.toJSON();
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( o.data.length !== 3 ) {
		b.fail( 'should have expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
