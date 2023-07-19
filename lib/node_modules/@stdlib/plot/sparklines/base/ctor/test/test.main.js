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
var noop = require( '@stdlib/utils/noop' );
var FLOAT64_MAX = require( '@stdlib/constants/float64/max' );
var Sparkline = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Sparkline, 'function', 'main export is a function' );
	t.end();
});

tape( 'the export is a class constructor', function test( t ) {
	var sparkline = new Sparkline();
	t.strictEqual( sparkline instanceof Sparkline, true, 'returns class instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword (no data, no options)', function test( t ) {
	var sparkline;
	var ctor;

	ctor = Sparkline;
	sparkline = ctor();

	t.strictEqual( sparkline instanceof Sparkline, true, 'returns class instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword (data)', function test( t ) {
	var sparkline;
	var ctor;

	ctor = Sparkline;
	sparkline = ctor( [ 1, 2, 3 ] );

	t.strictEqual( sparkline instanceof Sparkline, true, 'returns class instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword (options)', function test( t ) {
	var sparkline;
	var ctor;

	ctor = Sparkline;
	sparkline = ctor({
		'bufferSize': 10,
		'description': 'beep',
		'isDefined': noop,
		'data': [ 1, 2, 3 ],
		'autoRender': true,
		'label': 'foo'
	});

	t.strictEqual( sparkline instanceof Sparkline, true, 'returns class instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword (data and options)', function test( t ) {
	var sparkline;
	var ctor;

	ctor = Sparkline;
	sparkline = ctor( [ 1, 2, 3 ], {
		'description': 'beep',
		'bufferSize': 10,
		'isDefined': noop,
		'autoRender': true,
		'label': 'foo'
	});

	t.strictEqual( sparkline instanceof Sparkline, true, 'returns class instance' );
	t.end();
});

tape( 'the constructor will throw an error if provided an invalid options argument (no data argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var sparkline = new Sparkline( value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the constructor will throw an error if provided an invalid options argument (data argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var sparkline = new Sparkline( [ 1, 2, 3 ], value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the constructor throws an error if provided an invalid option (no data argument)', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-unused-vars
		var sparkline = new Sparkline({
			'description': []
		});
	}
});

tape( 'the constructor throws an error if provided an invalid option (data argument)', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-unused-vars
		var sparkline = new Sparkline( [ 1, 2, 3 ], {
			'description': []
		});
	}
});

tape( 'the constructor throws an error if provided a `bufferSize` option which is less than the number of data elements (options)', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-unused-vars
		var sparkline = new Sparkline({
			'data': [ 1, 2, 3, 4, 5 ],
			'bufferSize': 3
		});
	}
});

tape( 'the constructor throws an error if provided a `bufferSize` option which is less than the number of data elements (data argument)', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-unused-vars
		var sparkline = new Sparkline( [ 1, 2, 3, 4, 5 ], {
			'bufferSize': 3
		});
	}
});

tape( 'an instance has a writable `autoRender` property', function test( t ) {
	var sparkline;
	var expected;
	var opts;

	sparkline = new Sparkline();
	t.strictEqual( sparkline.autoRender, false, 'default value is false' );

	opts = {
		'autoRender': true
	};
	sparkline = new Sparkline( opts );

	expected = true;
	t.strictEqual( sparkline.autoRender, expected, 'returns expected value' );

	sparkline.autoRender = false;

	expected = false;
	t.strictEqual( sparkline.autoRender, expected, 'returns expected value' );

	t.end();
});

tape( 'an instance has a writable `bufferSize` property', function test( t ) {
	var sparkline;
	var opts;

	sparkline = new Sparkline();
	t.strictEqual( sparkline.bufferSize, FLOAT64_MAX, 'default value is the maximum double-precision floating-point number' );

	opts = {
		'bufferSize': 20
	};
	sparkline = new Sparkline( opts );
	t.strictEqual( sparkline.bufferSize, opts.bufferSize, 'returns expected value' );

	sparkline.bufferSize = 5;
	t.strictEqual( sparkline.bufferSize, 5, 'returns expected value' );

	t.end();
});

tape( 'an instance has a writable `data` property', function test( t ) {
	var sparkline;
	var expected;
	var opts;

	sparkline = new Sparkline();
	t.deepEqual( sparkline.data, [], 'default value is an empty array' );

	opts = {
		'data': [ 1, 2, 3 ]
	};
	sparkline = new Sparkline( opts );

	expected = [ 1, 2, 3 ];
	t.deepEqual( sparkline.data, expected, 'returns expected value' );

	sparkline.data = [ 4, 5, 6 ];

	expected = [ 4, 5, 6 ];
	t.deepEqual( sparkline.data, expected, 'returns expected value' );

	t.end();
});

tape( 'an instance has a writable `isDefined` property', function test( t ) {
	var sparkline;
	var expected;
	var opts;

	sparkline = new Sparkline();
	t.strictEqual( typeof sparkline.isDefined, 'function', 'default value is a function' );

	opts = {
		'isDefined': noop
	};
	sparkline = new Sparkline( opts );

	expected = noop;
	t.deepEqual( sparkline.isDefined, expected, 'returns expected value' );

	sparkline.isDefined = noop;

	expected = noop;
	t.deepEqual( sparkline.isDefined, expected, 'returns expected value' );

	t.end();
});

tape( 'an instance has a writable `label` property', function test( t ) {
	var sparkline;
	var expected;
	var opts;

	sparkline = new Sparkline();
	t.strictEqual( sparkline.label, '', 'default value is an empty string' );

	opts = {
		'label': 'foo'
	};
	sparkline = new Sparkline( opts );

	expected = 'foo';
	t.strictEqual( sparkline.label, expected, 'returns expected value' );

	sparkline.label = 'bar';

	expected = 'bar';
	t.strictEqual( sparkline.label, expected, 'returns expected value' );

	t.end();
});

tape( 'an instance has a `push` method for appending data', function test( t ) {
	var sparkline = new Sparkline();
	t.strictEqual( typeof sparkline.push, 'function', 'has push method' );
	t.end();
});

tape( 'an instance has a `render` method for rendering a sparkline', function test( t ) {
	var sparkline = new Sparkline();
	t.strictEqual( typeof sparkline.render, 'function', 'has render method' );
	t.end();
});

tape( 'an instance has a `toString` method for serializing a sparkline to a string', function test( t ) {
	var sparkline = new Sparkline();
	t.strictEqual( typeof sparkline.toString, 'function', 'has toString method' );
	t.end();
});
