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

'use strict';

// MODULES //

var tape = require( 'tape' );
var currentYear = require( '@stdlib/time/current-year' );
var isCurrentYear = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isCurrentYear, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided the current year', function test( t ) {
	var bool = isCurrentYear( currentYear() );
	t.equal( bool, true, 'returns expected value' );

	bool = isCurrentYear( new Date() );
	t.equal( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` if provided a value which is not the current year', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'2020',
		2021,
		'',
		true,
		false,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {},
		new Date( '2019-01-01' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isCurrentYear( values[i] ), false, 'returns expected value when provided '+values[i] );
	}
	t.end();
});
