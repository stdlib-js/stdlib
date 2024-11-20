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
var deepHasProp = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof deepHasProp, 'function', 'export is a function' );
	t.end();
});

tape( 'the function exports a factory function', function test( t ) {
	t.strictEqual( typeof deepHasProp.factory, 'function', 'exports a factory function' );
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': {
					'b': 'c'
				}
			};
			deepHasProp( obj, value );
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': {
					'b': 'c'
				}
			};
			deepHasProp( obj, 'a.b', value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		3,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts;
			var obj;

			obj = {
				'a': {
					'b': 'c'
				}
			};
			opts = {
				'sep': value
			};
			deepHasProp( obj, 'a.b', opts );
		};
	}
});

tape( 'the function returns `false` if provided a first argument which is either `null` or `undefined`', function test( t ) {
	var values;
	var i;

	values = [
		null,
		void 0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( deepHasProp( values[ i ], 'a.b.c' ), false, 'returns false when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns `true` if an object has a specified path (delimited string)', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	bool = deepHasProp( obj, 'a.b.c' );
	t.strictEqual( bool, true, 'returns true' );

	obj = {
		'a': [
			{
				'b': [
					{
						'c': 'd'
					},
					{
						'e': 'f'
					}
				]
			}
		]
	};
	bool = deepHasProp( obj, 'a.0.b.0.c' );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `true` if an object has a specified path (key array)', function test( t ) {
	var bool;
	var path;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	path = [ 'a', 'b', 'c' ];
	bool = deepHasProp( obj, path );
	t.strictEqual( bool, true, 'returns true' );

	obj = {
		'a': [
			{
				'b': [
					{
						'c': 'd'
					},
					{
						'e': 'f'
					}
				]
			}
		]
	};
	path = [ 'a', '0', 'b', '0', 'c' ];
	bool = deepHasProp( obj, path );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `true` if an object has a specified path (custom delimiter)', function test( t ) {
	var bool;
	var opts;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	opts = {
		'sep': '/'
	};
	bool = deepHasProp( obj, 'a/b/c', opts );
	t.strictEqual( bool, true, 'returns true' );

	obj = {
		'a': [
			{
				'b': [
					{
						'c': 'd'
					},
					{
						'e': 'f'
					}
				]
			}
		]
	};
	opts = {
		'sep': '/'
	};
	bool = deepHasProp( obj, 'a/0/b/0/c', opts );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if an object does not have a specified path (delimited string)', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	bool = deepHasProp( obj, 'a.b.c.d.e' );
	t.strictEqual( bool, false, 'returns false' );

	obj = {
		'a': [
			{
				'b': [
					{
						'c': 'd'
					},
					{
						'e': 'f'
					}
				]
			}
		]
	};
	bool = deepHasProp( obj, '0.a.0.b.0.e' );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if an object does not have a specified path (key array)', function test( t ) {
	var bool;
	var path;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	path = [ 'a', 'b', 'c', 'd', 'e' ];
	bool = deepHasProp( obj, path );
	t.strictEqual( bool, false, 'returns false' );

	obj = {
		'a': [
			{
				'b': [
					{
						'c': 'd'
					},
					{
						'e': 'f'
					}
				]
			}
		]
	};
	path = [ '0', 'a', '0', 'b', '0', 'e' ];
	bool = deepHasProp( obj, path );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if an object does not have a specified path (custom delimiter)', function test( t ) {
	var bool;
	var opts;
	var obj;

	obj = {
		'a': {
			'b': {
				'c': 'd'
			}
		}
	};
	opts = {
		'sep': '/'
	};
	bool = deepHasProp( obj, 'a/b/c/d/e', opts );
	t.strictEqual( bool, false, 'returns false' );

	obj = {
		'a': [
			{
				'b': [
					{
						'c': 'd'
					},
					{
						'e': 'f'
					}
				]
			}
		]
	};
	opts = {
		'sep': '/'
	};
	bool = deepHasProp( obj, '0/a/0/b/0/e', opts );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided an empty object (no options)', function test( t ) {
	var bool;

	bool = deepHasProp( {}, 'a.b.c' );
	t.strictEqual( bool, false, 'returns false' );

	bool = deepHasProp( {}, '' );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided an empty object (options)', function test( t ) {
	var bool;
	var opts;

	opts = {
		'sep': '/'
	};

	bool = deepHasProp( {}, 'a/b/c', opts );
	t.strictEqual( bool, false, 'returns false' );

	bool = deepHasProp( {}, '', opts );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided an empty path array (no options)', function test( t ) {
	var bool;
	var obj;

	obj = {
		'a': 'b'
	};
	bool = deepHasProp( obj, [] );
	t.strictEqual( bool, false, 'returns false' );

	bool = deepHasProp( {}, [] );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided an empty path array (options)', function test( t ) {
	var bool;
	var opts;
	var obj;

	opts = {
		'sep': '/'
	};
	obj = {
		'a': 'b'
	};
	bool = deepHasProp( obj, [], opts );
	t.strictEqual( bool, false, 'returns false' );

	bool = deepHasProp( {}, [], opts );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function can return `true` if provided an empty key path string (no options)', function test( t ) {
	var bool;
	var obj;

	obj = {
		'': 'b'
	};
	bool = deepHasProp( obj, '' );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function can return `true` if provided an empty key path string (options)', function test( t ) {
	var bool;
	var opts;
	var obj;

	obj = {
		'': 'b'
	};
	opts = {
		'sep': '/'
	};
	bool = deepHasProp( obj, '', opts );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function supports paths including inherited properties', function test( t ) {
	var bool;
	var foo;

	function Foo() {
		this.a = 'b';
		return this;
	}
	Foo.prototype.c = 'd';

	foo = {
		'a': new Foo()
	};

	bool = deepHasProp( foo, 'a.a' );
	t.strictEqual( bool, true, 'returns true' );

	bool = deepHasProp( foo, 'a.c' );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function coerces primitives to objects', function test( t ) {
	var bool = deepHasProp( 'beep', 'length' );
	t.strictEqual( bool, true, 'returns true' );
	t.end();
});
