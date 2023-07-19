/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var replace = require( './../lib' );


// MAIN //

bench( pkg+'::regexp', function benchmark( b ) {
	var values;
	var out;
	var str;
	var re;
	var i;

	values = [
		'abc',
		'def',
		'hig'
	];
	str = 'To be, or not to be, that is the question.';
	re = /be/g;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = replace( str, re, values[ i%values.length ] );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::replacer', function benchmark( b ) {
	var out;
	var str;
	var i;

	str = 'To be, or not to be, that is the question.';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = replace( str, 'be', replacer );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function replacer( match, p1 ) {
		return '/' + p1 + '/';
	}
});

bench( pkg+'::builtin,regexp', function benchmark( b ) {
	var values;
	var out;
	var str;
	var re;
	var i;

	values = [
		'abc',
		'def',
		'hig'
	];
	str = 'To be, or not to be, that is the question.';
	re = /be/g;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = str.replace( re, values[ i%values.length ] );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::builtin,replacer', function benchmark( b ) {
	var out;
	var str;
	var i;

	str = 'To be, or not to be, that is the question.';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = str.replace( 'be', replacer );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function replacer( match, p1 ) {
		return '/' + p1 + '/';
	}
});
