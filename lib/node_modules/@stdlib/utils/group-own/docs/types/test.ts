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

import groupOwn = require( './index' );

const indicator = ( v: string ): string => v[ 0 ];

/**
* A class for instantiating objects with `a` and `b` dummy properties.
*/
class Foo {
	/**
	* String property.
	*/
	a: string;

	/**
	* String property.
	*/
	b: string;

	constructor() {
		this.a = 'beep';
		this.b = 'boop';
	}
}


// TESTS //

// The function returns an object...
{
	const obj = new Foo();
	groupOwn( obj, indicator ); // $ExpectType any
	groupOwn( {}, indicator ); // $ExpectType any
	const opts = {
		'returns': 'indices' as 'indices'
	};
	groupOwn( obj, opts, indicator ); // $ExpectType any
}

// The compiler throws an error if the function is provided a last argument which is not a function...
{
	const obj = new Foo();
	groupOwn( obj, false ); // $ExpectError
	groupOwn( obj, true ); // $ExpectError
	groupOwn( obj, 32 ); // $ExpectError
	groupOwn( obj, 'abc' ); // $ExpectError
	groupOwn( obj, [] ); // $ExpectError
	groupOwn( obj, {} ); // $ExpectError

	groupOwn( obj, {}, false ); // $ExpectError
	groupOwn( obj, {}, true ); // $ExpectError
	groupOwn( obj, {}, 32 ); // $ExpectError
	groupOwn( obj, {}, 'abc' ); // $ExpectError
	groupOwn( obj, {}, [] ); // $ExpectError
	groupOwn( obj, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const obj = new Foo();
	groupOwn( obj, null, indicator ); // $ExpectError
}

// The compiler throws an error if the function is provided a `returns` option which is not one of 'indices', 'values', or '*'...
{
	const obj = new Foo();
	groupOwn( obj, { 'returns': '5' }, indicator ); // $ExpectError
	groupOwn( obj, { 'returns': 123 }, indicator ); // $ExpectError
	groupOwn( obj, { 'returns': [] }, indicator ); // $ExpectError
	groupOwn( obj, { 'returns': {} }, indicator ); // $ExpectError
	groupOwn( obj, { 'returns': ( x: number ): number => x }, indicator ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const obj = new Foo();
	groupOwn(); // $ExpectError
	groupOwn( obj ); // $ExpectError
	groupOwn( obj, {}, indicator, 16 ); // $ExpectError
}
