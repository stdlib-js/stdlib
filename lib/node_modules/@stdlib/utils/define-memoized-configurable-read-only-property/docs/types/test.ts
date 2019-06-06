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

import setMemoizedConfigurableReadOnly = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	setMemoizedConfigurableReadOnly( {}, 'foo', (): string => 'bar' ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	setMemoizedConfigurableReadOnly( {}, true, (): string => 'bar' ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, false, (): string => 'bar' ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, null, (): string => 'bar' ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, undefined, (): string => 'bar' ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, [], (): string => 'bar' ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, {}, (): string => 'bar' ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, ( x: number ): number => x, (): string => 'bar' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a getter...
{
	setMemoizedConfigurableReadOnly( {}, 'foo', '5' ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, 'foo', 5 ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, 'foo', true ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, 'foo', false ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, 'foo', null ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, 'foo', undefined ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, 'foo', [] ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, 'foo', {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	setMemoizedConfigurableReadOnly(); // $ExpectError
	setMemoizedConfigurableReadOnly( {} ); // $ExpectError
	setMemoizedConfigurableReadOnly( {}, 'foo' ); // $ExpectError
}
