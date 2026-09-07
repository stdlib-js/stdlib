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

import deepGet = require( './index' );


// TESTS //

// The function returns an object...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepGet( obj, 'a.b.c' ); // $ExpectType any
	deepGet( obj, [ 'a', 'b', 'c' ] ); // $ExpectType any
	deepGet( obj, 'a-b-c', { 'sep': '-' } ); // $ExpectType any
}

// The compiler throws an error if the function is provided a second argument which is not a string or array of strings...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepGet( obj, true ); // $ExpectError
	deepGet( obj, false ); // $ExpectError
	deepGet( obj, 2.12 ); // $ExpectError
	deepGet( obj, {} ); // $ExpectError
	deepGet( obj, [ 1, 2, 3 ] ); // $ExpectError
	deepGet( obj, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepGet( obj, 'a.b.c', null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `sep` option which is not a string...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	deepGet( obj, 'a.b.c', { 'sep': true } ); // $ExpectError
	deepGet( obj, 'a.b.c', { 'sep': false } ); // $ExpectError
	deepGet( obj, 'a.b.c', { 'sep': 123 } ); // $ExpectError
	deepGet( obj, 'a.b.c', { 'sep': null } ); // $ExpectError
	deepGet( obj, 'a.b.c', { 'sep': [] } ); // $ExpectError
	deepGet( obj, 'a.b.c', { 'sep': {} } ); // $ExpectError
	deepGet( obj, 'a.b.c', { 'sep': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided no arguments...
{
	deepGet(); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	deepGet.factory( 'a.b.c' ); // $ExpectType Unary
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	deepGet.factory(); // $ExpectError
	deepGet.factory( 'a.b.c', {}, 21 ); // $ExpectError
}

// The `factory` method returns a function which returns an object...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	let fcn = deepGet.factory( 'a.b.c' );
	fcn( obj ); // $ExpectType any

	fcn = deepGet.factory( 'a-b-c', { 'sep': '-' } );
	fcn( obj ); // $ExpectType any
}

// The compiler throws an error if the `factory` method is provided a second argument which is not an object...
{
	deepGet.factory( 'a.b.c', null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `sep` option which is not a string...
{
	deepGet.factory( 'a.b.c', { 'sep': 123 } ); // $ExpectError
	deepGet.factory( 'a.b.c', { 'sep': true } ); // $ExpectError
	deepGet.factory( 'a.b.c', { 'sep': false } ); // $ExpectError
	deepGet.factory( 'a.b.c', { 'sep': null } ); // $ExpectError
	deepGet.factory( 'a.b.c', { 'sep': [] } ); // $ExpectError
	deepGet.factory( 'a.b.c', { 'sep': {} } ); // $ExpectError
	deepGet.factory( 'a.b.c', { 'sep': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const obj = { 'a': { 'b': { 'c': 'd' } } };
	const fcn = deepGet.factory( 'a.b.c' );
	fcn(); // $ExpectError
	fcn( obj, 2 ); // $ExpectError
}
