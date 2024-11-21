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
var randn = require( '@stdlib/random/base/randn' );
var randexp = require( '@stdlib/random/base/exponential' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var pkg = require( './../package.json' ).name;
var reviver = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var f;
	var i;

	values = [
		JSON.stringify( randu ),
		JSON.stringify( randn ),
		JSON.stringify( randexp )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = parseJSON( values[ i%values.length ], reviver );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::no_reviver', function benchmark( b ) {
	var values;
	var o;
	var i;

	values = [
		JSON.stringify( randu ),
		JSON.stringify( randn ),
		JSON.stringify( randexp )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = parseJSON( values[ i%values.length ] );
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

bench( pkg+'::no_reviver,built-in', function benchmark( b ) {
	var values;
	var o;
	var i;

	values = [
		JSON.stringify( randu ),
		JSON.stringify( randn ),
		JSON.stringify( randexp )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = JSON.parse( values[ i%values.length ] );
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
