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
var isColumnMajorString = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isColumnMajorString, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided "column-major"', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		'column-major'
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = isColumnMajorString( values[ i ] );
		t.strictEqual( bool, true, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided "column-major"', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		'row-major',
		'c',
		'fortran',
		'c-style',
		'fortran-style',
		'',
		'beep',
		'boop',
		'foo',
		'bar',
		5,
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
		bool = isColumnMajorString( values[ i ] );
		t.strictEqual( bool, false, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
