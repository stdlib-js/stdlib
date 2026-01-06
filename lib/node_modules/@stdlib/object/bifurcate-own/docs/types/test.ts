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

import bifurcateOwn = require( './index' );

const predicate = ( v: Array<any> ): boolean => v[ 0 ] === 'b';

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

// The function return an array of arrays...
{
	const obj = new Foo();
	bifurcateOwn( obj, predicate ); // $ExpectType any[][]
	bifurcateOwn( {}, predicate ); // $ExpectType any[][]
	const opts = {
		'returns': 'indices' as 'indices'
	};
	bifurcateOwn( obj, opts, predicate ); // $ExpectType any[][]
}

// The compiler throws an error if the function is provided a last argument which is not a function...
{
	const obj = new Foo();
	bifurcateOwn( obj, false ); // $ExpectError
	bifurcateOwn( obj, true ); // $ExpectError
	bifurcateOwn( obj, 32 ); // $ExpectError
	bifurcateOwn( obj, 'abc' ); // $ExpectError
	bifurcateOwn( obj, [] ); // $ExpectError
	bifurcateOwn( obj, {} ); // $ExpectError

	bifurcateOwn( obj, {}, false ); // $ExpectError
	bifurcateOwn( obj, {}, true ); // $ExpectError
	bifurcateOwn( obj, {}, 32 ); // $ExpectError
	bifurcateOwn( obj, {}, 'abc' ); // $ExpectError
	bifurcateOwn( obj, {}, [] ); // $ExpectError
	bifurcateOwn( obj, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const obj = new Foo();
	bifurcateOwn( obj, null, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided a `returns` option which is not one of 'indices', 'values', or '*'...
{
	const obj = new Foo();
	bifurcateOwn( obj, { 'returns': '5' }, predicate ); // $ExpectError
	bifurcateOwn( obj, { 'returns': 123 }, predicate ); // $ExpectError
	bifurcateOwn( obj, { 'returns': [] }, predicate ); // $ExpectError
	bifurcateOwn( obj, { 'returns': {} }, predicate ); // $ExpectError
	bifurcateOwn( obj, { 'returns': ( x: number ): number => x }, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const obj = new Foo();
	bifurcateOwn(); // $ExpectError
	bifurcateOwn( obj ); // $ExpectError
	bifurcateOwn( obj, {}, predicate, 16 ); // $ExpectError
}
