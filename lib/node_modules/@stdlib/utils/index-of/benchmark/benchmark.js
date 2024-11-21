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
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var pkg = require( './../package.json' ).name;
var indexOf = require( './../lib' );


// MAIN //

bench( pkg+'::array', function benchmark( b ) {
	var idx;
	var arr;
	var i;

	arr = new Array( 10 );
	for ( i = 0; i < arr.length; i++ ) {
		arr[ i ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = randu();
		idx = indexOf( arr, 9 );
		if ( idx !== idx ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( idx !== idx ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array,built-in', function benchmark( b ) {
	var idx;
	var arr;
	var i;

	arr = new Array( 10 );
	for ( i = 0; i < arr.length; i++ ) {
		arr[ i ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = randu();
		idx = arr.indexOf( 9 );
		if ( idx !== idx ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( idx !== idx ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array-like', function benchmark( b ) {
	var obj;
	var idx;
	var i;

	function Obj() {
		this[ 0 ] = 'beep';
		this[ 1 ] = 'boop';
		this[ 2 ] = 'woot';
		this[ 3 ] = 'bap';
		this.length = 4;
		return this;
	}
	Obj.prototype[ 2 ] = 'bop';
	obj = new Obj();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj[ 4 ] = 'abc'+fromCodePoint( i%126 );
		idx = indexOf( obj, 'bap' );
		if ( idx !== idx ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( idx !== idx ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
bench( pkg+'::array-like,built-in', function benchmark( b ) {
	var indexOf = Array.prototype.indexOf;
	var obj;
	var idx;
	var i;

	function Obj() {
		this[ 0 ] = 'beep';
		this[ 1 ] = 'boop';
		this[ 2 ] = 'woot';
		this[ 3 ] = 'bap';
		this.length = 4;
		return this;
	}
	Obj.prototype[ 2 ] = 'bop';
	obj = new Obj();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj[ 4 ] = 'abc'+fromCodePoint( i%126 );
		idx = indexOf.call( obj, 'bap' );
		if ( idx !== idx ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( idx !== idx ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::string', function benchmark( b ) {
	var idx;
	var str;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = 'abcdefghijklmnopqrstuvwxyz'+fromCodePoint( i%126 );
		idx = indexOf( str, 'z' );
		if ( idx !== idx ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( idx !== idx ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::string,built-in', function benchmark( b ) {
	var idx;
	var str;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = 'abcdefghijklmnopqrstuvwxyz'+fromCodePoint( i%126 );
		idx = str.indexOf( 'z' );
		if ( idx !== idx ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( idx !== idx ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
