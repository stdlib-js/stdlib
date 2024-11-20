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

import defineMemoizedProperty = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	defineMemoizedProperty( {}, 'foo', { 'value': (): string => 'bar' } ); // $ExpectType void
	defineMemoizedProperty( {}, 'foo', { 'configurable': true, 'enumerable': true, 'writable': true, 'value': (): string => 'bar' } ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	defineMemoizedProperty( {}, true, { 'value': (): string => 'bar' } ); // $ExpectError
	defineMemoizedProperty( {}, false, { 'value': (): string => 'bar' } ); // $ExpectError
	defineMemoizedProperty( {}, null, { 'value': (): string => 'bar' } ); // $ExpectError
	defineMemoizedProperty( {}, undefined, { 'value': (): string => 'bar' } ); // $ExpectError
	defineMemoizedProperty( {}, [], { 'value': (): string => 'bar' } ); // $ExpectError
	defineMemoizedProperty( {}, {}, { 'value': (): string => 'bar' } ); // $ExpectError
	defineMemoizedProperty( {}, ( x: number ): number => x, { 'value': (): string => 'bar' } ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid descriptor object...
{
	defineMemoizedProperty( {}, 'foo', '5' ); // $ExpectError
	defineMemoizedProperty( {}, 'foo', 5 ); // $ExpectError
	defineMemoizedProperty( {}, 'foo', true ); // $ExpectError
	defineMemoizedProperty( {}, 'foo', false ); // $ExpectError
	defineMemoizedProperty( {}, 'foo', null ); // $ExpectError
	defineMemoizedProperty( {}, 'foo', undefined ); // $ExpectError
	defineMemoizedProperty( {}, 'foo', [] ); // $ExpectError
	defineMemoizedProperty( {}, 'foo', {} ); // $ExpectError

	defineMemoizedProperty( {}, 'foo', { 'configurable': true ); // $ExpectError
	defineMemoizedProperty( {}, 'foo', { 'configurable': 'true', 'value': (): string => 'bar' } ); // $ExpectError

	defineMemoizedProperty( {}, 'foo', { 'enumerable': true ); // $ExpectError
	defineMemoizedProperty( {}, 'foo', { 'enumerable': 'true', 'value': (): string => 'bar' } ); // $ExpectError

	defineMemoizedProperty( {}, 'foo', { 'writable': true ); // $ExpectError
	defineMemoizedProperty( {}, 'foo', { 'writable': 'true', 'value': (): string => 'bar' } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	defineMemoizedProperty(); // $ExpectError
	defineMemoizedProperty( {} ); // $ExpectError
	defineMemoizedProperty( {}, 'foo' ); // $ExpectError
}
