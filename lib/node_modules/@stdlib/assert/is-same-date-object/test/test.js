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
var isSameDateObject = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSameDateObject, 'function', 'main export is a function' );
	t.end();
} );

tape( 'the function returns `true` if provided two Date objects corresponding to the same date and time', function test( t ) {
	var d1;
	var d2;

	d1 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
	t.strictEqual( isSameDateObject( d1, d1 ), true, 'returns expected value' );

	d1 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
	d2 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
	t.strictEqual( isSameDateObject( d1, d2 ), true, 'returns expected value' );

	d1 = new Date( 'December 31, 2024 23:59:59:999' );
	d2 = new Date( '2024-12-31T23:59:59.999' );
	t.strictEqual( isSameDateObject( d1, d2 ), true, 'returns expected value' );

	t.end();
} );

tape( 'the function returns `false` if not provided two Date objects corresponding to the same date and time', function test( t ) {
	var d1;
	var d2;

	d1 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
	d2 = new Date( 2024, 11, 31, 23, 59, 59, 78 );
	t.strictEqual( isSameDateObject( d1, d2 ), false, 'returns expected value' );

	d1 = new Date();
	d2 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
	t.strictEqual( isSameDateObject( d1, d2 ), false, 'returns expected value' );

	d1 = new Date( 2024, 11, 31 );
	d2 = new Date( 2024, 11, 30 );
	t.strictEqual( isSameDateObject( d1, d2 ), false, 'returns expected value' );

	d1 = new Date( 2024, 11, 31 );
	d2 = 'string';
	t.strictEqual( isSameDateObject( d1, d2 ), false, 'returns expected value' );

	d1 = new Date( 2024, 11, 31 );
	d2 = 1;
	t.strictEqual( isSameDateObject( d1, d2 ), false, 'returns expected value' );

	d1 = new Date( 2024, 11, 31 );
	d2 = undefined;
	t.strictEqual( isSameDateObject( d1, d2 ), false, 'returns expected value' );

	d1 = new Date( 2024, 11, 31 );
	d2 = {};
	t.strictEqual( isSameDateObject( d1, d2 ), false, 'returns expected value' );

	d1 = new Date( 2024, 11, 31 );
	d2 = [];
	t.strictEqual( isSameDateObject( d1, d2 ), false, 'returns expected value' );

	t.end();
} );
