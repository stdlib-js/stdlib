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
var FIFO = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation,new', function benchmark( b ) {
	var q;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		q = new FIFO();
		if ( typeof q !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( q, FIFO ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new', function benchmark( b ) {
	var fifo;
	var q;
	var i;

	fifo = FIFO;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		q = fifo();
		if ( typeof q !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( q, FIFO ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':first', function benchmark( b ) {
	var v;
	var q;
	var i;

	q = new FIFO();
	q.push( 1 );
	q.push( 2 );
	q.push( 3 );
	q.push( 4 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		q._first.value = randu(); // eslint-disable-line no-underscore-dangle
		v = q.first();
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

bench( pkg+':iterator', function benchmark( b ) {
	var iter;
	var q;
	var i;

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		iter = q.iterator();
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

bench( pkg+':last', function benchmark( b ) {
	var v;
	var q;
	var i;

	q = new FIFO();
	q.push( 1 );
	q.push( 2 );
	q.push( 3 );
	q.push( 4 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		q._last.value = randu(); // eslint-disable-line no-underscore-dangle
		v = q.last();
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

bench( pkg+':length', function benchmark( b ) {
	var len;
	var q;
	var i;

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		q._length = i % 14; // eslint-disable-line no-underscore-dangle
		len = q.length;
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

bench( pkg+':push,pop', function benchmark( b ) {
	var v;
	var q;
	var i;

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		q.push( randu() );
		v = q.pop();
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
	var q;
	var i;

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		q._first.value = randu(); // eslint-disable-line no-underscore-dangle
		arr = q.toArray();
		if ( arr.length !== 4 ) {
			b.fail( 'should have expected length' );
		}
	}
	b.toc();
	if ( arr.length !== 4 ) {
		b.fail( 'should have expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toJSON', function benchmark( b ) {
	var o;
	var q;
	var i;

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		q._first.value = randu(); // eslint-disable-line no-underscore-dangle
		o = q.toJSON();
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( o.data.length !== 4 ) {
		b.fail( 'should have expected length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
