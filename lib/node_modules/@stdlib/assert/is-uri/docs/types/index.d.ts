/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Tests if a value is a URI.
*
* @param value - value to test
* @returns boolean indicating if a value is a URI
*
* @example
* var bool = isURI( 'http://google.com' );
* // returns true
*
* @example
* var bool = isURI( 'http://localhost/' );
* // returns true
*
* @example
* var bool = isURI( 'http://example.w3.org/path%20with%20spaces.html' );
* // returns true
*
* @example
* var bool = isURI( 'http://example.w3.org/%20' );
* // returns true
*
* @example
* var bool = isURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
* // returns true
*
* @example
* var bool = isURI( 'ftp://ftp.is.co.za/../../../rfc/rfc1808.txt' );
* // returns true
*
* @example
* var bool = isURI( 'http://www.ietf.org/rfc/rfc2396.txt' );
* // returns true
*
* @example
* var bool = isURI( 'ldap://[2001:db8::7]/c=GB?objectClass?one' );
* // returns true
*
* @example
* var bool = isURI( 'mailto:John.Doe@example.com' );
* // returns true
*
* @example
* var bool = isURI( 'news:comp.infosystems.www.servers.unix' );
* // returns true
*
* @example
* var bool = isURI( 'tel:+1-816-555-1212' );
* // returns true
*
* @example
* var bool = isURI( 'telnet://192.0.2.16:80/' );
* // returns true
*
* @example
* var bool = isURI( 'urn:oasis:names:specification:docbook:dtd:xml:4.1.2' );
* // returns true
*
* @example
* // No scheme:
* var bool = isURI( '' );
* // returns false
*
* @example
* // No scheme:
* var bool = isURI( 'foo' );
* // returns false
*
* @example
* // No scheme:
* var bool = isURI( 'foo@bar' );
* // returns false
*
* @example
* // No scheme:
* var bool = isURI( '://foo/' );
* // returns false
*
* @example
* // Illegal characters:
* var bool = isURI( 'http://<foo>' );
* // returns false
*
* @example
* // Invalid path:
* var bool = isURI( 'http:////foo.html' );
* // returns false
*
* @example
* // Incomplete hex escapes...
* var bool = isURI( 'http://example.w3.org/%a' );
* // returns false
*
* @example
* var bool = isURI( 'http://example.w3.org/%a/foo' );
* // returns false
*
* @example
* var bool = isURI( 'http://example.w3.org/%at' );
* // returns false
*/
declare function isURI( value: any ): boolean;


// EXPORTS //

export = isURI;
