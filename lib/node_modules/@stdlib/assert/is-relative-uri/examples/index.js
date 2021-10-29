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

var isRelativeURI = require( './../lib' );

var bool = isRelativeURI( './foo.js' );
console.log( bool );
// => true

bool = isRelativeURI( '/dashboard/admin' );
console.log( bool );
// => true

bool = isRelativeURI( 'image.png' );
console.log( bool );
// => true

bool = isRelativeURI( 'http://www.example.com/' );
console.log( bool );
// => false

bool = isRelativeURI( 'https://www.example.com/' );
console.log( bool );
// => false

bool = isRelativeURI( 'ftp://ftp.is.co.za/rfc/rfc1808.txt' );
console.log( bool );
// => false

bool = isRelativeURI( 'data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D' );
console.log( bool );
// => false

bool = isRelativeURI( 'mailto:beep@boop.com' );
console.log( bool );
// => false

bool = isRelativeURI( null );
console.log( bool );
// => false
