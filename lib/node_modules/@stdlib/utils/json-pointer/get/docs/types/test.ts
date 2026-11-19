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

import get = require( './index' );


// TESTS //

// The function returns a value...
{
	get( { 'foo': 'bar' }, '/foo' ); // $ExpectType any
	get( [ 1, 2, 3 ], '/0' ); // $ExpectType any
	get( { 'foo': 'bar' }, '' ); // $ExpectType any
}

// The compiler throws an error if the function is provided a first argument which is not an object or array...
{
	get( 'abc', '/foo' ); // $ExpectError
	get( 123, '/foo' ); // $ExpectError
	get( true, '/foo' ); // $ExpectError
	get( null, '/foo' ); // $ExpectError
	get( undefined, '/foo' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	get( { 'foo': 'bar' }, 123 ); // $ExpectError
	get( { 'foo': 'bar' }, true ); // $ExpectError
	get( { 'foo': 'bar' }, false ); // $ExpectError
	get( { 'foo': 'bar' }, null ); // $ExpectError
	get( { 'foo': 'bar' }, undefined ); // $ExpectError
	get( { 'foo': 'bar' }, [] ); // $ExpectError
	get( { 'foo': 'bar' }, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	get(); // $ExpectError
	get( { 'foo': 'bar' } ); // $ExpectError
	get( { 'foo': 'bar' }, '/foo', 'extra' ); // $ExpectError
}
