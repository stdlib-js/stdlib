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

import maskArguments = require( './index' );


// TESTS //

// The function returns a function...
{
	maskArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], [ 1, 0, 1 ] ); // $ExpectType Function
	maskArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], [ 1, 0, 1 ], {} ); // $ExpectType Function
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	maskArguments( true, [ 1, 0, 1 ] ); // $ExpectError
	maskArguments( false, [ 1, 0, 1 ] ); // $ExpectError
	maskArguments( 5, [ 1, 0, 1 ] ); // $ExpectError
	maskArguments( [], [ 1, 0, 1 ] ); // $ExpectError
	maskArguments( {}, [ 1, 0, 1 ] ); // $ExpectError
	maskArguments( 'abc', [ 1, 0, 1 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than an array-like object...
{
	maskArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], true ); // $ExpectError
	maskArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], false ); // $ExpectError
	maskArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], 123 ); // $ExpectError
	maskArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided more than three arguments...
{
	maskArguments( ( x: number, y: number ): number => x + y, [ 1, 0, 1 ], {}, 4 ); // $ExpectError
}
