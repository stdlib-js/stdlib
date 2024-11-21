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

import curry = require( './index' );


// TESTS //

// The function returns a function...
{
	curry( ( x: number, y: number ): number => x + y ); // $ExpectType (v: number) => (v: number) => number
	curry( ( x: number, y: number ): number => x + y, 2 ); // $ExpectType (v: number) => (v: number) => number
	curry( ( x: string, y: string ): string => x + y, {} ); // $ExpectType (v: string) => (v: string) => string
	curry( ( x: string, y: string ): string => x + y, 2, {} ); // $ExpectType (v: string) => (v: string) => string
	curry( ( str: string, n: number ): string => str.substring( n ) ); // $ExpectType (v: string) => (v: number) => string

	const cxt = {
		'count': 0,
		'multiply': function multiply( this: { count: number }, x: number, y: number ): number {
			this.count += 1; // eslint-disable-line no-invalid-this
			return x * y;
		}
	};
	curry( cxt.multiply ); // $ExpectType (v: number) => (v: number) => number
	curry( cxt.multiply, 2 ); // $ExpectType (v: number) => (v: number) => number
	curry( cxt.multiply, 2, { 'count': 2 } ); // $ExpectType (v: number) => (v: number) => number
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	curry( true ); // $ExpectError
	curry( false ); // $ExpectError
	curry( 5 ); // $ExpectError
	curry( [] ); // $ExpectError
	curry( {} ); // $ExpectError
	curry( 'abc' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which does not constitute a valid `this` context...
{
	const cxt = {
		'count': 0,
		'multiply': function multiply( this: { count: number }, x: number, y: number ): number {
			this.count += 1; // eslint-disable-line no-invalid-this
			return x * y;
		}
	};
	curry( cxt.multiply, { 'COUNT': 2 } ); // $ExpectError
	curry( cxt.multiply, 2, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided more than three arguments...
{
	curry( ( x: number, y: number ): number => x + y, 2, {}, 4 ); // $ExpectError
}
