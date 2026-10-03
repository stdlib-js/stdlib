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
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var LinkedList = require( './../lib' );


// MAIN //

bench( format( '%s::instantiation,new', pkg ), function benchmark( b ) {
	var list;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list = new LinkedList();
		if ( typeof list !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( list, LinkedList ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::instantiation,no_new', pkg ), function benchmark( b ) {
	var linkedList;
	var list;
	var i;

	linkedList = LinkedList;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list = linkedList();
		if ( typeof list !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( list, LinkedList ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:first', pkg ), function benchmark( b ) {
	var list;
	var v;
	var i;

	list = new LinkedList();
	list.push( 1 );
	list.push( 2 );
	list.push( 3 );
	list.push( 4 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list._first.value = randu(); // eslint-disable-line no-underscore-dangle
		v = list.first().value;
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

bench( format( '%s:insert,pop', pkg ), function benchmark( b ) {
	var list;
	var n;
	var v;
	var i;

	list = new LinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	n = list.first().next.next; // third node

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list.insert( n, randu() );
		v = list.pop();
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

bench( format( '%s:iterator', pkg ), function benchmark( b ) {
	var iter;
	var list;
	var i;

	list = new LinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		iter = list.iterator();
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

bench( format( '%s:last', pkg ), function benchmark( b ) {
	var list;
	var v;
	var i;

	list = new LinkedList();
	list.push( 1 );
	list.push( 2 );
	list.push( 3 );
	list.push( 4 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list._last.value = randu(); // eslint-disable-line no-underscore-dangle
		v = list.last().value;
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

bench( format( '%s:length', pkg ), function benchmark( b ) {
	var list;
	var len;
	var i;

	list = new LinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list._length = i % 14; // eslint-disable-line no-underscore-dangle
		len = list.length;
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

bench( format( '%s:push,pop', pkg ), function benchmark( b ) {
	var list;
	var v;
	var i;

	list = new LinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list.push( randu() );
		v = list.pop();
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

bench( format( '%s:push,remove', pkg ), function benchmark( b ) {
	var list;
	var v;
	var i;

	list = new LinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list.push( randu() );
		v = list.remove( list._first._next ); // eslint-disable-line no-underscore-dangle
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

bench( format( '%s:push,shift', pkg ), function benchmark( b ) {
	var list;
	var v;
	var i;

	list = new LinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list.push( randu() );
		v = list.shift();
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

bench( format( '%s:toArray', pkg ), function benchmark( b ) {
	var list;
	var arr;
	var i;

	list = new LinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list._first.value = randu(); // eslint-disable-line no-underscore-dangle
		arr = list.toArray();
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

bench( format( '%s:toJSON', pkg ), function benchmark( b ) {
	var list;
	var o;
	var i;

	list = new LinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list._first.value = randu(); // eslint-disable-line no-underscore-dangle
		o = list.toJSON();
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

bench( format( '%s:unshift,pop', pkg ), function benchmark( b ) {
	var list;
	var v;
	var i;

	list = new LinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		list.unshift( randu() );
		v = list.pop();
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
