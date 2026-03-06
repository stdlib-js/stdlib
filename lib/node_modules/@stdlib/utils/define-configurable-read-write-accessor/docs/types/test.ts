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

import setConfigurableReadWriteAccessor = require( './index' );


// TESTS //

// The function returns `undefined`...
{
	setConfigurableReadWriteAccessor( {}, 'foo', (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectType void
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	setConfigurableReadWriteAccessor( {}, true, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, false, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, null, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, undefined, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, [], (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, {}, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, ( x: number ): number => x, (): string => 'beep', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid getter...
{
	setConfigurableReadWriteAccessor( {}, 'foo', '5', ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', 5, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', true, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', false, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', null, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', undefined, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', [], ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', {}, ( x: any ): void => { throw new Error( String( x ) ); } ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid setter...
{
	setConfigurableReadWriteAccessor( {}, 'foo', (): string => 'beep', '5' ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', (): string => 'beep', 5 ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', (): string => 'beep', true ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', (): string => 'beep', false ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', (): string => 'beep', null ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', (): string => 'beep', undefined ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', (): string => 'beep', [] ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', (): string => 'beep', {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	setConfigurableReadWriteAccessor(); // $ExpectError
	setConfigurableReadWriteAccessor( {} ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo' ); // $ExpectError
	setConfigurableReadWriteAccessor( {}, 'foo', (): string => 'beep' ); // $ExpectError
}
