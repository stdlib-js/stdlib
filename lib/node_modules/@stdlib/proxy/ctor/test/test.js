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
var Proxy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Proxy, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment supports ES6/ES2015+ `Proxy`, the main export is the `Proxy` global', function test( t ) {
	var Proxy;
	var mock;

	mock = {};
	Proxy = proxyquire( './../lib', {
		'@stdlib/assert/has-proxy-support': hasSupport,
		'./main.js': mock
	});

	t.strictEqual( Proxy, mock, 'returns expected value' );
	t.end();

	function hasSupport() {
		return true;
	}
});

tape( 'if an environment does not support ES6/ES2015+ `Proxy`, the main export is a polyfill', function test( t ) {
	var Proxy;
	var mock;

	mock = {};
	Proxy = proxyquire( './../lib', {
		'@stdlib/assert/has-proxy-support': hasSupport,
		'./polyfill.js': mock
	});

	t.strictEqual( Proxy, mock, 'returns expected value' );
	t.end();

	function hasSupport() {
		return false;
	}
});

tape( 'the function proxies a target object', function test( t ) {
	var handlers;
	var target;
	var res;
	var o;
	var v;

	target = {};
	res = [];

	handlers = {
		'get': get
	};
	o = new Proxy( target, handlers );

	o.beep = 'boop';
	o.foo = 'bar';

	v = o.beep;
	t.strictEqual( v, 'boop', 'returns expected value' );

	v = o.foo;
	t.strictEqual( v, 'bar', 'returns expected value' );

	t.deepEqual( res, [ 'beep', 'foo' ], 'contains expected values' );

	t.end();

	function get( obj, prop ) {
		res.push( prop );
		return obj[ prop ];
	}
});
