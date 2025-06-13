/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import mapArguments = require( './index' );

// FUNCTIONS //

function clbk<T>( v: T ): T {
	return v;
}

function stringify( n: number ): string {
	return n.toString();
}

function sum( ...numbers: Array<number> ): number {
	return numbers.reduce( ( a, b ) => a + b, 0 );
}

function greet( this: { name: string }, greeting: string ): string {
	return `${greeting}, ${this.name}!`; // eslint-disable-line no-invalid-this
}


// TESTS //

// The function returns a function...
{
	mapArguments( ( x: number, y: number, z: number ): Array<number> => [ x, y, z ], clbk ); // $ExpectType (x: number, y: number, z: number) => number[]
	mapArguments( ( x: string, y: string, z: string ): Array<string> => [ x, y, z ], clbk, {} ); // $ExpectType (this: {}, x: string, y: string, z: string) => string[]
	mapArguments( ( x: number, y: number ): number => x + y, clbk ); // $ExpectType (x: number, y: number) => number

	mapArguments( stringify, ( x: number ) => x * 2 ); // $ExpectType (n: number) => string
	mapArguments( sum, ( x: number ) => x * 2 ); // $ExpectType (...args: number[]) => number

	mapArguments( greet, ( s: string ) => s.toUpperCase(), { 'name': 'World' } ); // $ExpectType (this: { name: string; }, greeting: string) => string
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	mapArguments( true, clbk ); // $ExpectError
	mapArguments( false, clbk ); // $ExpectError
	mapArguments( 5, clbk ); // $ExpectError
	mapArguments( [], clbk ); // $ExpectError
	mapArguments( {}, clbk ); // $ExpectError
	mapArguments( 'abc', clbk ); // $ExpectError

	mapArguments( true, clbk, {} ); // $ExpectError
	mapArguments( false, clbk, {} ); // $ExpectError
	mapArguments( 5, clbk, {} ); // $ExpectError
	mapArguments( [], clbk, {} ); // $ExpectError
	mapArguments( {}, clbk, {} ); // $ExpectError
	mapArguments( 'abc', clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than a function...
{
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], '5' ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], true ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], false ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], 123 ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], null ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], {} ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], [] ); // $ExpectError

	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], '5', {} ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], true, {} ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], false, {} ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], 123, {} ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], null, {} ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], {}, {} ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided more than three arguments...
{
	mapArguments( ( x: number, y: number ): number => x + y, clbk, {}, 4 ); // $ExpectError
}
