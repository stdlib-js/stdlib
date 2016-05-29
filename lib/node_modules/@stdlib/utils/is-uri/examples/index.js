'use strict';

var isURI = require( './../lib' );

// VALID //

var bool = isURI( 'http://google.com' );
console.log( bool );
// returns true

bool = isURI( 'http://localhost/' );
console.log( bool );
// returns true

bool = isURI( 'http://example.w3.org/path%20with%20spaces.html' );
console.log( bool );
// returns true

bool = isURI( 'http://example.w3.org/%20' );
console.log( bool );
// returns true

bool = isURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
console.log( bool );
// returns true

bool = isURI( 'ftp://ftp.is.co.za/../../../rfc/rfc1808.txt' );
console.log( bool );
// returns true

bool = isURI( 'http://www.ietf.org/rfc/rfc2396.txt' );
console.log( bool );
// returns true

bool = isURI( 'ldap://[2001:db8::7]/c=GB?objectClass?one' );
console.log( bool );
// returns true

bool = isURI( 'mailto:John.Doe@example.com' );
console.log( bool );
// returns true

bool = isURI( 'news:comp.infosystems.www.servers.unix' );
console.log( bool );
// returns true

bool = isURI( 'tel:+1-816-555-1212' );
console.log( bool );
// returns true

bool = isURI( 'telnet://192.0.2.16:80/' );
console.log( bool );
// returns true

bool = isURI( 'urn:oasis:names:specification:docbook:dtd:xml:4.1.2' );
console.log( bool );
// returns true


// INVALID //

// No scheme:
bool = isURI( '' );
console.log( bool );
// returns false

// No scheme:
bool = isURI( 'foo' );
console.log( bool );
// returns false

// No scheme:
bool = isURI( 'foo@bar' );
console.log( bool );
// returns false

// No scheme:
bool = isURI( '://foo/' );
console.log( bool );
// returns false

// Illegal characters:
bool = isURI( 'http://<foo>' );
console.log( bool );
// returns false

// Invalid path:
bool = isURI( 'http:////foo.html' );
console.log( bool );
// returns false

// Incomplete hex escapes...
bool = isURI( 'http://example.w3.org/%a' );
console.log( bool );
// returns false

bool = isURI( 'http://example.w3.org/%a/foo' );
console.log( bool );
// returns false

bool = isURI( 'http://example.w3.org/%at' );
console.log( bool );
// returns false
