/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import decorateAfter = require( './index' );


// TESTS //

// The function returns a function...
{
	decorateAfter<[number, number], number, number>( ( x: number, y: number ): number => x + y, 2, ( x: number ): number => x ); // $ExpectType (args_0: number, args_1: number) => number
	decorateAfter<[number, number], number, number>( ( x: number, y: number ): number => x + y, 2, ( x: number ): number => x, {} ); // $ExpectType (args_0: number, args_1: number) => number

	decorateAfter<[number, number], number, string>( ( x: number, y: number ): number => x + y, 2, ( x: number ): string => x.toString() ); // $ExpectType (args_0: number, args_1: number) => string
	decorateAfter<[number, number], number, string>( ( x: number, y: number ): number => x + y, 2, ( x: number ): string => x.toString(), {} ); // $ExpectType (args_0: number, args_1: number) => string

	decorateAfter<[number, boolean, number], number, string>( ( x: number, bool: boolean, y: number ): number => { if ( bool ) { return x + y; } return y; }, 2, ( x: number ): string => x.toString() ); // $ExpectType (args_0: number, args_1: boolean, args_2: number) => string
	decorateAfter<[number, boolean, number], number, string>( ( x: number, bool: boolean, y: number ): number => { if ( bool ) { return x + y; } return y; }, 2, ( x: number ): string => x.toString(), {} ); // $ExpectType (args_0: number, args_1: boolean, args_2: number) => string

	decorateAfter<[number, number], number>( ( x: number, y: number ): number => x + y, 2, ( x: number ): void => { if ( x !== x ) { return; } } ); // $ExpectType (args_0: number, args_1: number) => number

	decorateAfter<[number, number], number>( ( x: number, y: number ): number => x + y, 2, ( x: number ): void => { if ( x !== x ) { return; } }, {} ); // $ExpectType (args_0: number, args_1: number) => number
}

// The compiler throws an error if the function is provided a first argument which is not a function...
{
	decorateAfter( true, 0, ( x: number ): number => x ); // $ExpectError
	decorateAfter( false, 0, ( x: number ): number => x ); // $ExpectError
	decorateAfter( 5, 0, ( x: number ): number => x ); // $ExpectError
	decorateAfter( [], 0, ( x: number ): number => x ); // $ExpectError
	decorateAfter( {}, 0, ( x: number ): number => x ); // $ExpectError
	decorateAfter( 'abc', 0, ( x: number ): number => x ); // $ExpectError

	decorateAfter( true, 0, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter( false, 0, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter( 5, 0, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter( [], 0, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter( {}, 0, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter( 'abc', 0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	decorateAfter( ( x: number ): number => x, true, ( x: number ): number => x ); // $ExpectError
	decorateAfter( ( x: number ): number => x, false, ( x: number ): number => x ); // $ExpectError
	decorateAfter( ( x: number ): number => x, ( x: number ): number => x, ( x: number ): number => x ); // $ExpectError
	decorateAfter( ( x: number ): number => x, [], ( x: number ): number => x ); // $ExpectError
	decorateAfter( ( x: number ): number => x, {}, ( x: number ): number => x ); // $ExpectError
	decorateAfter( ( x: number ): number => x, 'abc', ( x: number ): number => x ); // $ExpectError

	decorateAfter( ( x: number ): number => x, true, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter( ( x: number ): number => x, false, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter( ( x: number ): number => x, ( x: number ): number => x, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter( ( x: number ): number => x, [], ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter( ( x: number ): number => x, {}, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter( ( x: number ): number => x, 'abc', ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	decorateAfter( ( x: number, y: number ): number => x + y ); // $ExpectError
	decorateAfter( ( x: number, y: number ): number => x + y, 2 ); // $ExpectError
	decorateAfter( ( x: number, y: number ): number => x + y, 2, ( x: number ): number => x, {}, 4 ); // $ExpectError
}

// Attached to the main export is a `factory` method which returns a function...
{
	decorateAfter.factory<[number, number], number, number>( ( x: number, y: number ): number => x + y, 2, ( x: number ): number => x ); // $ExpectType (args_0: number, args_1: number) => number
	decorateAfter.factory<[number, number], number, number>( ( x: number, y: number ): number => x + y, 2, ( x: number ): number => x, {} ); // $ExpectType (args_0: number, args_1: number) => number

	decorateAfter.factory<[number, number], number, string>( ( x: number, y: number ): number => x + y, 2, ( x: number ): string => x.toString() ); // $ExpectType (args_0: number, args_1: number) => string
	decorateAfter.factory<[number, number], number, string>( ( x: number, y: number ): number => x + y, 2, ( x: number ): string => x.toString(), {} ); // $ExpectType (args_0: number, args_1: number) => string

	decorateAfter.factory<[number, boolean, number], number, string>( ( x: number, bool: boolean, y: number ): number => { if ( bool ) { return x + y; } return y; }, 2, ( x: number ): string => x.toString() ); // $ExpectType (args_0: number, args_1: boolean, args_2: number) => string
	decorateAfter.factory<[number, boolean, number], number, string>( ( x: number, bool: boolean, y: number ): number => { if ( bool ) { return x + y; } return y; }, 2, ( x: number ): string => x.toString(), {} ); // $ExpectType (args_0: number, args_1: boolean, args_2: number) => string

	decorateAfter.factory<[number, number], number>( ( x: number, y: number ): number => x + y, 2, ( x: number ): void => { if ( x !== x ) { return; } } ); // $ExpectType (args_0: number, args_1: number) => number

	decorateAfter.factory<[number, number], number>( ( x: number, y: number ): number => x + y, 2, ( x: number ): void => { if ( x !== x ) { return; } }, {} ); // $ExpectType (args_0: number, args_1: number) => number
}

// The compiler throws an error if the `factory` method is provided a first argument which is not a function...
{
	decorateAfter.factory( true, 0, ( x: number ): number => x ); // $ExpectError
	decorateAfter.factory( false, 0, ( x: number ): number => x ); // $ExpectError
	decorateAfter.factory( 5, 0, ( x: number ): number => x ); // $ExpectError
	decorateAfter.factory( [], 0, ( x: number ): number => x ); // $ExpectError
	decorateAfter.factory( {}, 0, ( x: number ): number => x ); // $ExpectError
	decorateAfter.factory( 'abc', 0, ( x: number ): number => x ); // $ExpectError

	decorateAfter.factory( true, 0, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter.factory( false, 0, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter.factory( 5, 0, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter.factory( [], 0, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter.factory( {}, 0, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter.factory( 'abc', 0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a second argument which is not a number...
{
	decorateAfter.factory( ( x: number ): number => x, true, ( x: number ): number => x ); // $ExpectError
	decorateAfter.factory( ( x: number ): number => x, false, ( x: number ): number => x ); // $ExpectError
	decorateAfter.factory( ( x: number ): number => x, ( x: number ): number => x, ( x: number ): number => x ); // $ExpectError
	decorateAfter.factory( ( x: number ): number => x, [], ( x: number ): number => x ); // $ExpectError
	decorateAfter.factory( ( x: number ): number => x, {}, ( x: number ): number => x ); // $ExpectError
	decorateAfter.factory( ( x: number ): number => x, 'abc', ( x: number ): number => x ); // $ExpectError

	decorateAfter.factory( ( x: number ): number => x, true, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter.factory( ( x: number ): number => x, false, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter.factory( ( x: number ): number => x, ( x: number ): number => x, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter.factory( ( x: number ): number => x, [], ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter.factory( ( x: number ): number => x, {}, ( x: number ): number => x, {} ); // $ExpectError
	decorateAfter.factory( ( x: number ): number => x, 'abc', ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an incorrect number of arguments...
{
	decorateAfter.factory( ( x: number, y: number ): number => x + y ); // $ExpectError
	decorateAfter.factory( ( x: number, y: number ): number => x + y, 2 ); // $ExpectError
	decorateAfter.factory( ( x: number, y: number ): number => x + y, 2, ( x: number ): number => x, {}, 4 ); // $ExpectError
}
