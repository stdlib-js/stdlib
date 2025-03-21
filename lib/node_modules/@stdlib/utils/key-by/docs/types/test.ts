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

import keyBy = require( './index' );

/**
* Dummy interface.
*/
interface Foo {
	/**
	* String indicating the name.
	*/
	name: string;

	/**
	* Number indicating a first value.
	*/
	a?: number;

	/**
	* Number indicating a second value.
	*/
	b?: number;
}

/**
* Dummy function.
*
* @param value - input value
* @returns key
*/
function toKey( value: Foo ): string {
	return value.name;
}

/**
* Dummy object.
*/
const funcs = {
	'count': 0,
	'toKey': function toKey( this: { count: number }, value: Foo ): string {
		this.count += 1;
		return value.name;
	}
};


// TESTS //

// The function returns an object...
{
	const arr = [
		{ 'name': 'beep', 'a': 1 },
		{ 'name': 'boop', 'b': 2 }
	];

	keyBy( arr, toKey ); // $ExpectType Record<Key, { name: string; a: number; b?: undefined; } | { name: string; b: number; a?: undefined; }>
	keyBy( arr, toKey, {} ); // $ExpectType Record<Key, { name: string; a: number; b?: undefined; } | { name: string; b: number; a?: undefined; }>
	keyBy( arr, funcs.toKey, { 'count': 0 } ); // $ExpectType Record<Key, { name: string; a: number; b?: undefined; } | { name: string; b: number; a?: undefined; }>
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	keyBy( 2, toKey ); // $ExpectError
	keyBy( false, toKey ); // $ExpectError
	keyBy( true, toKey ); // $ExpectError
	keyBy( {}, toKey ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	const arr = [
		{ 'name': 'beep', 'a': 1 },
		{ 'name': 'boop', 'b': 2 }
	];

	keyBy( arr, 2 ); // $ExpectError
	keyBy( arr, false ); // $ExpectError
	keyBy( arr, true ); // $ExpectError
	keyBy( arr, 'abc' ); // $ExpectError
	keyBy( arr, {} ); // $ExpectError
	keyBy( arr, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const arr = [
		{ 'name': 'beep', 'a': 1 },
		{ 'name': 'boop', 'b': 2 }
	];

	keyBy(); // $ExpectError
	keyBy( arr ); // $ExpectError
	keyBy( arr, toKey, {}, 3 ); // $ExpectError
}
