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

var isURI = require( './../lib' );

/* Valid */

var bool = isURI( 'http://google.com' );
console.log( bool );
// => true

bool = isURI( 'http://localhost/' );
console.log( bool );
// => true

bool = isURI( 'http://example.w3.org/path%20with%20spaces.html' );
console.log( bool );
// => true

bool = isURI( 'http://example.w3.org/%20' );
console.log( bool );
// => true

bool = isURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
console.log( bool );
// => true

bool = isURI( 'ftp://ftp.is.co.za/../../../rfc/rfc1808.txt' );
console.log( bool );
// => true

bool = isURI( 'http://www.ietf.org/rfc/rfc2396.txt' );
console.log( bool );
// => true

bool = isURI( 'ldap://[2001:db8::7]/c=GB?objectClass?one' );
console.log( bool );
// => true

bool = isURI( 'mailto:John.Doe@example.com' );
console.log( bool );
// => true

bool = isURI( 'news:comp.infosystems.www.servers.unix' );
console.log( bool );
// => true

bool = isURI( 'tel:+1-816-555-1212' );
console.log( bool );
// => true

bool = isURI( 'telnet://192.0.2.16:80/' );
console.log( bool );
// => true

bool = isURI( 'urn:oasis:names:specification:docbook:dtd:xml:4.1.2' );
console.log( bool );
// => true

/* Invalid */

// No scheme:
bool = isURI( '' );
console.log( bool );
// => false

// No scheme:
bool = isURI( 'foo' );
console.log( bool );
// => false

// No scheme:
bool = isURI( 'foo@bar' );
console.log( bool );
// => false

// No scheme:
bool = isURI( '://foo/' );
console.log( bool );
// => false

// Illegal characters:
bool = isURI( 'http://<foo>' );
console.log( bool );
// => false

// Invalid path:
bool = isURI( 'http:////foo.html' );
console.log( bool );
// => false

// Incomplete hex escapes...
bool = isURI( 'http://example.w3.org/%a' );
console.log( bool );
// => false

bool = isURI( 'http://example.w3.org/%a/foo' );
console.log( bool );
// => false

bool = isURI( 'http://example.w3.org/%at' );
console.log( bool );
// => false
