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
var has = require( './../lib/has.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof has, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `true` if an object has a specified path', function test( t ) {
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

	bool = has( obj, path );
	t.strictEqual( bool, true, 'returns expected value' );

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

	bool = has( obj, path );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if an object does not have a specified path', function test( t ) {
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

	bool = has( obj, path );
	t.strictEqual( bool, false, 'returns expected value' );

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

	bool = has( obj, path );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided an empty object', function test( t ) {
	var bool;
	var path;
	var obj;

	path = [ 'a', 'b', 'c' ];
	obj = {};

	bool = has( obj, path );
	t.strictEqual( bool, false, 'returns expected value' );

	path = [];
	obj = {};

	bool = has( obj, path );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided an empty key path', function test( t ) {
	var bool;
	var path;
	var obj;

	path = [];
	obj = {
		'a': 'b'
	};

	bool = has( obj, path );
	t.strictEqual( bool, false, 'returns expected value' );

	path = [];
	obj = {};

	bool = has( obj, path );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports paths including inherited properties', function test( t ) {
	var bool;
	var path;
	var foo;

	function Foo() {
		this.a = 'b';
		return this;
	}
	Foo.prototype.c = 'd';

	foo = new Foo();

	path = [ 'a' ];
	bool = has( foo, path );
	t.strictEqual( bool, true, 'returns expected value' );

	path = [ 'c' ];
	bool = has( foo, path );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function coerces path values to strings', function test( t ) {
	var bool;
	var path;
	var obj;

	obj = {
		'a': {
			'[object Object]': 'c'
		}
	};

	path = [ 'a', {} ];
	bool = has( obj, path );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});
