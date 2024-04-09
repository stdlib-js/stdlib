/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var last = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof last, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		void 0,
		NaN,
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
			last( value );
		};
	}
});

tape( 'the function throws an error if not provided a string (options)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		void 0,
		NaN,
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
			last( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		3.14,
		null,
		true,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			last( 'beep', value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer (options)', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		3.14,
		null,
		true,
		void 0,
		NaN,
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
			last( 'beep', value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		3,
		null,
		true,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			last( 'beep', 1, value );
		};
	}
});

tape( 'the function throws an error if provided a `mode` option which is not a supported mode (second argument)', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		3,
		null,
		true,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			last( 'beep', {
				'mode': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `mode` option which is not a supported mode (third argument)', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		3,
		null,
		true,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			last( 'beep', 1, {
				'mode': value
			});
		};
	}
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.strictEqual( last( '' ), '', 'returns expected value' );
	t.strictEqual( last( '', 1 ), '', 'returns expected value' );
	t.strictEqual( last( '', {} ), '', 'returns expected value' );
	t.strictEqual( last( '', 1, {} ), '', 'returns expected value' );
	t.end();
});

tape( 'the function returns the last character of a provided string', function test( t ) {
	var out;

	out = last( 'hello world' );
	t.strictEqual( out, 'd', 'returns expected value' );

	out = last( '!!!' );
	t.strictEqual( out, '!', 'returns expected value' );

	out = last( 'Hello' );
	t.strictEqual( out, 'o', 'returns expected value' );

	out = last( 'अनुच्छेद' );
	t.strictEqual( out, 'द', 'returns expected value' );

	out = last( '六书/六書' );
	t.strictEqual( out, '書', 'returns expected value' );

	out = last( '🌷' );
	t.strictEqual( out, '🌷', 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty string if provided zero as the second argument', function test( t ) {
	var out;

	out = last( 'hello world', 0 );
	t.strictEqual( out, '', 'returns expected value' );

	out = last( 'JavaScript', 0, {} );
	t.strictEqual( out, '', 'returns expected value' );

	t.end();
});

tape( 'the function supports returning the last `n` characters of a provided string (default)', function test( t ) {
	var out;

	out = last( 'hello world', 1 );
	t.strictEqual( out, 'd', 'returns expected value' );

	out = last( 'hello world', 7 );
	t.strictEqual( out, 'o world', 'returns expected value' );

	out = last( '!!!', 1 );
	t.strictEqual( out, '!', 'returns expected value' );

	out = last( '!!!', 2 );
	t.strictEqual( out, '!!', 'returns expected value' );

	out = last( 'अनुच्छेद', 1 );
	t.strictEqual( out, 'द', 'returns expected value' );

	out = last( '六书/六書', 1 );
	t.strictEqual( out, '書', 'returns expected value' );

	out = last( '🌷', 1 );
	t.strictEqual( out, '🌷', 'returns expected value' );

	out = last( '👉🏿', 1 );
	t.strictEqual( out, '👉🏿', 'returns expected value' );

	t.end();
});

tape( 'the function supports returning the last `n` characters of a provided string (mode=grapheme)', function test( t ) {
	var opts;
	var out;

	opts = {
		'mode': 'grapheme'
	};

	out = last( 'hello world', 1, opts );
	t.strictEqual( out, 'd', 'returns expected value' );

	out = last( 'hello world', 7, opts );
	t.strictEqual( out, 'o world', 'returns expected value' );

	out = last( '!!!', 1, opts );
	t.strictEqual( out, '!', 'returns expected value' );

	out = last( '!!!', 2, opts );
	t.strictEqual( out, '!!', 'returns expected value' );

	out = last( 'अनुच्छेद', 1, opts );
	t.strictEqual( out, 'द', 'returns expected value' );

	out = last( '六书/六書', 1, opts );
	t.strictEqual( out, '書', 'returns expected value' );

	out = last( '🌷', 1, opts );
	t.strictEqual( out, '🌷', 'returns expected value' );

	out = last( '👉🏿', 1, opts );
	t.strictEqual( out, '👉🏿', 'returns expected value' );

	t.end();
});

tape( 'the function supports returning the last `n` characters of a provided string (mode=code_point)', function test( t ) {
	var opts;
	var out;

	opts = {
		'mode': 'code_point'
	};

	out = last( 'hello world', 1, opts );
	t.strictEqual( out, 'd', 'returns expected value' );

	out = last( 'hello world', 7, opts );
	t.strictEqual( out, 'o world', 'returns expected value' );

	out = last( '!!!', 1, opts );
	t.strictEqual( out, '!', 'returns expected value' );

	out = last( '!!!', 2, opts );
	t.strictEqual( out, '!!', 'returns expected value' );

	out = last( 'अनुच्छेद', 1, opts );
	t.strictEqual( out, 'द', 'returns expected value' );

	out = last( '六书/六書', 1, opts );
	t.strictEqual( out, '書', 'returns expected value' );

	out = last( '🌷', 1, opts );
	t.strictEqual( out, '🌷', 'returns expected value' );

	out = last( '👉🏿', 1, opts );
	t.strictEqual( out, '🏿', 'returns expected value' );

	t.end();
});

tape( 'the function supports returning the last `n` characters of a provided string (mode=code_unit)', function test( t ) {
	var opts;
	var out;

	opts = {
		'mode': 'code_unit'
	};

	out = last( 'hello world', 1, opts );
	t.strictEqual( out, 'd', 'returns expected value' );

	out = last( 'hello world', 7, opts );
	t.strictEqual( out, 'o world', 'returns expected value' );

	out = last( '!!!', 1, opts );
	t.strictEqual( out, '!', 'returns expected value' );

	out = last( '!!!', 2, opts );
	t.strictEqual( out, '!!', 'returns expected value' );

	out = last( 'अनुच्छेद', 1, opts );
	t.strictEqual( out, 'द', 'returns expected value' );

	out = last( '六书/六書', 1, opts );
	t.strictEqual( out, '書', 'returns expected value' );

	out = last( '🌷', 1, opts );
	t.strictEqual( out, '\udf37', 'returns expected value' );

	out = last( '👉🏿', 1, opts );
	t.strictEqual( out, '\udfff', 'returns expected value' );

	t.end();
});
