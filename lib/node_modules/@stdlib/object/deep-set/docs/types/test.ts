/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import deepSet = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepSet( obj, 'a.b.c', 'e' ); // $ExpectType boolean
	deepSet( obj, [ 'a', 'b', 'c' ], 'e' ); // $ExpectType boolean
	deepSet( obj, 'a-b-c', 'e', { 'sep': '-' } ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a second argument which is not a string or array of strings...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepSet( obj, true, 'e' ); // $ExpectError
	deepSet( obj, false, 'e' ); // $ExpectError
	deepSet( obj, 2.12, 'e' ); // $ExpectError
	deepSet( obj, {}, 'e' ); // $ExpectError
	deepSet( obj, [ 1, 2, 3 ], 'e' ); // $ExpectError
	deepSet( obj, ( x: number ): number => x, 'e' ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an object...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepSet( obj, 'a.b.c', 'e', null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `create` option which is not a boolean...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepSet( obj, 'a.b.c', 'e', { 'create': 'abc' } ); // $ExpectError
	deepSet( obj, 'a.b.c', 'e', { 'create': 123 } ); // $ExpectError
	deepSet( obj, 'a.b.c', 'e', { 'create': null } ); // $ExpectError
	deepSet( obj, 'a.b.c', 'e', { 'create': [] } ); // $ExpectError
	deepSet( obj, 'a.b.c', 'e', { 'create': {} } ); // $ExpectError
	deepSet( obj, 'a.b.c', 'e', { 'create': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `sep` option which is not a string...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepSet( obj, 'a.b.c', 'e', { 'sep': true } ); // $ExpectError
	deepSet( obj, 'a.b.c', 'e', { 'sep': false } ); // $ExpectError
	deepSet( obj, 'a.b.c', 'e', { 'sep': 123 } ); // $ExpectError
	deepSet( obj, 'a.b.c', 'e', { 'sep': null } ); // $ExpectError
	deepSet( obj, 'a.b.c', 'e', { 'sep': [] } ); // $ExpectError
	deepSet( obj, 'a.b.c', 'e', { 'sep': {} } ); // $ExpectError
	deepSet( obj, 'a.b.c', 'e', { 'sep': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided fewer than three arguments...
{
	deepSet(); // $ExpectError
	deepSet( {} ); // $ExpectError
	deepSet( {}, 'a.b.c' ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	deepSet.factory( 'a.b.c' ); // $ExpectType Unary
	deepSet.factory( 'a.b.c', {} ); // $ExpectType Unary
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	deepSet.factory(); // $ExpectError
	deepSet.factory( 'a.b.c', {}, 21 ); // $ExpectError
}

// The `factory` method returns a function which returns a boolean...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	let fcn = deepSet.factory( 'a.b.c' );
	fcn( obj, 'e' ); // $ExpectType boolean

	fcn = deepSet.factory( 'a-b-c', { 'sep': '-' } );
	fcn( obj, 'e' ); // $ExpectType boolean
}

// The compiler throws an error if the `factory` method is provided a second argument which is not an object...
{
	deepSet.factory( 'a.b.c', null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `create` option which is not a boolean...
{
	deepSet.factory( 'a.b.c', { 'create': 123 } ); // $ExpectError
	deepSet.factory( 'a.b.c', { 'create': 'abc' } ); // $ExpectError
	deepSet.factory( 'a.b.c', { 'create': null } ); // $ExpectError
	deepSet.factory( 'a.b.c', { 'create': [] } ); // $ExpectError
	deepSet.factory( 'a.b.c', { 'create': {} } ); // $ExpectError
	deepSet.factory( 'a.b.c', { 'create': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `sep` option which is not a string...
{
	deepSet.factory( 'a.b.c', { 'sep': 123 } ); // $ExpectError
	deepSet.factory( 'a.b.c', { 'sep': true } ); // $ExpectError
	deepSet.factory( 'a.b.c', { 'sep': false } ); // $ExpectError
	deepSet.factory( 'a.b.c', { 'sep': null } ); // $ExpectError
	deepSet.factory( 'a.b.c', { 'sep': [] } ); // $ExpectError
	deepSet.factory( 'a.b.c', { 'sep': {} } ); // $ExpectError
	deepSet.factory( 'a.b.c', { 'sep': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	const fcn = deepSet.factory( 'a.b.c' );
	fcn(); // $ExpectError
	fcn( obj ); // $ExpectError
	fcn( obj, 'e', 2 ); // $ExpectError
}
