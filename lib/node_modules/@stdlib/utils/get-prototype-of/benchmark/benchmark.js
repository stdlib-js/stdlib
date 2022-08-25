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
var Number = require( '@stdlib/number/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var isFunction = require( '@stdlib/assert/is-function' );
var polyfill = require( './../lib/polyfill.js' );
var builtin = require( './../lib/native.js' );
var pkg = require( './../package.json' ).name;
var getPrototypeOf = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !isFunction( Object.getPrototypeOf )
};


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var proto;
	var i;

	values = [
		'beep',
		new String( 'boop' ), // eslint-disable-line no-new-wrappers
		5,
		new Number( 3.14 ), // eslint-disable-line no-new-wrappers
		true,
		new Boolean( false ), // eslint-disable-line no-new-wrappers
		[],
		{},
		function foo() {}, // eslint-disable-line no-empty-function
		new Date(),
		/.*/,
		new RegExp( '.*' ) // eslint-disable-line prefer-regex-literals
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		proto = getPrototypeOf( values[ i%values.length ] );
		if ( proto === null ) {
			b.fail( 'should not return null' );
		}
	}
	b.toc();
	if ( proto === null ) {
		b.fail( 'should not return null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::polyfill', function benchmark( b ) {
	var values;
	var proto;
	var i;

	values = [
		'beep',
		new String( 'boop' ), // eslint-disable-line no-new-wrappers
		5,
		new Number( 3.14 ), // eslint-disable-line no-new-wrappers
		true,
		new Boolean( false ), // eslint-disable-line no-new-wrappers
		[],
		{},
		function foo() {}, // eslint-disable-line no-empty-function
		new Date(),
		/.*/,
		new RegExp( '.*' ) // eslint-disable-line prefer-regex-literals
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		proto = polyfill( values[ i%values.length ] );
		if ( proto === null ) {
			b.fail( 'should not return null' );
		}
	}
	b.toc();
	if ( proto === null ) {
		b.fail( 'should not return null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', opts, function benchmark( b ) {
	var values;
	var proto;
	var i;

	values = [
		'beep',
		new String( 'boop' ), // eslint-disable-line no-new-wrappers
		5,
		new Number( 3.14 ), // eslint-disable-line no-new-wrappers
		true,
		new Boolean( false ), // eslint-disable-line no-new-wrappers
		[],
		{},
		function foo() {}, // eslint-disable-line no-empty-function
		new Date(),
		/.*/,
		new RegExp( '.*' ) // eslint-disable-line prefer-regex-literals
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		proto = builtin( values[ i%values.length ] );
		if ( proto === null ) {
			b.fail( 'should not return null' );
		}
	}
	b.toc();
	if ( proto === null ) {
		b.fail( 'should not return null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
