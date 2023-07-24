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
var isURI = require( './../lib' );


// NOTES //

/*
* These tests use the same test URIs as [valid-url]{@link https://github.com/ogt/valid-url} (a clone of a corresponding Perl [package]{@link http://anonscm.debian.org/cgit/users/dom/libdata-validate-uri-perl.git/tree/lib/Data/Validate/URI.pm)}, which are based on examples from [RFC 3986]{@link http://tools.ietf.org/html/rfc3986}.
*/


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isURI, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a URI', function test( t ) {
	var values;
	var i;

	values = [
		'http://google.com',
		'http://localhost/',
		'http://example.w3.org/path%20with%20spaces.html',
		'http://example.w3.org/%20',
		'ftp://ftp.is.co.za/rfc/rfc1808.txt',
		'ftp://ftp.is.co.za/../../../rfc/rfc1808.txt',
		'http://www.ietf.org/rfc/rfc2396.txt',
		'ldap://[2001:db8::7]/c=GB?objectClass?one',
		'mailto:John.Doe@example.com',
		'news:comp.infosystems.www.servers.unix',
		'tel:+1-816-555-1212',
		'telnet://192.0.2.16:80/',
		'urn:oasis:names:specification:docbook:dtd:xml:4.1.2'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isURI( values[ i ] ), true, values[ i ] );
	}
	t.end();
});

tape( 'the function returns `false` if not provided a URI', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		void 0,
		true,
		NaN,
		{},
		[],
		function noop() {},
		'',
		'foo',
		'foo@bar', // no scheme
		'://foo/', // empty scheme
		'1http://foo', // invalid scheme
		'http://<foo>', // illegals
		'http:////foo.html', // invalid path
		'http://example.w3.org/%illegal.html',
		'http://example.w3.org/%a', // incomplete hex escape
		'http://example.w3.org/%a/foo', // incomplete hex escape
		'http://example.w3.org/%at' // incomplete hex escape
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isURI( values[ i ] ), false, values[ i ] );
	}
	t.end();
});
