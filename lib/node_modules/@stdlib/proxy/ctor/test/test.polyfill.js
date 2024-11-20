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
var Proxy = require( './../lib/polyfill.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Proxy, 'function', 'main export is a function' );
	t.end();
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

	// FIXME: don't skip once polyfill implemented
	t.skip( res, [ 'beep', 'foo' ], 'contains expected values' );

	t.end();

	function get( obj, prop ) {
		res.push( prop );
		return obj[ prop ];
	}
});

// TODO: additional tests
