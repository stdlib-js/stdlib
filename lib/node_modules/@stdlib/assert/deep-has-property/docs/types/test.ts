/*
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

import deepHasProp = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepHasProp( obj, 'a.b.c' ); // $ExpectType boolean
	deepHasProp( obj, 'a.b.d' ); // $ExpectType boolean
	deepHasProp( obj, 'a/b/c', { 'sep': '/' } ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a second argument which is neither a string nor an array of strings...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepHasProp( obj, {} ); // $ExpectError
	deepHasProp( obj, false ); // $ExpectError
	deepHasProp( obj, true ); // $ExpectError
	deepHasProp( obj, null ); // $ExpectError
	deepHasProp( obj, 123 ); // $ExpectError
	deepHasProp( obj, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepHasProp( obj, 'a.b.c', 'abc' ); // $ExpectError
	deepHasProp( obj, 'a.b.c', false ); // $ExpectError
	deepHasProp( obj, 'a.b.c', true ); // $ExpectError
	deepHasProp( obj, 'a.b.c', null ); // $ExpectError
	deepHasProp( obj, 'a.b.c', 123 ); // $ExpectError
	deepHasProp( obj, 'a.b.c', [] ); // $ExpectError
	deepHasProp( obj, 'a.b.c', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `sep` option which is not a string...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepHasProp( obj, 'a/b/c', { 'sep': 123 } ); // $ExpectError
	deepHasProp( obj, 'a/b/c', { 'sep': true } ); // $ExpectError
	deepHasProp( obj, 'a/b/c', { 'sep': false } ); // $ExpectError
	deepHasProp( obj, 'a/b/c', { 'sep': {} } ); // $ExpectError
	deepHasProp( obj, 'a/b/c', { 'sep': [] } ); // $ExpectError
	deepHasProp( obj, 'a/b/c', { 'sep': ( x: number ): number => x } ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	deepHasProp.factory( 'a.b.c' ); // $ExpectType HasFunction
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	deepHasProp.factory(); // $ExpectError
	deepHasProp.factory( 'a.b.c', {}, {} ); // $ExpectError
}

// The `factory` method returns a function which returns a boolean...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	const has = deepHasProp.factory( 'a.b.c' ); // $ExpectType HasFunction
	has( obj ); // $ExpectType boolean
	has( {} ); // $ExpectType boolean
}

// The compiler throws an error if the `factory` method is provided a first argument which is neither a string nor an array of strings...
{
	deepHasProp.factory( {} ); // $ExpectError
	deepHasProp.factory( false ); // $ExpectError
	deepHasProp.factory( true ); // $ExpectError
	deepHasProp.factory( null ); // $ExpectError
	deepHasProp.factory( 123 ); // $ExpectError
	deepHasProp.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `sep` option which is not a string...
{
	deepHasProp.factory( 'a/b/c', { 'sep': true } ); // $ExpectError
	deepHasProp.factory( 'a/b/c', { 'sep': false } ); // $ExpectError
	deepHasProp.factory( 'a/b/c', { 'sep': 123 } ); // $ExpectError
	deepHasProp.factory( 'a/b/c', { 'sep': [] } ); // $ExpectError
	deepHasProp.factory( 'a/b/c', { 'sep': {} } ); // $ExpectError
	deepHasProp.factory( 'a/b/c', { 'sep': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepHasProp(); // $ExpectError
	deepHasProp( obj ); // $ExpectError
	deepHasProp( obj, 'a.b.c', {}, 123 ); // $ExpectError
}
