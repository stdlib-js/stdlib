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

import setNonEnumerableReadWriteAccessor = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	setNonEnumerableReadWriteAccessor( {}, 'foo', (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	setNonEnumerableReadWriteAccessor( {}, true, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, false, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, null, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, undefined, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, [], (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, {}, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, ( x: number ): number => x, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid getter...
{
	setNonEnumerableReadWriteAccessor( {}, 'foo', '5', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', 5, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', true, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', false, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', null, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', undefined, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', [], ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', {}, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid setter...
{
	setNonEnumerableReadWriteAccessor( {}, 'foo', (): string => 'beep', '5' ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', (): string => 'beep', 5 ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', (): string => 'beep', true ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', (): string => 'beep', false ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', (): string => 'beep', null ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', (): string => 'beep', undefined ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', (): string => 'beep', [] ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', (): string => 'beep', {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	setNonEnumerableReadWriteAccessor(); // $ExpectError
	setNonEnumerableReadWriteAccessor( {} ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo' ); // $ExpectError
	setNonEnumerableReadWriteAccessor( {}, 'foo', (): string => 'beep' ); // $ExpectError
}
