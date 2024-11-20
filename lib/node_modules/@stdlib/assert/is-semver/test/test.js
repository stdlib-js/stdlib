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
var isSemVer = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSemVer, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a semantic version string', function test( t ) {
	t.equal( isSemVer( '1.0.0' ), true, 'returns expected value' );
	t.equal( isSemVer( '1.0.0-alpha.1' ), true, 'returns expected value' );
	t.equal( isSemVer( '1.0.0-beta.1.2.3' ), true, 'returns expected value' );
	t.equal( isSemVer( '1.0.0-alpha.1.2.3+build.foo.bar.baz' ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided a semantic version string', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'1.0',
		1,
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
		t.equal( isSemVer( values[i] ), false, 'returns expected value when provided '+values[i] );
	}
	t.end();
});
