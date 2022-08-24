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

/* eslint-disable no-new-object */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Number = require( '@stdlib/number/ctor' );
var Obj = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Obj, 'function', 'main export is a function' );
	t.end();
});

tape( 'the main export is the `Object` global', function test( t ) {
	t.strictEqual( Obj, Object, 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty object when provided `null`', function test( t ) {
	var o;

	o = new Object( null );
	t.deepEqual( o, {}, 'returns expected value' );

	o = Object( null );
	t.deepEqual( o, {}, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty object when provided `undefined`', function test( t ) {
	var o;

	o = new Object( void 0 );
	t.deepEqual( o, {}, 'returns expected value' );

	o = Object( void 0 );
	t.deepEqual( o, {}, 'returns expected value' );

	t.end();
});

tape( 'the function returns a Number object when provided a number', function test( t ) {
	var o;

	o = new Object( 3 );
	t.strictEqual( o instanceof Number, true, 'returns expected value' );
	t.strictEqual( o.valueOf(), 3, 'returns expected value' );

	o = Object( 3 );
	t.strictEqual( o instanceof Number, true, 'returns expected value' );
	t.strictEqual( o.valueOf(), 3, 'returns expected value' );

	t.end();
});

tape( 'the function returns a String object when provided a string', function test( t ) {
	var o;

	o = new Object( 'beep' );
	t.strictEqual( o instanceof String, true, 'returns expected value' );
	t.strictEqual( o.valueOf(), 'beep', 'returns expected value' );

	o = Object( 'beep' );
	t.strictEqual( o instanceof String, true, 'returns expected value' );
	t.strictEqual( o.valueOf(), 'beep', 'returns expected value' );

	t.end();
});

tape( 'the function returns a Boolean object when provided a boolean', function test( t ) {
	var o;

	o = new Object( true );
	t.strictEqual( o instanceof Boolean, true, 'returns expected value' );
	t.strictEqual( o.valueOf(), true, 'returns expected value' );

	o = Object( true );
	t.strictEqual( o instanceof Boolean, true, 'returns expected value' );
	t.strictEqual( o.valueOf(), true, 'returns expected value' );

	o = new Object( false );
	t.strictEqual( o instanceof Boolean, true, 'returns expected value' );
	t.strictEqual( o.valueOf(), false, 'returns expected value' );

	o = Object( false );
	t.strictEqual( o instanceof Boolean, true, 'returns expected value' );
	t.strictEqual( o.valueOf(), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns an input value unchanged when provided an existing object', function test( t ) {
	var o1;
	var o2;

	o1 = {};
	o2 = new Object( o1 );
	t.deepEqual( o2, {}, 'returns expected value' );
	t.strictEqual( o1, o2, 'returns expected value' );

	o1 = {};
	o2 = Object( o1 );
	t.deepEqual( o2, {}, 'returns expected value' );
	t.strictEqual( o1, o2, 'returns expected value' );

	o1 = [];
	o2 = new Object( o1 );
	t.deepEqual( o2, [], 'returns expected value' );
	t.strictEqual( o1, o2, 'returns expected value' );

	o1 = [];
	o2 = Object( o1 );
	t.deepEqual( o2, [], 'returns expected value' );
	t.strictEqual( o1, o2, 'returns expected value' );

	t.end();
});
