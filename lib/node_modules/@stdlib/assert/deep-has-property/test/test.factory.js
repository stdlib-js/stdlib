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
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a key path argument which is neither a string primitive or a key array', function test( t ) {
	var values;
	var i;

	values = [
		3,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'3',
		3,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( 'a.b', value );
		};
	}
});

tape( 'the function throws an error if an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		3,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'sep': value
			};
			factory( 'a.b', opts );
		};
	}
});

tape( 'the function returns a function (no options)', function test( t ) {
	var has = factory( 'a.b.c' );
	t.strictEqual( typeof has, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns a function (options)', function test( t ) {
	var opts;
	var has;

	opts = {
		'sep': '/'
	};
	has = factory( 'a/b/c', opts );

	t.strictEqual( typeof has, 'function', 'returns expected value' );
	t.end();
});

tape( 'the returned function returns `false` if provided a `null` or `undefined` (no options)', function test( t ) {
	var values;
	var has;
	var i;

	values = [
		null,
		void 0
	];

	has = factory( 'a.b.c' );

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( has( values[ i ] ), false, 'returns false when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the returned function returns `false` if provided a `null` or `undefined` (options)', function test( t ) {
	var values;
	var opts;
	var has;
	var i;

	values = [
		null,
		void 0
	];

	opts = {
		'sep': '_'
	};
	has = factory( 'a_b_c', opts );

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( has( values[ i ] ), false, 'returns false when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the returned function returns `true` if an object has a specified path (delimited string)', function test( t ) {
	var bool;
	var has;
	var obj;

	has = factory( 'a.b.0.c' );
	obj = {
		'a': {
			'b': [
				{
					'c': 'd'
				}
			]
		}
	};
	bool = has( obj );

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the returned function returns `true` if an object has a specified path (key array)', function test( t ) {
	var bool;
	var path;
	var has;
	var obj;

	path = [ 'a', 'b', '0', 'c' ];
	has = factory( path );

	obj = {
		'a': {
			'b': [
				{
					'c': 'd'
				}
			]
		}
	};
	bool = has( obj );

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the returned function returns `true` if an object has a specified path (custom delimiter)', function test( t ) {
	var bool;
	var opts;
	var has;
	var obj;

	opts = {
		'sep': '/'
	};
	has = factory( 'a/b/0/c', opts );

	obj = {
		'a': {
			'b': [
				{
					'c': 'd'
				}
			]
		}
	};
	bool = has( obj );

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the returned function returns `false` if an object does not have a specified path (delimited string)', function test( t ) {
	var bool;
	var has;
	var obj;

	has = factory( 'a.b.c.0.d' );
	obj = {
		'a': {
			'b': [
				{
					'c': 'd'
				}
			]
		}
	};
	bool = has( obj );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the returned function returns `false` if an object does not have a specified path (key array)', function test( t ) {
	var bool;
	var path;
	var has;
	var obj;

	path = [ 'a', 'b', 'c', '0', 'd' ];
	has = factory( path );

	obj = {
		'a': {
			'b': [
				{
					'c': 'd'
				}
			]
		}
	};
	bool = has( obj );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the returned function returns `false` if an object does not have a specified path (custom delimiter)', function test( t ) {
	var bool;
	var opts;
	var has;
	var obj;

	opts = {
		'sep': '/'
	};
	has = factory( 'a/b/c/0/d', opts );

	obj = {
		'a': {
			'b': [
				{
					'c': 'd'
				}
			]
		}
	};
	bool = has( obj );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the returned function returns `false` if provided an empty object (no options)', function test( t ) {
	var bool;
	var path;
	var has;

	has = factory( 'a.b.c' );
	bool = has( {} );
	t.strictEqual( bool, false, 'returns expected value' );

	path = [ 'a', 'b', 'c' ];
	has = factory( path );
	bool = has( {} );
	t.strictEqual( bool, false, 'returns expected value' );

	has = factory( '' );
	bool = has( {} );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the returned function returns `false` if provided an empty object (options)', function test( t ) {
	var bool;
	var opts;
	var path;
	var has;

	opts = {
		'sep': '/'
	};

	has = factory( 'a/b/c', opts );
	bool = has( {} );
	t.strictEqual( bool, false, 'returns expected value' );

	path = [ 'a', 'b', 'c' ];
	has = factory( path, opts );
	bool = has( {} );
	t.strictEqual( bool, false, 'returns expected value' );

	has = factory( '', opts );
	bool = has( {} );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the returned function can return `true` if provided an empty key path (string; no options)', function test( t ) {
	var bool;
	var obj;
	var has;

	has = factory( '' );
	obj = {
		'': 'b'
	};
	bool = has( obj );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the returned function can return `true` if provided an empty key path (string; options)', function test( t ) {
	var bool;
	var opts;
	var has;
	var obj;

	opts = {
		'sep': '/'
	};

	has = factory( '', opts );
	obj = {
		'': 'b'
	};
	bool = has( obj );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the returned function always returns `false` if provided an empty key path array (string; no options)', function test( t ) {
	var bool;
	var obj;
	var has;

	has = factory( [] );
	obj = {
		'': 'b'
	};
	bool = has( obj );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = has( {} );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports paths containing inherited properties', function test( t ) {
	var bool;
	var foo;
	var has;

	function Foo() {
		this.a = 'b';
		return this;
	}
	Foo.prototype.c = 'd';

	foo = new Foo();

	has = factory( 'a' );
	bool = has( foo );
	t.strictEqual( bool, true, 'returns expected value' );

	has = factory( 'c' );
	bool = has( foo );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the returned function coerces primitives to objects', function test( t ) {
	var bool;
	var has;

	has = factory( 'length' );
	bool = has( 'beep' );

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});
