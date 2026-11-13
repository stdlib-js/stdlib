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

var get = require( './../lib' );

var doc = {
	'foo': [ 'bar', 'baz' ],
	'': 0,
	'a/b': 1,
	'm~n': 8
};

var out = get( doc, '/foo' );
console.log( out );
// => [ 'bar', 'baz' ]

out = get( doc, '/foo/0' );
console.log( out );
// => 'bar'

out = get( doc, '/' );
console.log( out );
// => 0

out = get( doc, '/a~1b' );
console.log( out );
// => 1

out = get( doc, '/m~0n' );
console.log( out );
// => 8

out = get( doc, '' );
console.log( out );
// => { 'foo': [ 'bar', 'baz' ], '': 0, 'a/b': 1, 'm~n': 8 }
