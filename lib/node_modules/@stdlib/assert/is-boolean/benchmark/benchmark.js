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

/* eslint-disable no-new-wrappers, no-empty-function */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;
var isBoolean = require( './../lib' );


// MAIN //

bench( pkg+'::primitives', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isBoolean( values[ i % values.length ] );
		if ( !isBoolean.isPrimitive( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean.isPrimitive( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::objects', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new Boolean( true )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isBoolean( values[ i % values.length ] );
		if ( !isBoolean.isPrimitive( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean.isPrimitive( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::primitives:isPrimitive', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isBoolean.isPrimitive( values[ i % values.length ] );
		if ( !isBoolean.isPrimitive( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean.isPrimitive( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::objects:isPrimitive', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new Boolean( false )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isBoolean.isPrimitive( values[ i % values.length ] );
		if ( !isBoolean.isPrimitive( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean.isPrimitive( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::primitives:isObject', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isBoolean.isObject( values[ i % values.length ] );
		if ( !isBoolean.isPrimitive( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean.isPrimitive( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::objects:isObject', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new Boolean( true )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isBoolean.isObject( values[ i % values.length ] );
		if ( !isBoolean.isPrimitive( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean.isPrimitive( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
