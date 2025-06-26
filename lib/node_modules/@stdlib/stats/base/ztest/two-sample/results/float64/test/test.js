/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var isDataView = require( '@stdlib/assert/is-dataview' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var Float64Array = require( '@stdlib/array/float64' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Float64Results = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Float64Results, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an ArrayBuffer or data object', function test( t ) {
	var results;
	var values;
	var i;

	results = Float64Results;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			results( value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer', function test( t ) {
	var results;
	var values;
	var i;

	results = Float64Results;

	values = [
		'5',
		-5,
		3.14,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			results( new ArrayBuffer( 1024 ), value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a nonnegative integer', function test( t ) {
	var results;
	var values;
	var i;

	results = Float64Results;

	values = [
		'5',
		-5,
		3.14,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			results( new ArrayBuffer( 1024 ), 0, value );
		};
	}
});

tape( 'the function is a constructor which does not require the `new` operator', function test( t ) {
	var results;
	var res;

	results = Float64Results;

	res = results();
	t.strictEqual( res instanceof results, true, 'returns expected value' );

	res = results( {} );
	t.strictEqual( res instanceof results, true, 'returns expected value' );

	res = results( new ArrayBuffer( 1024 ) );
	t.strictEqual( res instanceof results, true, 'returns expected value' );

	res = results( new ArrayBuffer( 1024 ), 0 );
	t.strictEqual( res instanceof results, true, 'returns expected value' );

	res = results( new ArrayBuffer( 1024 ), 0, 1024 );
	t.strictEqual( res instanceof results, true, 'returns expected value' );

	t.end();
});

tape( 'the function is a constructor for a fixed-width results object ', function test( t ) {
	var expected;
	var actual;

	actual = new Float64Results({
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	});

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Float64Results, true, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function is a constructor for a fixed-width results object (no arguments)', function test( t ) {
	var expected;
	var actual;

	actual = new Float64Results();

	actual.rejected = true;
	actual.alpha = 0.05;
	actual.pValue = 0.0132;
	actual.statistic = 2.4773;
	actual.nullValue = 0.0;
	actual.xmean = 3.7561;
	actual.ymean = 3.0129;
	actual.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	actual.alternative = 'two-sided';

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Float64Results, true, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function is a constructor for a fixed-width results object (empty object)', function test( t ) {
	var expected;
	var actual;

	actual = new Float64Results( {} );

	actual.rejected = true;
	actual.alpha = 0.05;
	actual.pValue = 0.0132;
	actual.statistic = 2.4773;
	actual.nullValue = 0.0;
	actual.xmean = 3.7561;
	actual.ymean = 3.0129;
	actual.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	actual.alternative = 'two-sided';

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Float64Results, true, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function is a constructor for a fixed-width results object (ArrayBuffer)', function test( t ) {
	var expected;
	var actual;
	var buf;

	buf = new ArrayBuffer( 1024 );
	actual = new Float64Results( buf );

	actual.rejected = true;
	actual.alpha = 0.05;
	actual.pValue = 0.0132;
	actual.statistic = 2.4773;
	actual.nullValue = 0.0;
	actual.xmean = 3.7561;
	actual.ymean = 3.0129;
	actual.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	actual.alternative = 'two-sided';

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Float64Results, true, 'returns expected value' );
	t.strictEqual( actual.toDataView().buffer, buf, 'returns expected value' );
	t.strictEqual( actual.toDataView().byteOffset, 0, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function is a constructor for a fixed-width results object (ArrayBuffer, byteOffset)', function test( t ) {
	var expected;
	var actual;
	var buf;

	buf = new ArrayBuffer( 1024 );
	actual = new Float64Results( buf, 16 );

	actual.rejected = true;
	actual.alpha = 0.05;
	actual.pValue = 0.0132;
	actual.statistic = 2.4773;
	actual.nullValue = 0.0;
	actual.xmean = 3.7561;
	actual.ymean = 3.0129;
	actual.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	actual.alternative = 'two-sided';

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Float64Results, true, 'returns expected value' );
	t.strictEqual( actual.toDataView().buffer, buf, 'returns expected value' );
	t.strictEqual( actual.toDataView().byteOffset, 16, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the function is a constructor for a fixed-width results object (ArrayBuffer, byteOffset, byteLength)', function test( t ) {
	var expected;
	var actual;
	var buf;

	buf = new ArrayBuffer( 1024 );
	actual = new Float64Results( buf, 16, 160 );

	actual.rejected = true;
	actual.alpha = 0.05;
	actual.pValue = 0.0132;
	actual.statistic = 2.4773;
	actual.nullValue = 0.0;
	actual.xmean = 3.7561;
	actual.ymean = 3.0129;
	actual.ci = new Float64Array( [ 0.1552, 1.3311 ] );
	actual.alternative = 'two-sided';

	expected = {
		'rejected': true,
		'alpha': 0.05,
		'pValue': 0.0132,
		'statistic': 2.4773,
		'nullValue': 0.0,
		'xmean': 3.7561,
		'ymean': 3.0129,
		'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
		'alternative': 'two-sided'
	};

	t.strictEqual( actual instanceof Float64Results, true, 'returns expected value' );
	t.strictEqual( actual.toDataView().buffer, buf, 'returns expected value' );
	t.strictEqual( actual.toDataView().byteOffset, 16, 'returns expected value' );
	t.strictEqual( actual.rejected, expected.rejected, 'returns expected value' );
	t.strictEqual( actual.alpha, expected.alpha, 'returns expected value' );
	t.strictEqual( actual.pValue, expected.pValue, 'returns expected value' );
	t.strictEqual( actual.statistic, expected.statistic, 'returns expected value' );
	t.strictEqual( actual.nullValue, expected.nullValue, 'returns expected value' );
	t.strictEqual( actual.xmean, expected.xmean, 'returns expected value' );
	t.strictEqual( actual.ymean, expected.ymean, 'returns expected value' );
	t.strictEqual( actual.alternative, expected.alternative, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( actual.ci, expected.ci ), true, 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance having a method property', function test( t ) {
	var results = new Float64Results();

	t.strictEqual( results.method, 'Two-sample Z-test', 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance having a `toString` method', function test( t ) {
	var results;
	var actual;

	results = new Float64Results();

	actual = results.toString();
	t.strictEqual( typeof actual, 'string', 'returns expected value' );

	actual = results.toString({
		'decision': false
	});
	t.strictEqual( typeof actual, 'string', 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance having a `toJSON` method', function test( t ) {
	var results = new Float64Results();
	t.strictEqual( typeof results.toJSON, 'function', 'returns expected value' );
	t.strictEqual( typeof results.toJSON(), 'object', 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance having a `toDataView` method', function test( t ) {
	var results = new Float64Results();
	t.strictEqual( typeof results.toDataView, 'function', 'returns expected value' );
	t.strictEqual( isDataView( results.toDataView() ), true, 'returns expected value' );
	t.end();
});

tape( 'the constructor has a `name` property', function test( t ) {
	t.strictEqual( typeof Float64Results.name, 'string', 'returns expected value' );
	t.end();
});

tape( 'the constructor has an `alignment` property', function test( t ) {
	t.strictEqual( typeof Float64Results.alignment, 'number', 'returns expected value' );
	t.end();
});

tape( 'the constructor has a `byteLength` property', function test( t ) {
	t.strictEqual( typeof Float64Results.byteLength, 'number', 'returns expected value' );
	t.end();
});

tape( 'the constructor has a `fields` property', function test( t ) {
	t.strictEqual( isStringArray( Float64Results.fields ), true, 'returns expected value' );
	t.end();
});

tape( 'the constructor has a `layout` property', function test( t ) {
	t.strictEqual( typeof Float64Results.layout, 'string', 'returns expected value' );
	t.end();
});

tape( 'the constructor has a `bufferOf` method', function test( t ) {
	t.strictEqual( typeof Float64Results.bufferOf, 'function', 'returns expected value' );
	t.end();
});

tape( 'the constructor has a `byteLengthOf` method', function test( t ) {
	t.strictEqual( typeof Float64Results.byteLengthOf, 'function', 'returns expected value' );
	t.end();
});

tape( 'the constructor has a `byteOffsetOf` method', function test( t ) {
	t.strictEqual( typeof Float64Results.byteOffsetOf, 'function', 'returns expected value' );
	t.end();
});

tape( 'the constructor has a `descriptionOf` method', function test( t ) {
	t.strictEqual( typeof Float64Results.descriptionOf, 'function', 'returns expected value' );
	t.end();
});

tape( 'the constructor has an `isStruct` method', function test( t ) {
	t.strictEqual( typeof Float64Results.isStruct, 'function', 'returns expected value' );
	t.end();
});

tape( 'the constructor has a `viewOf` method', function test( t ) {
	t.strictEqual( typeof Float64Results.viewOf, 'function', 'returns expected value' );
	t.end();
});
