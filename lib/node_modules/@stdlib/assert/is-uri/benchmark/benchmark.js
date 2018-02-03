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

/* eslint-disable no-empty-function */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var isURI = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var bool;
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
		'urn:oasis:names:specification:docbook:dtd:xml:4.1.2',
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
		'foo@bar',
		'://foo/',
		'1http://foo',
		'http://<foo>',
		'http:////foo.html',
		'http://example.w3.org/%illegal.html',
		'http://example.w3.org/%a',
		'http://example.w3.org/%a/foo',
		'http://example.w3.org/%at'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isURI( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});
