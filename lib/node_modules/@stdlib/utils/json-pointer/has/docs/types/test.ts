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

import has = require( './index' );


// TESTS //

// The function returns a boolean...
{
	has( { 'foo': 'bar' }, '/foo' ); // $ExpectType boolean
	has( [ 1, 2, 3 ], '/0' ); // $ExpectType boolean
	has( { 'foo': 'bar' }, '' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an object or array...
{
	has( 'abc', '/foo' ); // $ExpectError
	has( 123, '/foo' ); // $ExpectError
	has( true, '/foo' ); // $ExpectError
	has( null, '/foo' ); // $ExpectError
	has( undefined, '/foo' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	has( { 'foo': 'bar' }, 123 ); // $ExpectError
	has( { 'foo': 'bar' }, true ); // $ExpectError
	has( { 'foo': 'bar' }, false ); // $ExpectError
	has( { 'foo': 'bar' }, null ); // $ExpectError
	has( { 'foo': 'bar' }, undefined ); // $ExpectError
	has( { 'foo': 'bar' }, [] ); // $ExpectError
	has( { 'foo': 'bar' }, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	has(); // $ExpectError
	has( { 'foo': 'bar' } ); // $ExpectError
	has( { 'foo': 'bar' }, '/foo', 'extra' ); // $ExpectError
}
