/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterHead = require( '@stdlib/iter/head' );
var iterSome = require( '@stdlib/iter/some' );
var iterThunk = require( '@stdlib/iter/pipeline-thunk' );
var iterPipeline = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterPipeline, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a function or an array of functions for the first argument', function test( t ) {
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
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPipeline( value );
		};
	}
});

tape( 'the function throws an error if not provided a function or an array of functions for the first argument (array)', function test( t ) {
	var values;
	var i;

	values = [
		[ iterThunk( iterSome, 5 ), '5' ],
		[ iterThunk( iterSome, 5 ), iterThunk( iterSome, 5 ), 5 ],
		[ iterThunk( iterSome, 5 ), iterThunk( iterSome, 5 ), iterThunk( iterSome, 5 ), null ] // eslint-disable-line max-len
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPipeline( value );
		};
	}
});

tape( 'the function throws an error if not provided a function as a second argument', function test( t ) {
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
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPipeline( iterThunk( iterSome, 5 ), value );
		};
	}
});

tape( 'the function throws an error if not provided a function as a third argument', function test( t ) {
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
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPipeline( iterThunk( iterSome, 5 ), iterThunk( iterSome, 5 ), value ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if provided insufficient functions', function test( t ) {
	t.throws( iterPipeline, Error, 'throws an error' );
	t.end();
});

tape( 'the function throws an error if provided insufficient functions (array)', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		iterPipeline( [] );
	}
});

tape( 'the function returns a function which throws an error if not provided an iterator', function test( t ) {
	var values;
	var p;
	var i;

	p = iterPipeline( iterThunk( iterSome, 2 ) );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			p( value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided a function which does not return an iterator', function test( t ) {
	var it1;
	var it2;
	var p1;
	var p2;

	it1 = iterThunk( iterHead, 5 );
	it2 = iterThunk( iterSome, 3 );

	p1 = iterPipeline( bar, it1, it2 );
	p2 = iterPipeline( it1, bar, it2 );

	t.throws( foo1, TypeError, 'throws a type error' );
	t.throws( foo2, TypeError, 'throws a type error' );

	t.end();

	function foo1() {
		p1( array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 1, 0 ] ) );
	}

	function foo2() {
		p2( array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 1, 0 ] ) );
	}

	function bar() {
		return null;
	}
});

tape( 'the function returns an iterator pipeline', function test( t ) {
	var bool;
	var arr;
	var it1;
	var it2;
	var p;

	it1 = iterThunk( iterHead, 5 );
	it2 = iterThunk( iterSome, 3 );

	p = iterPipeline( it1, it2 );

	arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 1, 0 ] );
	bool = p( arr );
	t.strictEqual( bool, true, 'returns expected value' );

	arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 1, 1, 0 ] );
	bool = p( arr );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator pipeline (array)', function test( t ) {
	var bool;
	var arr;
	var it1;
	var it2;
	var p;

	it1 = iterThunk( iterHead, 5 );
	it2 = iterThunk( iterSome, 3 );

	p = iterPipeline( [ it1, it2 ] );

	arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 1, 0 ] );
	bool = p( arr );
	t.strictEqual( bool, true, 'returns expected value' );

	arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 1, 1, 0 ] );
	bool = p( arr );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator pipeline (iterator result)', function test( t ) {
	var bool;
	var arr;
	var it1;
	var p;

	it1 = iterThunk( iterHead, 5 );
	p = iterPipeline( it1 );

	arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 1, 0 ] );
	bool = iterSome( p( arr ), 3 );
	t.strictEqual( bool, true, 'returns expected value' );

	arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 1, 1, 0 ] );
	bool = iterSome( p( arr ), 3 );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator pipeline (array; iterator result)', function test( t ) {
	var bool;
	var arr;
	var it1;
	var p;

	it1 = iterThunk( iterHead, 5 );
	p = iterPipeline( [ it1 ] );

	arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 1, 0 ] );
	bool = iterSome( p( arr ), 3 );
	t.strictEqual( bool, true, 'returns expected value' );

	arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 1, 1, 0 ] );
	bool = iterSome( p( arr ), 3 );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});
