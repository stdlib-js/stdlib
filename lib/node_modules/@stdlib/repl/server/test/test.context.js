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
var proxyquire = require( 'proxyquire' );
var deepGet = require( '@stdlib/utils/deep-get' );
var deepSet = require( '@stdlib/utils/deep-set' );
var extendContext = require( './../lib/context.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof extendContext, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function sets property paths on the input object', function test( t ) {
	var extendContext;
	var expected;
	var actual;
	var obj;
	var ns;

	ns = [
		{
			'alias': 'a.b.c',
			'value': []
		},
		{
			'alias': 'a.d.e',
			'value': {}
		},
		{
			'alias': 'a.b.f',
			'value': []
		},
		{
			'alias': 'g',
			'value': {}
		}
	];

	extendContext = proxyquire( './../lib/context.js', {
		'./namespace.js': ns
	});

	obj = {
		'context': {}
	};
	extendContext( obj );

	expected = ns[ 0 ].value;
	actual = deepGet( obj.context, 'a.b.c' );
	t.strictEqual( actual, expected, 'sets nested value' );

	expected = ns[ 1 ].value;
	actual = deepGet( obj.context, 'a.d.e' );
	t.strictEqual( actual, expected, 'sets nested value' );

	expected = ns[ 2 ].value;
	actual = deepGet( obj.context, 'a.b.f' );
	t.strictEqual( actual, expected, 'sets nested value' );

	expected = ns[ 3 ].value;
	actual = deepGet( obj.context, 'g' );
	t.strictEqual( actual, expected, 'sets nested value' );

	t.end();
});

tape( 'the function throws an error if provided a duplicate alias', function test( t ) {
	var extendContext;
	var obj;
	var ns;

	ns = [
		{
			'alias': 'a',
			'value': []
		},
		{
			'alias': 'b',
			'value': {}
		},
		{
			'alias': 'a',
			'value': []
		}
	];

	obj = {
		'context': {}
	};

	extendContext = proxyquire( './../lib/context.js', {
		'./namespace.js': ns
	});

	t.throws( foo, Error, 'throws an error' );

	t.end();

	function foo() {
		extendContext( obj );
	}
});

tape( 'the function throws an error if provided a duplicate alias (nested)', function test( t ) {
	var extendContext;
	var obj;
	var ns;

	ns = [
		{
			'alias': 'a.b.c',
			'value': []
		},
		{
			'alias': 'a.d.e',
			'value': {}
		},
		{
			'alias': 'a.d.e',
			'value': []
		}
	];

	obj = {
		'context': {}
	};

	extendContext = proxyquire( './../lib/context.js', {
		'./namespace.js': ns
	});

	t.throws( foo, Error, 'throws an error' );

	t.end();

	function foo() {
		extendContext( obj );
	}
});

tape( 'the function sets context properties as read-only', function test( t ) {
	var extendContext;
	var paths;
	var obj;
	var ns;
	var i;

	ns = [
		{
			'alias': 'a.b.c',
			'value': []
		},
		{
			'alias': 'a.d.e',
			'value': {}
		},
		{
			'alias': 'a.b.f',
			'value': []
		}
	];

	extendContext = proxyquire( './../lib/context.js', {
		'./namespace.js': ns
	});

	obj = {
		'context': {}
	};
	extendContext( obj );

	paths = [
		'a.b',
		'a.b.c',
		'a',
		'a.d',
		'a.d.e',
		'a.b.f'
	];

	for ( i = 0; i < paths.length; i++ ) {
		t.throws( setProps( paths[i] ), Error, 'throws an error' );
	}
	t.end();

	function setProps( path ) {
		return function set() {
			deepSet( obj.context, path, 'beep' );
		};
	}
});
