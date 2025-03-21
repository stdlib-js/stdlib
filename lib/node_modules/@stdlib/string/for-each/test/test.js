/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var noop = require( '@stdlib/utils/noop' );
var forEach = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof forEach, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a string', function test( t ) {
	var values;
	var i;

	values = [
		[],
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a string (options)', function test( t ) {
	var values;
	var i;

	values = [
		[],
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( value, {}, noop );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a string (thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		[],
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( value, noop, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a string (options, thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		[],
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( value, {}, noop, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
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
			forEach( 'beep', value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options)', function test( t ) {
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
			forEach( 'beep', {}, value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (thisArg)', function test( t ) {
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
			forEach( 'beep', value, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options, thisArg)', function test( t ) {
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
			forEach( 'beep', {}, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		3,
		NaN,
		true,
		false,
		null,
		void 0,
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( 'beep', value, noop );
		};
	}
});

tape( 'the function throws an error if provided a `mode` option which is not a supported mode', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'mode': value
			};
			forEach( 'beep', opts, noop );
		};
	}
});

tape( 'the function throws an error if provided a `mode` option which is not a supported mode (thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'mode': value
			};
			forEach( 'beep', opts, noop, {} );
		};
	}
});

tape( 'if provided an empty string, the function never invokes a provided function', function test( t ) {
	var opts;
	var out;

	out = forEach( '', fcn );
	t.strictEqual( out, '', 'returns expected value' );

	out = forEach( '', {}, fcn );
	t.strictEqual( out, '', 'returns expected value' );

	out = forEach( '', fcn, {} );
	t.strictEqual( out, '', 'returns expected value' );

	out = forEach( '', {}, fcn, {} );
	t.strictEqual( out, '', 'returns expected value' );

	opts = {};

	opts.mode = 'grapheme';
	out = forEach( '', opts, fcn );
	t.strictEqual( out, '', 'returns expected value' );

	opts.mode = 'code_point';
	out = forEach( '', opts, fcn );
	t.strictEqual( out, '', 'returns expected value' );

	opts.mode = 'code_unit';
	out = forEach( '', opts, fcn );
	t.strictEqual( out, '', 'returns expected value' );

	t.end();

	function fcn() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the function returns a provided string', function test( t ) {
	var opts;
	var str;
	var out;

	str = 'Hello, world';

	out = forEach( str, noop );
	t.strictEqual( out, str, 'returns expected value' );

	opts = {};

	opts.mode = 'grapheme';
	out = forEach( str, opts, noop );
	t.strictEqual( out, str, 'returns expected value' );

	opts.mode = 'code_point';
	out = forEach( str, opts, noop );
	t.strictEqual( out, str, 'returns expected value' );

	opts.mode = 'code_unit';
	out = forEach( str, opts, noop );
	t.strictEqual( out, str, 'returns expected value' );

	t.end();
});

tape( 'the function invokes a provided function for each character of a provided string (default)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello, world';
	expected = [
		'H',
		'e',
		'l',
		'l',
		'o',
		',',
		' ',
		'w',
		'o',
		'r',
		'l',
		'd'
	];

	actual = [];
	forEach( str, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of a provided string (mode=grapheme)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var str;

	str = 'Hello, world';
	expected = [
		'H',
		'e',
		'l',
		'l',
		'o',
		',',
		' ',
		'w',
		'o',
		'r',
		'l',
		'd'
	];
	actual = [];

	opts = {
		'mode': 'grapheme'
	};
	forEach( str, opts, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of a provided string (mode=code_point)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var str;

	str = 'Hello, world';
	expected = [
		'H',
		'e',
		'l',
		'l',
		'o',
		',',
		' ',
		'w',
		'o',
		'r',
		'l',
		'd'
	];
	actual = [];

	opts = {
		'mode': 'code_point'
	};
	forEach( str, opts, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of a provided string (mode=code_unit)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var str;

	str = 'Hello, world';
	expected = [
		'H',
		'e',
		'l',
		'l',
		'o',
		',',
		' ',
		'w',
		'o',
		'r',
		'l',
		'd'
	];
	actual = [];

	opts = {
		'mode': 'code_unit'
	};
	forEach( str, opts, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of the string (Unicode; default)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello, world \uD834\uDD1E';
	expected = [
		'H',
		'e',
		'l',
		'l',
		'o',
		',',
		' ',
		'w',
		'o',
		'r',
		'l',
		'd',
		' ',
		'\uD834\uDD1E'
	];

	actual = [];
	forEach( str, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of the string (Unicode; mode=grapheme)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var str;

	str = 'Hello, world \uD834\uDD1E';
	expected = [
		'H',
		'e',
		'l',
		'l',
		'o',
		',',
		' ',
		'w',
		'o',
		'r',
		'l',
		'd',
		' ',
		'\uD834\uDD1E'
	];
	actual = [];

	opts = {
		'mode': 'grapheme'
	};
	forEach( str, opts, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of the string (Unicode; mode=code_point)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var str;

	str = 'Hello, world \uD834\uDD1E';
	expected = [
		'H',
		'e',
		'l',
		'l',
		'o',
		',',
		' ',
		'w',
		'o',
		'r',
		'l',
		'd',
		' ',
		'\uD834\uDD1E'
	];
	actual = [];

	opts = {
		'mode': 'code_point'
	};
	forEach( str, opts, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of the string (Unicode; mode=code_unit)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var str;

	str = 'Hello, world \uD834\uDD1E';
	expected = [
		'H',
		'e',
		'l',
		'l',
		'o',
		',',
		' ',
		'w',
		'o',
		'r',
		'l',
		'd',
		' ',
		'\uD834',
		'\uDD1E'
	];
	actual = [];

	opts = {
		'mode': 'code_unit'
	};
	forEach( str, opts, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of the string (emoji; default)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '🌷🍕👉🏿';
	expected = [
		'🌷',
		'🍕',
		'👉🏿'
	];

	actual = [];
	forEach( str, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of the string (emoji; mode=grapheme)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var str;

	str = '🌷🍕👉🏿';
	expected = [
		'🌷',
		'🍕',
		'👉🏿'
	];
	actual = [];

	opts = {
		'mode': 'grapheme'
	};
	forEach( str, opts, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of the string (emoji; mode=code_point)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var str;

	str = '🌷🍕👉🏿';
	expected = [
		'🌷',
		'🍕',
		'👉',
		'🏿'
	];
	actual = [];

	opts = {
		'mode': 'code_point'
	};
	forEach( str, opts, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of the string (emoji; mode=code_unit)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var str;

	str = '🌷🍕👉🏿';
	expected = [
		'\uD83C',
		'\uDF37',
		'\uD83C',
		'\uDF55',
		'\uD83D',
		'\uDC49',
		'\uD83C',
		'\uDFFF'
	];
	actual = [];

	opts = {
		'mode': 'code_unit'
	};
	forEach( str, opts, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function supports providing an execution context (default)', function test( t ) {
	var ctx;
	var str;

	str = '🌷🍕👉🏿';
	ctx = {
		'count': 0
	};

	forEach( str, count, ctx );

	t.strictEqual( ctx.count, 3, 'returns expected value' );
	t.end();

	function count() {
		this.count += 1; // eslint-disable-line no-invalid-this
	}
});

tape( 'the function supports providing an execution context (mode=grapheme)', function test( t ) {
	var opts;
	var ctx;
	var str;

	str = '🌷🍕👉🏿';
	ctx = {
		'count': 0
	};

	opts = {
		'mode': 'grapheme'
	};
	forEach( str, opts, count, ctx );

	t.strictEqual( ctx.count, 3, 'returns expected value' );
	t.end();

	function count() {
		this.count += 1; // eslint-disable-line no-invalid-this
	}
});

tape( 'the function supports providing an execution context (mode=code_point)', function test( t ) {
	var opts;
	var ctx;
	var str;

	str = '🌷🍕👉🏿';
	ctx = {
		'count': 0
	};

	opts = {
		'mode': 'code_point'
	};
	forEach( str, opts, count, ctx );

	t.strictEqual( ctx.count, 4, 'returns expected value' );
	t.end();

	function count() {
		this.count += 1; // eslint-disable-line no-invalid-this
	}
});

tape( 'the function supports providing an execution context (mode=code_unit)', function test( t ) {
	var opts;
	var ctx;
	var str;

	str = '🌷🍕👉🏿';
	ctx = {
		'count': 0
	};

	opts = {
		'mode': 'code_unit'
	};
	forEach( str, opts, count, ctx );

	t.strictEqual( ctx.count, 8, 'returns expected value' );
	t.end();

	function count() {
		this.count += 1; // eslint-disable-line no-invalid-this
	}
});
