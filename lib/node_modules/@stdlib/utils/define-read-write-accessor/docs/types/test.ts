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

import setReadWriteAccessor = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	setReadWriteAccessor( {}, 'foo', (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	setReadWriteAccessor( {}, true, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, false, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, null, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, undefined, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, [], (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, {}, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, ( x: number ): number => x, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid getter...
{
	setReadWriteAccessor( {}, 'foo', '5', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', 5, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', true, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', false, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', null, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', undefined, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', [], ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', {}, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid setter...
{
	setReadWriteAccessor( {}, 'foo', (): string => 'beep', '5' ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', (): string => 'beep', 5 ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', (): string => 'beep', true ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', (): string => 'beep', false ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', (): string => 'beep', null ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', (): string => 'beep', undefined ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', (): string => 'beep', [] ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', (): string => 'beep', {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	setReadWriteAccessor(); // $ExpectError
	setReadWriteAccessor( {} ); // $ExpectError
	setReadWriteAccessor( {}, 'foo' ); // $ExpectError
	setReadWriteAccessor( {}, 'foo', (): string => 'beep' ); // $ExpectError
}
