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

import setNonEnumerableReadOnlyAccessor = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	setNonEnumerableReadOnlyAccessor( {}, 'foo', (): string => 'bar' ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	setNonEnumerableReadOnlyAccessor( {}, true, (): string => 'bar' ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, false, (): string => 'bar' ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, null, (): string => 'bar' ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, undefined, (): string => 'bar' ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, [], (): string => 'bar' ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, {}, (): string => 'bar' ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, ( x: number ): number => x, (): string => 'bar' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid getter...
{
	setNonEnumerableReadOnlyAccessor( {}, 'foo', '5' ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, 'foo', 5 ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, 'foo', true ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, 'foo', false ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, 'foo', null ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, 'foo', undefined ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, 'foo', [] ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, 'foo', {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	setNonEnumerableReadOnlyAccessor(); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {} ); // $ExpectError
	setNonEnumerableReadOnlyAccessor( {}, 'foo' ); // $ExpectError
}
