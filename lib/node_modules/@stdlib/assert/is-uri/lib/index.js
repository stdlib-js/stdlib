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

/**
* Test if a value is a URI.
*
* @module @stdlib/assert/is-uri
*
* @example
* var isURI = require( '@stdlib/assert/is-uri' );
*
* var bool = isURI( 'http://google.com' );
* // returns true
*
* bool = isURI( 'http://localhost/' );
* // returns true
*
* bool = isURI( 'http://example.w3.org/path%20with%20spaces.html' );
* // returns true
*
* bool = isURI( 'http://example.w3.org/%20' );
* // returns true
*
* bool = isURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
* // returns true
*
* bool = isURI( 'ftp://ftp.is.co.za/../../../rfc/rfc1808.txt' );
* // returns true
*
* bool = isURI( 'http://www.ietf.org/rfc/rfc2396.txt' );
* // returns true
*
* bool = isURI( 'ldap://[2001:db8::7]/c=GB?objectClass?one' );
* // returns true
*
* bool = isURI( 'mailto:John.Doe@example.com' );
* // returns true
*
* bool = isURI( 'news:comp.infosystems.www.servers.unix' );
* // returns true
*
* bool = isURI( 'tel:+1-816-555-1212' );
* // returns true
*
* bool = isURI( 'telnet://192.0.2.16:80/' );
* // returns true
*
* bool = isURI( 'urn:oasis:names:specification:docbook:dtd:xml:4.1.2' );
* // returns true
*
* // No scheme:
* bool = isURI( '' );
* // returns false
*
* // No scheme:
* bool = isURI( 'foo' );
* // returns false
*
* // No scheme:
* bool = isURI( 'foo@bar' );
* // returns false
*
* // No scheme:
* bool = isURI( '://foo/' );
* // returns false
*
* // Illegal characters:
* bool = isURI( 'http://<foo>' );
* // returns false
*
* // Invalid path:
* bool = isURI( 'http:////foo.html' );
* // returns false
*
* // Incomplete hex escapes...
* bool = isURI( 'http://example.w3.org/%a' );
* // returns false
*
* bool = isURI( 'http://example.w3.org/%a/foo' );
* // returns false
*
* bool = isURI( 'http://example.w3.org/%at' );
* // returns false
*/

// MODULES //

var isURI = require( './main.js' );


// EXPORTS //

module.exports = isURI;
