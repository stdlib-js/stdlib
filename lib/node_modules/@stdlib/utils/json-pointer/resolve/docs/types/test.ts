/*
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

import resolve = require( './index' );


// TESTS //

// The function returns a resolve result object...
{
	resolve( { 'foo': 'bar' }, '/foo' ); // $ExpectType ResolveResult
	resolve( [ 1, 2, 3 ], '/0' ); // $ExpectType ResolveResult
	resolve( { 'foo': 'bar' }, '' ); // $ExpectType ResolveResult
}

// The compiler throws an error if the function is provided a first argument which is not an object or array...
{
	resolve( 'abc', '/foo' ); // $ExpectError
	resolve( 123, '/foo' ); // $ExpectError
	resolve( true, '/foo' ); // $ExpectError
	resolve( null, '/foo' ); // $ExpectError
	resolve( undefined, '/foo' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	resolve( { 'foo': 'bar' }, 123 ); // $ExpectError
	resolve( { 'foo': 'bar' }, true ); // $ExpectError
	resolve( { 'foo': 'bar' }, false ); // $ExpectError
	resolve( { 'foo': 'bar' }, null ); // $ExpectError
	resolve( { 'foo': 'bar' }, undefined ); // $ExpectError
	resolve( { 'foo': 'bar' }, [] ); // $ExpectError
	resolve( { 'foo': 'bar' }, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	resolve(); // $ExpectError
	resolve( { 'foo': 'bar' } ); // $ExpectError
	resolve( { 'foo': 'bar' }, '/foo', 'extra' ); // $ExpectError
}
