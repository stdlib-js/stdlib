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
var pkg = require( './../package.json' ).name;
var Bool = require( './../lib' );


// MAIN //

bench( pkg+'::constructor', function benchmark( b ) {
	var values;
	var o;
	var i;

	values = [
		null,
		void 0,
		5,
		0,
		'5',
		'',
		{},
		[]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = new Bool( values[ i%values.length ] );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::function', function benchmark( b ) {
	var values;
	var bool;
	var o;
	var i;

	bool = Bool;
	values = [
		null,
		void 0,
		5,
		0,
		'5',
		'',
		{},
		[]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = bool( values[ i%values.length ] );
		if ( typeof o !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( typeof o !== 'boolean' ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
