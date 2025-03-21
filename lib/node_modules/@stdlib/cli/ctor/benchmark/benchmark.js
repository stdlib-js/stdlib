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
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var CLI = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var cli;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		cli = new CLI();
		if ( !( cli instanceof CLI ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( cli instanceof CLI ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new', function benchmark( b ) {
	var ctor;
	var cli;
	var i;

	ctor = CLI;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		cli = ctor();
		if ( !( cli instanceof CLI ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( cli instanceof CLI ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,options', function benchmark( b ) {
	var opts;
	var cli;
	var i;

	opts = {
		'pkg': {
			'name': 'beep',
			'version': '1.0.0'
		},
		'help': 'Usage: beep [options] <boop>',
		'options': {},
		'version': '1.0.0',
		'updates': true,
		'argv': [],
		'title': true
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		cli = new CLI( opts );
		if ( !( cli instanceof CLI ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( cli instanceof CLI ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':args', function benchmark( b ) {
	var out;
	var cli;
	var i;

	cli = new CLI();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = cli.args();
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':flags', function benchmark( b ) {
	var out;
	var cli;
	var i;

	cli = new CLI();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = cli.flags();
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
