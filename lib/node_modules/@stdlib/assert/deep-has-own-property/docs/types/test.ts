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

import deepHasOwnProp = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepHasOwnProp( obj, 'a.b.c' ); // $ExpectType boolean
	deepHasOwnProp( obj, 'a.b.d' ); // $ExpectType boolean
	deepHasOwnProp( obj, 'a/b/c', { 'sep': '/' } ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a second argument which is neither a string nor an array of strings...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepHasOwnProp( obj, {} ); // $ExpectError
	deepHasOwnProp( obj, false ); // $ExpectError
	deepHasOwnProp( obj, true ); // $ExpectError
	deepHasOwnProp( obj, null ); // $ExpectError
	deepHasOwnProp( obj, 123 ); // $ExpectError
	deepHasOwnProp( obj, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepHasOwnProp( obj, 'a.b.c', 'abc' ); // $ExpectError
	deepHasOwnProp( obj, 'a.b.c', false ); // $ExpectError
	deepHasOwnProp( obj, 'a.b.c', true ); // $ExpectError
	deepHasOwnProp( obj, 'a.b.c', null ); // $ExpectError
	deepHasOwnProp( obj, 'a.b.c', 123 ); // $ExpectError
	deepHasOwnProp( obj, 'a.b.c', [] ); // $ExpectError
	deepHasOwnProp( obj, 'a.b.c', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `sep` option which is not a string...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepHasOwnProp( obj, 'a/b/c', { 'sep': 123 } ); // $ExpectError
	deepHasOwnProp( obj, 'a/b/c', { 'sep': true } ); // $ExpectError
	deepHasOwnProp( obj, 'a/b/c', { 'sep': false } ); // $ExpectError
	deepHasOwnProp( obj, 'a/b/c', { 'sep': {} } ); // $ExpectError
	deepHasOwnProp( obj, 'a/b/c', { 'sep': [] } ); // $ExpectError
	deepHasOwnProp( obj, 'a/b/c', { 'sep': ( x: number ): number => x } ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	deepHasOwnProp.factory( 'a.b.c' ); // $ExpectType HasFunction
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	deepHasOwnProp.factory(); // $ExpectError
	deepHasOwnProp.factory( 'a.b.c', {}, {} ); // $ExpectError
}

// The `factory` method returns a function which returns a boolean...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	const has = deepHasOwnProp.factory( 'a.b.c' ); // $ExpectType HasFunction
	has( obj ); // $ExpectType boolean
	has( {} ); // $ExpectType boolean
}

// The compiler throws an error if the `factory` method is provided a first argument which is neither a string nor an array of strings...
{
	deepHasOwnProp.factory( {} ); // $ExpectError
	deepHasOwnProp.factory( false ); // $ExpectError
	deepHasOwnProp.factory( true ); // $ExpectError
	deepHasOwnProp.factory( null ); // $ExpectError
	deepHasOwnProp.factory( 123 ); // $ExpectError
	deepHasOwnProp.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `sep` option which is not a string...
{
	deepHasOwnProp.factory( 'a/b/c', { 'sep': true } ); // $ExpectError
	deepHasOwnProp.factory( 'a/b/c', { 'sep': false } ); // $ExpectError
	deepHasOwnProp.factory( 'a/b/c', { 'sep': 123 } ); // $ExpectError
	deepHasOwnProp.factory( 'a/b/c', { 'sep': [] } ); // $ExpectError
	deepHasOwnProp.factory( 'a/b/c', { 'sep': {} } ); // $ExpectError
	deepHasOwnProp.factory( 'a/b/c', { 'sep': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepHasOwnProp(); // $ExpectError
	deepHasOwnProp( obj ); // $ExpectError
	deepHasOwnProp( obj, 'a.b.c', {}, 123 ); // $ExpectError
}
