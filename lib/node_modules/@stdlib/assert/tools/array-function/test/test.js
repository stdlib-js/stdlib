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

var tape = require( 'tape' );
var isEven = require( '@stdlib/math/base/assert/is-even' );
var noop = require( '@stdlib/utils/noop' );
var arrayfcn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof arrayfcn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a predicate function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws TypeError' );
	}
	function badValue( value ) {
		return function badValue() {
			arrayfcn( value );
		};
	}
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var f = arrayfcn( isEven );
	t.strictEqual( typeof f, 'function' );

	f = arrayfcn( noop );
	t.strictEqual( typeof f, 'function' );
	t.end();
});

tape( 'the function returns a function that tests an array', function test( t ) {
	var bool;
	var arr;
	var f;

	f = arrayfcn( isEven );

	arr = [ 2, 2, 2, 2 ];
	bool = f( arr );

	t.strictEqual( bool, true );

	arr = [ 2, 2, 2, 3 ];
	bool = f( arr );

	t.strictEqual( bool, false );

	t.end();
});

tape( 'the function returns a function which returns `false` if not supplied an array', function test( t ) {
	var values;
	var f;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	f = arrayfcn( isEven );

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( f( values[ i ] ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function returns a function which returns `false` if provided an empty array', function test( t ) {
	var bool;
	var f;

	f = arrayfcn( isEven );
	bool = f( [] );

	t.strictEqual( bool, false );

	t.end();
});
