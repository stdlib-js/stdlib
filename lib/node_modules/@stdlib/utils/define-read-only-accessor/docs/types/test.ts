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

import setReadOnlyAccessor = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	setReadOnlyAccessor( {}, 'foo', (): string => 'bar' ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	setReadOnlyAccessor( {}, true, (): string => 'bar' ); // $ExpectError
	setReadOnlyAccessor( {}, false, (): string => 'bar' ); // $ExpectError
	setReadOnlyAccessor( {}, null, (): string => 'bar' ); // $ExpectError
	setReadOnlyAccessor( {}, undefined, (): string => 'bar' ); // $ExpectError
	setReadOnlyAccessor( {}, [], (): string => 'bar' ); // $ExpectError
	setReadOnlyAccessor( {}, {}, (): string => 'bar' ); // $ExpectError
	setReadOnlyAccessor( {}, ( x: number ): number => x, (): string => 'bar' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid getter...
{
	setReadOnlyAccessor( {}, 'foo', '5' ); // $ExpectError
	setReadOnlyAccessor( {}, 'foo', 5 ); // $ExpectError
	setReadOnlyAccessor( {}, 'foo', true ); // $ExpectError
	setReadOnlyAccessor( {}, 'foo', false ); // $ExpectError
	setReadOnlyAccessor( {}, 'foo', null ); // $ExpectError
	setReadOnlyAccessor( {}, 'foo', undefined ); // $ExpectError
	setReadOnlyAccessor( {}, 'foo', [] ); // $ExpectError
	setReadOnlyAccessor( {}, 'foo', {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	setReadOnlyAccessor(); // $ExpectError
	setReadOnlyAccessor( {} ); // $ExpectError
	setReadOnlyAccessor( {}, 'foo' ); // $ExpectError
}
