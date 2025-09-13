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
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Float64Array = require( '@stdlib/array/float64' );
var isBetweenArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isBetweenArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an unrecognized `left` argument', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'left',
		'right',
		'ope',
		'close',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
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
			isBetweenArray( [ 3, 4, 5 ], 3, 5, value, 'closed' );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized `right` argument', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'left',
		'right',
		'ope',
		'close',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
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
			isBetweenArray( [ 3, 4, 5 ], 3, 5, 'closed', value );
		};
	}
});

tape( 'the function returns `true` if provided an array-like object where every element is between two values (default)', function test( t ) {
	var arr;

	arr = new Int32Array( [ 3, 4, 5 ] );
	t.strictEqual( isBetweenArray( arr, 3, 5 ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 3, 5 ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 3, 5 ), true, 'returns expected value' );

	arr = [ 'a', 'b', 'c' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c' ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 'a', 'c' ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 'a', 'c' ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if provided an array-like object where every element is between two values (closed,closed)', function test( t ) {
	var arr;

	arr = new Int16Array( [ 3, 4, 5 ] );
	t.strictEqual( isBetweenArray( arr, 3, 5, 'closed', 'closed' ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 3, 5, 'closed', 'closed' ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 3, 5, 'closed', 'closed' ), true, 'returns expected value' );

	arr = [ 'a', 'b', 'c' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'closed', 'closed' ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'closed', 'closed' ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'closed', 'closed' ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if provided an array-like object where every element is between two values (open,closed)', function test( t ) {
	var arr;

	arr = new Uint32Array( [ 4, 5 ] );
	t.strictEqual( isBetweenArray( arr, 3, 5, 'open', 'closed' ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 3, 5, 'open', 'closed' ), true, 'returns expected value' );

	arr = [ 'b', 'c' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'open', 'closed' ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'open', 'closed' ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if provided an array-like object where every element is between two values (closed,open)', function test( t ) {
	var arr;

	arr = new Uint16Array( [ 3, 4 ] );
	t.strictEqual( isBetweenArray( arr, 3, 5, 'closed', 'open' ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 3, 5, 'closed', 'open' ), true, 'returns expected value' );

	arr = [ 'a', 'b' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'closed', 'open' ), true, 'returns expected value' );
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'closed', 'open' ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` if provided an array-like object where every element is between two values (open,open)', function test( t ) {
	var arr;

	arr = new Int8Array( [ 4 ] );
	t.strictEqual( isBetweenArray( arr, 3, 5, 'open', 'open' ), true, 'returns expected value' );

	arr = [ 'b' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'open', 'open' ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if not provided an array-like object where every element is between two values (default)', function test( t ) {
	var arr;

	arr = new Uint8Array( [ 2 ] );
	t.strictEqual( isBetweenArray( arr, 3, 5 ), false, 'returns expected value' );

	arr = new Uint8ClampedArray( [ 6 ] );
	t.strictEqual( isBetweenArray( arr, 3, 5 ), false, 'returns expected value' );

	arr = [ 'a' ];
	t.strictEqual( isBetweenArray( arr, 'b', 'c' ), false, 'returns expected value' );

	arr = [ 'd' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c' ), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if not provided an array-like object where every element is between two values (closed,closed)', function test( t ) {
	var arr;

	arr = {
		'length': 1,
		'0': 2
	};
	t.strictEqual( isBetweenArray( arr, 3, 5, 'closed', 'closed' ), false, 'returns expected value' );

	arr = [ 6 ];
	t.strictEqual( isBetweenArray( arr, 3, 5, 'closed', 'closed' ), false, 'returns expected value' );

	arr = [ 'a' ];
	t.strictEqual( isBetweenArray( arr, 'b', 'c', 'closed', 'closed' ), false, 'returns expected value' );

	arr = [ 'd' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'closed', 'closed' ), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if not provided an array-like object where every element is between two values (open,closed)', function test( t ) {
	var arr;

	arr = [ 2 ];
	t.strictEqual( isBetweenArray( arr, 3, 5, 'open', 'closed' ), false, 'returns expected value' );

	arr = [ 3 ];
	t.strictEqual( isBetweenArray( arr, 3, 5, 'open', 'closed' ), false, 'returns expected value' );

	arr = [ 6 ];
	t.strictEqual( isBetweenArray( arr, 3, 5, 'open', 'closed' ), false, 'returns expected value' );

	arr = [ 'a' ];
	t.strictEqual( isBetweenArray( arr, 'b', 'c', 'open', 'closed' ), false, 'returns expected value' );

	arr = [ 'a' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'open', 'closed' ), false, 'returns expected value' );

	arr = [ 'd' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'open', 'closed' ), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if not provided an array-like object where every element is between two values (closed,open)', function test( t ) {
	var arr;

	arr = [ 2 ];
	t.strictEqual( isBetweenArray( arr, 3, 5, 'closed', 'open' ), false, 'returns expected value' );

	arr = [ 5 ];
	t.strictEqual( isBetweenArray( arr, 3, 5, 'closed', 'open' ), false, 'returns expected value' );

	arr = [ 6 ];
	t.strictEqual( isBetweenArray( arr, 3, 5, 'closed', 'open' ), false, 'returns expected value' );

	arr = [ 'a' ];
	t.strictEqual( isBetweenArray( arr, 'b', 'c', 'closed', 'open' ), false, 'returns expected value' );

	arr = [ 'c' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'closed', 'open' ), false, 'returns expected value' );

	arr = [ 'd' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'closed', 'open' ), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if not provided an array-like object where every element is between two values (open,open)', function test( t ) {
	var arr;

	arr = [ 2 ];
	t.strictEqual( isBetweenArray( arr, 3, 5, 'open', 'open' ), false, 'returns expected value' );

	arr = [ 3 ];
	t.strictEqual( isBetweenArray( arr, 3, 5, 'open', 'open' ), false, 'returns expected value' );

	arr = [ 5 ];
	t.strictEqual( isBetweenArray( arr, 3, 5, 'open', 'open' ), false, 'returns expected value' );

	arr = [ 6 ];
	t.strictEqual( isBetweenArray( arr, 3, 5, 'open', 'open' ), false, 'returns expected value' );

	arr = [ 'a' ];
	t.strictEqual( isBetweenArray( arr, 'b', 'c', 'open', 'open' ), false, 'returns expected value' );

	arr = [ 'a' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'open', 'open' ), false, 'returns expected value' );

	arr = [ 'c' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'open', 'open' ), false, 'returns expected value' );

	arr = [ 'd' ];
	t.strictEqual( isBetweenArray( arr, 'a', 'c', 'open', 'open' ), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided an empty array-like object', function test( t ) {
	var arr;

	arr = [];
	t.strictEqual( isBetweenArray( arr, 0.0, 1.0 ), false, 'returns expected value' );

	arr = [];
	t.strictEqual( isBetweenArray( arr, 0.0, 1.0, 'closed', 'closed' ), false, 'returns expected value' );

	arr = [];
	t.strictEqual( isBetweenArray( arr, 0.0, 1.0, 'open', 'closed' ), false, 'returns expected value' );

	arr = [];
	t.strictEqual( isBetweenArray( arr, 0.0, 1.0, 'closed', 'open' ), false, 'returns expected value' );

	arr = [];
	t.strictEqual( isBetweenArray( arr, 0.0, 1.0, 'open', 'open' ), false, 'returns expected value' );

	arr = new Float64Array();
	t.strictEqual( isBetweenArray( arr, 0.0, 1.0 ), false, 'returns expected value' );

	arr = {
		'length': 0
	};
	t.strictEqual( isBetweenArray( arr, 0.0, 1.0 ), false, 'returns expected value' );

	arr = '';
	t.strictEqual( isBetweenArray( arr, 'a', 'c' ), false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if not provided an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isBetweenArray( values[ i ], 0.0, 1.0 ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
