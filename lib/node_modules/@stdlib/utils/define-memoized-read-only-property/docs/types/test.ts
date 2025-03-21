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

import setMemoizedReadOnly = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	setMemoizedReadOnly( {}, 'foo', (): string => 'bar' ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	setMemoizedReadOnly( {}, true, (): string => 'bar' ); // $ExpectError
	setMemoizedReadOnly( {}, false, (): string => 'bar' ); // $ExpectError
	setMemoizedReadOnly( {}, null, (): string => 'bar' ); // $ExpectError
	setMemoizedReadOnly( {}, undefined, (): string => 'bar' ); // $ExpectError
	setMemoizedReadOnly( {}, [], (): string => 'bar' ); // $ExpectError
	setMemoizedReadOnly( {}, {}, (): string => 'bar' ); // $ExpectError
	setMemoizedReadOnly( {}, ( x: number ): number => x, (): string => 'bar' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a getter...
{
	setMemoizedReadOnly( {}, 'foo', '5' ); // $ExpectError
	setMemoizedReadOnly( {}, 'foo', 5 ); // $ExpectError
	setMemoizedReadOnly( {}, 'foo', true ); // $ExpectError
	setMemoizedReadOnly( {}, 'foo', false ); // $ExpectError
	setMemoizedReadOnly( {}, 'foo', null ); // $ExpectError
	setMemoizedReadOnly( {}, 'foo', undefined ); // $ExpectError
	setMemoizedReadOnly( {}, 'foo', [] ); // $ExpectError
	setMemoizedReadOnly( {}, 'foo', {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	setMemoizedReadOnly(); // $ExpectError
	setMemoizedReadOnly( {} ); // $ExpectError
	setMemoizedReadOnly( {}, 'foo' ); // $ExpectError
}
