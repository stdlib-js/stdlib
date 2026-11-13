/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var parse = require( './../lib' );

var tokens = parse( '/foo/bar' );
console.log( tokens );
// => [ 'foo', 'bar' ]

tokens = parse( '/foo/0' );
console.log( tokens );
// => [ 'foo', '0' ]

tokens = parse( '/a~1b/c~0d' );
console.log( tokens );
// => [ 'a/b', 'c~d' ]

tokens = parse( '/~01' );
console.log( tokens );
// => [ '~1' ]

tokens = parse( '/' );
console.log( tokens );
// => [ '' ]

tokens = parse( '' );
console.log( tokens );
// => []
