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
var isnan = require( '@stdlib/assert/is-nan' );
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var pkg = require( './../package.json' ).name;
var pick = require( './../lib' );


// MAIN //

bench( pkg+'::string,single', function benchmark( b ) {
	var obj;
	var key;
	var o;
	var i;

	obj = {};
	for ( i = 0; i < 26; i++ ) {
		key = fromCodePoint( 97+(i%26) );
		obj[ key ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		key = fromCodePoint( 97+(i%26) );
		o = pick( obj, key );
		if ( isnan( o[ key ] ) ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( isnan( o[ key ] ) ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array,single', function benchmark( b ) {
	var obj;
	var key;
	var o;
	var i;

	obj = {};
	for ( i = 0; i < 26; i++ ) {
		key = fromCodePoint( 97+(i%26) );
		obj[ key ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		key = fromCodePoint( 97+(i%26) );
		o = pick( obj, [ key ] );
		if ( isnan( o[ key ] ) ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( isnan( o[ key ] ) ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array,multiple', function benchmark( b ) {
	var obj;
	var key;
	var k1;
	var k2;
	var k3;
	var o;
	var i;

	obj = {};
	for ( i = 0; i < 26; i++ ) {
		key = fromCodePoint( 97+(i%26) );
		obj[ key ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		k1 = fromCodePoint( 97+(i%26) );
		k2 = fromCodePoint( 97+((i+5)%26) );
		k3 = fromCodePoint( 97+((i+12)%26) );
		o = pick( obj, [ k1, k2, k3 ] );
		if ( isnan( o[ k1 ] ) ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( isnan( o[ k1 ] ) ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in,single', function benchmark( b ) {
	var obj;
	var key;
	var o;
	var i;

	obj = {};
	for ( i = 0; i < 26; i++ ) {
		key = fromCodePoint( 97+(i%26) );
		obj[ key ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		key = fromCodePoint( 97+(i%26) );
		o = {};
		o[ key ] = obj[ key ];
		if ( isnan( o[ key ] ) ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( isnan( o[ key ] ) ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in,multiple', function benchmark( b ) {
	var obj;
	var key;
	var k1;
	var k2;
	var k3;
	var o;
	var i;

	obj = {};
	for ( i = 0; i < 26; i++ ) {
		key = fromCodePoint( 97+(i%26) );
		obj[ key ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		k1 = fromCodePoint( 97+(i%26) );
		k2 = fromCodePoint( 97+((i+5)%26));
		k3 = fromCodePoint( 97+((i+12)%26));
		o = {};
		o[ k1 ] = obj[ k1 ];
		o[ k2 ] = obj[ k2 ];
		o[ k3 ] = obj[ k3 ];
		if ( isnan( o[ k1 ] ) ) {
			b.fail( 'should not be NaN' );
		}
	}
	b.toc();
	if ( isnan( o[ k1 ] ) ) {
		b.fail( 'should not be NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
