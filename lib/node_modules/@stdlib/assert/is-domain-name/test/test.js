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
var repeat = require( '@stdlib/string/repeat' );
var isDomainName = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isDomainName, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a valid domain name', function test( t ) {
	var bool;

	bool = isDomainName( 'example.com' );
	t.equal( bool, true, 'returns true' );

	bool = isDomainName( 'foo.example.com' );
	t.equal( bool, true, 'returns true' );

	bool = isDomainName( 'foo.bar.example.com' );
	t.equal( bool, true, 'returns true' );

	bool = isDomainName( 'foo.bar.baz.example.com' );
	t.equal( bool, true, 'returns true' );

	bool = isDomainName( 'foo.bar.baz.qux.example.com' );
	t.equal( bool, true, 'returns true' );

	bool = isDomainName( 'foo.bar.baz.qux.quux.example.com' );
	t.equal( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if provided an invalid domain name', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		'',
		'a',
		repeat( 'a', 256 ),
		'example',
		'example.',
		'example..com',
		'.com',
		'beeper.beeper@beep.com',
		'.example.com',
		'example.com.',
		'example.com..',
		'example-.com',
		'example-.com',
		'example.com-',
		'-example.com',
		'foo-.example.com',
		'foo.-example.com',
		'example.com.foo-',
		'foo.bar-.example.com',
		'foo.bar-.beep.example.com',
		'foo.bar.beep-.example.com',
		'foo..example.com',
		'foo.example..com',
		'foo.bar.example..com',
		'foo.bar.beep.example..com',
		'foo.bar.baz.beep.example..com',
		'foo.bar.baz.qux.beep.example..com',
		'foo.bar.baz.qux.quux.beep.example..com',
		'bar.&example.com'
	];

	for ( i = 0; i < values.length; i++ ) {
		bool = isDomainName( values[i] );
		t.equal( bool, false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a string', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
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
		bool = isDomainName( values[i] );
		t.equal( bool, false, 'returns false when provided '+values[i] );
	}
	t.end();
});
