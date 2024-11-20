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
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var isInt16Array = require( '@stdlib/assert/is-int16array' );
var pkg = require( './../package.json' ).name;
var Int16Array = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( ITERATOR_SYMBOL === null )
};


// MAIN //

bench( pkg+'::typed_array:from', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Int16Array( [ 1, 2 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Int16Array.from( buf );
		if ( arr.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( !isInt16Array( arr ) ) {
		b.fail( 'should return an Int16Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::typed_array,clbk:from', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Int16Array( [ 1, 2 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Int16Array.from( buf, clbk );
		if ( arr.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( !isInt16Array( arr ) ) {
		b.fail( 'should return an Int16Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk( v ) {
		return v + 1;
	}
});

bench( pkg+'::array:from', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [ 1, 2 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Int16Array.from( buf );
		if ( arr.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( !isInt16Array( arr ) ) {
		b.fail( 'should return an Int16Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array,clbk:from', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [ 1, 2 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Int16Array.from( buf, clbk );
		if ( arr.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( !isInt16Array( arr ) ) {
		b.fail( 'should return an Int16Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function clbk( v ) {
		return v + 1;
	}
});

bench( pkg+'::iterable:from', opts, function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Int16Array.from( createIterable() );
		if ( arr.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( !isInt16Array( arr ) ) {
		b.fail( 'should return an Int16Array' );
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
					'value': 0,
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
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = Int16Array.from( createIterable(), clbk );
		if ( arr.length !== 2 ) {
			b.fail( 'should have length 2' );
		}
	}
	b.toc();
	if ( !isInt16Array( arr ) ) {
		b.fail( 'should return an Int16Array' );
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
					'value': 1,
					'done': false
				};
			}
			return {
				'done': true
			};
		}
	}

	function clbk( v ) {
		return v + 1;
	}
});
