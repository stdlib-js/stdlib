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

/* eslint-disable no-empty-function */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var pkg = require( './../package.json' ).name;
var isJSON = require( './../lib' );


// MAIN //

bench( pkg+'::invalid-arguments', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isJSON( values[ i%values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::invalid-json', function benchmark( b ) {
	var bool;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isJSON( '{a":"'+fromCodePoint( 97 + (i%26) )+'"}' );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::valid-json', function benchmark( b ) {
	var bool;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isJSON( '{"a":"'+fromCodePoint( 97 + (i%26) )+'"}' );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( 'JSON.parse', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = JSON.parse( '{"a":"'+fromCodePoint( 97 + (i%26) )+'"}' );
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
