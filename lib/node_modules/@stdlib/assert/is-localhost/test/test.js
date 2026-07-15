/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isLocalhost = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isLocalhost, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a localhost hostname', function test( t ) {
	var values;
	var i;

	values = [
		'localhost',
		'LOCALHOST',
		'127.0.0.1',
		'127.0.0.001',
		'127.0.00.1',
		'127.00.0.1',
		'127.000.000.001',
		'127.0.0.254',
		'127.63.31.15',
		'127.255.255.254'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isLocalhost( values[ i ] ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a localhost hostname', function test( t ) {
	var values;
	var i;

	values = [
		'stdlib.io',
		'www.stdlib.io',
		'servername',
		'subdomain.servername',
		'subdomain.servername.tld',
		'192.168.0.1',
		'10.1.1.123',
		null,
		void 0,
		123,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isLocalhost( values[ i ] ), false, 'returns expected value' );
	}
	t.end();
});
