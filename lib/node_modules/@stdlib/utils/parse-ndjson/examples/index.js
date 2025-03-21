/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isError = require( '@stdlib/assert/is-error' );
var parseNDJSON = require( './../lib' );

var str = '{"name":"John"}\n{"name":"Doe"}';

// Example 1: Parse a simple NDJSON string
var out = parseNDJSON( str );
console.log( out );
// => [ { 'name': 'John' }, { 'name': 'Doe' } ]

// Example 2: Parse an NDJSON string with a reviver function
function reviver( key, value ) {
	if ( key === 'name' ) {
		return value.toUpperCase();
	}
	return value;
}

out = parseNDJSON( str, reviver );
console.log( out );
// => [ { 'name': 'JOHN' }, { 'name': 'DOE' } ]

// Example 3: Parse an NDJSON string with an error (missing closing double quote)
str = '{"name":John}\n{"name":Doe}';
out = parseNDJSON( str );
console.log( isError( out ) );
// => true

// Example 4: Parse an empty NDJSON string
str = '';
out = parseNDJSON( str );
console.log( out );
// => []

// Example 5: Parse an NDJSON string with a single empty object
str = '{}';
out = parseNDJSON( str );
console.log( out );
// => [ {} ]

// Example 6: Parse an NDJSON string with different data types
str = '{"name":"Eve"}\n42\ntrue\n[1,2,3]\r\n';
out = parseNDJSON( str );
console.log( out );
// => [ { 'name': 'Eve' }, 42, true, [1,2,3] ]

// Example 7: Parse a simple NDJSON string, followed by a trailing newline
str = '{"name":"John"}\n{"name":"Doe"}\n';
out = parseNDJSON( str );
console.log( out );
// => [ { 'name': 'John' }, { 'name': 'Doe' } ]

// Example 8: Parse a simple NDJSON string, with alternate newline characters
str = '{"beep":"boop"}\r\n{"foo":"baz"}';
out = parseNDJSON( str );
console.log( out );
// => [ { 'beep': 'boop' }, { 'foo': 'baz' } ]
