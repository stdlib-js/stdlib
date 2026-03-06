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
var pkg = require( './../package.json' ).name;
var invertBy = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var obj;
	var out;
	var i;

	function transform( key, value ) {
		return key + ':' + value;
	}
	obj = {
		'a': 'beep',
		'b': 'boop',
		'c': 'foo',
		'd': 'bar',
		'e': randu()
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.e = randu();
		out = invertBy( obj, transform );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':duplicates=true', function benchmark( b ) {
	var opts;
	var obj;
	var out;
	var i;

	function transform( key, value ) {
		return value + 'boop';
	}
	obj = {
		'a': 'beep',
		'b': 'beep',
		'c': 'beep',
		'd': 'beep',
		'e': randu()
	};
	opts = {
		'duplicates': true
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.e = randu();
		out = invertBy( obj, opts, transform );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':duplicates=false', function benchmark( b ) {
	var opts;
	var obj;
	var out;
	var i;

	function transform( key, value ) {
		return value + 'boop';
	}
	obj = {
		'a': 'beep',
		'b': 'beep',
		'c': 'beep',
		'd': 'beep',
		'e': randu()
	};
	opts = {
		'duplicates': false
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj.e = randu();
		out = invertBy( obj, opts, transform );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
