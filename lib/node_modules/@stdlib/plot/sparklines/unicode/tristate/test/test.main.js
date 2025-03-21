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
var TristateChart = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof TristateChart, 'function', 'main export is a function' );
	t.end();
});

tape( 'the export is a class constructor', function test( t ) {
	var chart = new TristateChart();
	t.strictEqual( chart instanceof TristateChart, true, 'returns class instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword (no data, no options)', function test( t ) {
	var chart;
	var ctor;

	ctor = TristateChart;
	chart = ctor();

	t.strictEqual( chart instanceof TristateChart, true, 'returns class instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword (data)', function test( t ) {
	var chart;
	var ctor;

	ctor = TristateChart;
	chart = ctor( [ 1, 2, 3 ] );

	t.strictEqual( chart instanceof TristateChart, true, 'returns class instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword (options)', function test( t ) {
	var chart;
	var ctor;

	ctor = TristateChart;
	chart = ctor({
		'bufferSize': 10,
		'description': 'beep',
		'isDefined': noop,
		'data': [ 1, 2, 3 ],
		'autoRender': true,
		'label': 'foo'
	});

	t.strictEqual( chart instanceof TristateChart, true, 'returns class instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword (data and options)', function test( t ) {
	var chart;
	var ctor;

	ctor = TristateChart;
	chart = ctor( [ 1, 2, 3 ], {
		'bufferSize': 10,
		'description': 'beep',
		'isDefined': noop,
		'autoRender': true,
		'label': 'foo'
	});

	t.strictEqual( chart instanceof TristateChart, true, 'returns class instance' );
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
			var chart = new TristateChart( value ); // eslint-disable-line no-unused-vars
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
			var chart = new TristateChart( [ 1, 2, 3 ], value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the constructor throws an error if provided an invalid option (no data argument)', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-unused-vars
		var chart = new TristateChart({
			'description': []
		});
	}
});

tape( 'the constructor throws an error if provided an invalid option (data argument)', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-unused-vars
		var chart = new TristateChart( [ 1, 2, 3 ], {
			'description': []
		});
	}
});

tape( 'the constructor throws an error if provided a `bufferSize` option which is less than the number of data elements (options)', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-unused-vars
		var chart = new TristateChart({
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
		var chart = new TristateChart( [ 1, 2, 3, 4, 5 ], {
			'bufferSize': 3
		});
	}
});

tape( 'an instance has a writable `autoRender` property', function test( t ) {
	var expected;
	var chart;
	var opts;

	chart = new TristateChart();
	t.strictEqual( chart.autoRender, false, 'default value is false' );

	opts = {
		'autoRender': true
	};
	chart = new TristateChart( opts );

	expected = true;
	t.strictEqual( chart.autoRender, expected, 'returns expected value' );

	chart.autoRender = false;

	expected = false;
	t.strictEqual( chart.autoRender, expected, 'returns expected value' );

	t.end();
});

tape( 'an instance has a writable `bufferSize` property', function test( t ) {
	var chart;
	var opts;

	chart = new TristateChart();
	t.strictEqual( chart.bufferSize, FLOAT64_MAX, 'default value is the maximum double-precision floating-point number' );

	opts = {
		'bufferSize': 20
	};
	chart = new TristateChart( opts );
	t.strictEqual( chart.bufferSize, opts.bufferSize, 'returns expected value' );

	chart.bufferSize = 5;
	t.strictEqual( chart.bufferSize, 5, 'returns expected value' );

	t.end();
});

tape( 'an instance has a writable `data` property', function test( t ) {
	var expected;
	var chart;
	var opts;

	chart = new TristateChart();
	t.deepEqual( chart.data, [], 'default value is an empty array' );

	opts = {
		'data': [ 1, 2, 3 ]
	};
	chart = new TristateChart( opts );

	expected = [ 1, 2, 3 ];
	t.deepEqual( chart.data, expected, 'returns expected value' );

	chart.data = [ 4, 5, 6 ];

	expected = [ 4, 5, 6 ];
	t.deepEqual( chart.data, expected, 'returns expected value' );

	t.end();
});

tape( 'an instance has a writable `isDefined` property', function test( t ) {
	var expected;
	var chart;
	var opts;

	chart = new TristateChart();
	t.strictEqual( typeof chart.isDefined, 'function', 'default value is a function' );

	opts = {
		'isDefined': noop
	};
	chart = new TristateChart( opts );

	expected = noop;
	t.deepEqual( chart.isDefined, expected, 'returns expected value' );

	chart.isDefined = noop;

	expected = noop;
	t.deepEqual( chart.isDefined, expected, 'returns expected value' );

	t.end();
});

tape( 'an instance has a writable `label` property', function test( t ) {
	var expected;
	var chart;
	var opts;

	chart = new TristateChart();
	t.strictEqual( chart.label, '', 'default value is an empty string' );

	opts = {
		'label': 'foo'
	};
	chart = new TristateChart( opts );

	expected = 'foo';
	t.strictEqual( chart.label, expected, 'returns expected value' );

	chart.label = 'bar';

	expected = 'bar';
	t.strictEqual( chart.label, expected, 'returns expected value' );

	t.end();
});

tape( 'an instance has a `push` method for appending data', function test( t ) {
	var chart = new TristateChart();
	t.strictEqual( typeof chart.push, 'function', 'has push method' );
	t.end();
});

tape( 'an instance has a `render` method for rendering a chart', function test( t ) {
	var chart;
	var str;

	chart = new TristateChart();
	chart.data = [ -1, 1, 0, 0, 1, -1, -1, 1 ];

	str = chart.render();
	t.strictEqual( str, '▄▀──▀▄▄▀', 'returns rendered chart' );

	t.end();
});

tape( 'if a chart has not been provided data, the render method returns an empty string', function test( t ) {
	var chart;
	var str;

	chart = new TristateChart();

	str = chart.render();
	t.strictEqual( str, '', 'returns empty string' );

	t.end();
});

tape( 'by default, a chart renders `NaN` values as missing values', function test( t ) {
	var chart;
	var str;

	chart = new TristateChart();
	chart.data = [ -1, 1, NaN, 0, 1, NaN, -1, 1 ];

	str = chart.render();
	t.strictEqual( str, '▄▀ ─▀ ▄▀', 'returns rendered chart with missing values' );

	t.end();
});

tape( 'an instance has a `toString` method for serializing a chart to string', function test( t ) {
	var chart;
	var str;

	chart = new TristateChart();
	chart.data = [ -1, 1, 0, 0, 1, -1, -1, 1 ];

	str = chart.toString();
	t.strictEqual( str, '▄▀──▀▄▄▀', 'returns rendered chart' );

	t.end();
});
