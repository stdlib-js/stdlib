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

import setConfigurableReadOnlyAccessor = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	setConfigurableReadOnlyAccessor( {}, 'foo', (): string => 'bar' ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	setConfigurableReadOnlyAccessor( {}, true, (): string => 'bar' ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, false, (): string => 'bar' ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, null, (): string => 'bar' ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, undefined, (): string => 'bar' ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, [], (): string => 'bar' ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, {}, (): string => 'bar' ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, ( x: number ): number => x, (): string => 'bar' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid getter...
{
	setConfigurableReadOnlyAccessor( {}, 'foo', '5' ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, 'foo', 5 ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, 'foo', true ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, 'foo', false ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, 'foo', null ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, 'foo', undefined ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, 'foo', [] ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, 'foo', {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	setConfigurableReadOnlyAccessor(); // $ExpectError
	setConfigurableReadOnlyAccessor( {} ); // $ExpectError
	setConfigurableReadOnlyAccessor( {}, 'foo' ); // $ExpectError
}
