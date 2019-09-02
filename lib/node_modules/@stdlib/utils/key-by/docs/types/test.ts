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

const toKey = ( value: Foo ) => {
	return value.name;
};

// TESTS //

// The function returns an object...
{
	keyBy( [ { 'name': 'beep', 'a': 1 }, { 'name': 'boop', 'b': 2 } ], toKey ); // $ExpectType any
	keyBy( [ { 'name': 'beep', 'a': 1 }, { 'name': 'boop', 'b': 2 } ], toKey, {} ); // $ExpectType any
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
	keyBy( [ { 'name': 'beep', 'a': 1 }, { 'name': 'boop', 'b': 2 } ], 2 ); // $ExpectError
	keyBy( [ { 'name': 'beep', 'a': 1 }, { 'name': 'boop', 'b': 2 } ], false ); // $ExpectError
	keyBy( [ { 'name': 'beep', 'a': 1 }, { 'name': 'boop', 'b': 2 } ], true ); // $ExpectError
	keyBy( [ { 'name': 'beep', 'a': 1 }, { 'name': 'boop', 'b': 2 } ], 'abc' ); // $ExpectError
	keyBy( [ { 'name': 'beep', 'a': 1 }, { 'name': 'boop', 'b': 2 } ], {} ); // $ExpectError
	keyBy( [ { 'name': 'beep', 'a': 1 }, { 'name': 'boop', 'b': 2 } ], [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	keyBy(); // $ExpectError
	keyBy( [ { 'name': 'beep', 'a': 1 }, { 'name': 'boop', 'b': 2 } ] ); // $ExpectError
	keyBy( [ { 'name': 'beep', 'a': 1 }, { 'name': 'boop', 'b': 2 } ]], toKey, {}, 3 ); // $ExpectError
}
