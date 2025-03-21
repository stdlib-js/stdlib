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
var Float32Array = require( '@stdlib/array/float32' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var pkg = require( './../package.json' ).name;
var namedtypedtuple = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( ITERATOR_SYMBOL === null )
};


// MAIN //

bench( pkg+'::typed_array:from', function benchmark( b ) {
	var Point;
	var buf;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	buf = new Float32Array( [ 1.0, 2.0 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p = Point.from( buf );
		if ( p.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( typeof p.subtuple !== 'function' ) {
		b.fail( 'should return a tuple' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::typed_array,clbk:from', function benchmark( b ) {
	var Point;
	var buf;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	buf = new Float32Array( [ 1.0, 2.0 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p = Point.from( buf, clbk );
		if ( p.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( typeof p.subtuple !== 'function' ) {
		b.fail( 'should return a tuple' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk( v ) {
		return v + 1.0;
	}
});

bench( pkg+'::array:from', function benchmark( b ) {
	var Point;
	var buf;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	buf = [ 1.0, 2.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p = Point.from( buf );
		if ( p.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( typeof p.subtuple !== 'function' ) {
		b.fail( 'should return a tuple' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array,clbk:from', function benchmark( b ) {
	var Point;
	var buf;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	buf = [ 1.0, 2.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p = Point.from( buf, clbk );
		if ( p.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( typeof p.subtuple !== 'function' ) {
		b.fail( 'should return a tuple' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk( v ) {
		return v + 1.0;
	}
});

bench( pkg+'::iterable:from', opts, function benchmark( b ) {
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p = Point.from( createIterable() );
		if ( p.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( typeof p.subtuple !== 'function' ) {
		b.fail( 'should return a tuple' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function createIterable() {
		var out;
		var i;

		out = {};
		out[ ITERATOR_SYMBOL ] = iterator;

		i = 0;

		return out;

		function iterator() {
			return {
				'next': next
			};
		}

		function next() {
			i += 1;
			if ( i <= 2 ) {
				return {
					'value': 0.0,
					'done': false
				};
			}
			return {
				'done': true
			};
		}
	}
});

bench( pkg+'::iterable,clbk:from:', opts, function benchmark( b ) {
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p = Point.from( createIterable(), clbk );
		if ( p.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( typeof p.subtuple !== 'function' ) {
		b.fail( 'should return a tuple' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function createIterable() {
		var out;
		var i;

		out = {};
		out[ ITERATOR_SYMBOL ] = iterator;

		i = 0;

		return out;

		function iterator() {
			return {
				'next': next
			};
		}

		function next() {
			i += 1;
			if ( i <= 2 ) {
				return {
					'value': 1.0,
					'done': false
				};
			}
			return {
				'done': true
			};
		}
	}

	function clbk( v ) {
		return v + 1.0;
	}
});
