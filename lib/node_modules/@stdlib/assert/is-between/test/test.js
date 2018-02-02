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
var isBetween = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isBetween, 'function', 'main export is a function' );
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
		undefined,
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
			isBetween( 4, 3, 5, value, 'closed' );
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
		undefined,
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
			isBetween( 4, 3, 5, 'closed', value );
		};
	}
});

tape( 'the function returns `true` if provided a value which is between two values (default)', function test( t ) {
	t.strictEqual( isBetween( 4, 3, 5 ), true, 'returns true' );
	t.strictEqual( isBetween( 3, 3, 5 ), true, 'returns true' );
	t.strictEqual( isBetween( 5, 3, 5 ), true, 'returns true' );
	t.strictEqual( isBetween( 'b', 'a', 'c' ), true, 'returns true' );
	t.strictEqual( isBetween( 'a', 'a', 'c' ), true, 'returns true' );
	t.strictEqual( isBetween( 'c', 'a', 'c' ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided a value which is between two values (closed,closed)', function test( t ) {
	t.strictEqual( isBetween( 4, 3, 5, 'closed', 'closed' ), true, 'returns true' );
	t.strictEqual( isBetween( 3, 3, 5, 'closed', 'closed' ), true, 'returns true' );
	t.strictEqual( isBetween( 5, 3, 5, 'closed', 'closed' ), true, 'returns true' );
	t.strictEqual( isBetween( 'b', 'a', 'c', 'closed', 'closed' ), true, 'returns true' );
	t.strictEqual( isBetween( 'a', 'a', 'c', 'closed', 'closed' ), true, 'returns true' );
	t.strictEqual( isBetween( 'c', 'a', 'c', 'closed', 'closed' ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided a value which is between two values (open,closed)', function test( t ) {
	t.strictEqual( isBetween( 4, 3, 5, 'open', 'closed' ), true, 'returns true' );
	t.strictEqual( isBetween( 5, 3, 5, 'open', 'closed' ), true, 'returns true' );
	t.strictEqual( isBetween( 'b', 'a', 'c', 'open', 'closed' ), true, 'returns true' );
	t.strictEqual( isBetween( 'c', 'a', 'c', 'open', 'closed' ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided a value which is between two values (closed,open)', function test( t ) {
	t.strictEqual( isBetween( 4, 3, 5, 'closed', 'open' ), true, 'returns true' );
	t.strictEqual( isBetween( 3, 3, 5, 'closed', 'open' ), true, 'returns true' );
	t.strictEqual( isBetween( 'b', 'a', 'c', 'closed', 'open' ), true, 'returns true' );
	t.strictEqual( isBetween( 'a', 'a', 'c', 'closed', 'open' ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided a value which is between two values (open,open)', function test( t ) {
	t.strictEqual( isBetween( 4, 3, 5, 'open', 'open' ), true, 'returns true' );
	t.strictEqual( isBetween( 'b', 'a', 'c', 'open', 'open' ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided a value which is between two values (default)', function test( t ) {
	t.strictEqual( isBetween( 2, 3, 5 ), false, 'returns false' );
	t.strictEqual( isBetween( 6, 3, 5 ), false, 'returns false' );
	t.strictEqual( isBetween( 'a', 'b', 'c' ), false, 'returns false' );
	t.strictEqual( isBetween( 'd', 'a', 'c' ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a value which is between two values (closed,closed)', function test( t ) {
	t.strictEqual( isBetween( 2, 3, 5, 'closed', 'closed' ), false, 'returns false' );
	t.strictEqual( isBetween( 6, 3, 5, 'closed', 'closed' ), false, 'returns false' );
	t.strictEqual( isBetween( 'a', 'b', 'c', 'closed', 'closed' ), false, 'returns false' );
	t.strictEqual( isBetween( 'd', 'a', 'c', 'closed', 'closed' ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a value which is between two values (open,closed)', function test( t ) {
	t.strictEqual( isBetween( 2, 3, 5, 'open', 'closed' ), false, 'returns false' );
	t.strictEqual( isBetween( 3, 3, 5, 'open', 'closed' ), false, 'returns false' );
	t.strictEqual( isBetween( 6, 3, 5, 'open', 'closed' ), false, 'returns false' );
	t.strictEqual( isBetween( 'a', 'b', 'c', 'open', 'closed' ), false, 'returns false' );
	t.strictEqual( isBetween( 'a', 'a', 'c', 'open', 'closed' ), false, 'returns false' );
	t.strictEqual( isBetween( 'd', 'a', 'c', 'open', 'closed' ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a value which is between two values (closed,open)', function test( t ) {
	t.strictEqual( isBetween( 2, 3, 5, 'closed', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 5, 3, 5, 'closed', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 6, 3, 5, 'closed', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 'a', 'b', 'c', 'closed', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 'c', 'a', 'c', 'closed', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 'd', 'a', 'c', 'closed', 'open' ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a value which is between two values (open,open)', function test( t ) {
	t.strictEqual( isBetween( 2, 3, 5, 'open', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 3, 3, 5, 'open', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 5, 3, 5, 'open', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 6, 3, 5, 'open', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 'a', 'b', 'c', 'open', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 'a', 'a', 'c', 'open', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 'c', 'a', 'c', 'open', 'open' ), false, 'returns false' );
	t.strictEqual( isBetween( 'd', 'a', 'c', 'open', 'open' ), false, 'returns false' );
	t.end();
});
