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

/* eslint-disable new-cap */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Number = require( '@stdlib/number/ctor' );
var Bool = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Bool, 'function', 'main export is a function' );
	t.end();
});

tape( 'the main export is the `Boolean` global', function test( t ) {
	t.strictEqual( Bool, Boolean, 'returns expected value' ); // eslint-disable-line stdlib/require-globals
	t.end();
});

tape( 'the function returns `false` when provided `null`', function test( t ) {
	var bool = Bool( null );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` when provided `undefined`', function test( t ) {
	var bool = Bool( void 0 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` when provided `0`', function test( t ) {
	var bool = Bool( 0 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` when provided `-0`', function test( t ) {
	var bool = Bool( -0 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` when provided `NaN`', function test( t ) {
	var bool = Bool( NaN );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` when provided an empty string', function test( t ) {
	var bool = Bool( '' );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` when provided `false`', function test( t ) {
	var bool = Bool( false );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` when provided `true`', function test( t ) {
	var bool = Bool( true );
	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` when provided a nonempty string', function test( t ) {
	var bool = Bool( 'beep' );
	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` when provided a numeric value which is neither +-0 or NaN', function test( t ) {
	var bool;

	bool = Bool( 5 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = Bool( -5 );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` when provided any object which is not null', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		new Bool( false ),
		new Bool( true ),
		new Number( 0 ), // eslint-disable-line no-new-wrappers
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		bool = Bool( values[ i ] );
		t.strictEqual( bool, true, 'returns expected value' );
	}
	t.end();
});

tape( 'when used as a constructor, the function returns a Boolean object (falsy values)', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		-0,
		0,
		NaN,
		false,
		'',
		null,
		void 0
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = new Bool( values[ i ] );
		t.strictEqual( bool instanceof Bool, true, 'returns expected value' );
		t.strictEqual( bool.valueOf(), false, 'returns expected value' );
	}
	t.end();
});

tape( 'when used as a constructor, the function returns a Boolean object (truthy values)', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		new Bool( false ),
		new Bool( true ),
		new Number( 0 ), // eslint-disable-line no-new-wrappers
		'5',
		5,
		-5,
		true,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = new Bool( values[ i ] );
		t.strictEqual( bool instanceof Bool, true, 'returns expected value' );
		t.strictEqual( bool.valueOf(), true, 'returns expected value' );
	}
	t.end();
});
