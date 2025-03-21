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

import reorderArguments = require( './index' );


// TESTS //

// The function returns a function...
{
	reorderArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], [ 2, 0, 1] ); // $ExpectType Function
	reorderArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], [ 1, 0, 2 ] ); // $ExpectType Function
	reorderArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], [ 1, 0, 2 ], {} ); // $ExpectType Function
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	reorderArguments( true, [ 2, 0, 1 ] ); // $ExpectError
	reorderArguments( false, [ 2, 0, 1 ] ); // $ExpectError
	reorderArguments( 5, [ 2, 0, 1 ] ); // $ExpectError
	reorderArguments( [], [ 2, 0, 1 ] ); // $ExpectError
	reorderArguments( {}, [ 2, 0, 1 ] ); // $ExpectError
	reorderArguments( 'abc', [ 2, 0, 1 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than an array of numbers...
{
	reorderArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], true ); // $ExpectError
	reorderArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], false ); // $ExpectError
	reorderArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], 'abc' ); // $ExpectError
	reorderArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], 123 ); // $ExpectError
	reorderArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], {} ); // $ExpectError
	reorderArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], (): number => 6; // $ExpectError
}

// The compiler throws an error if the function is provided more than three arguments...
{
	reorderArguments( ( x: number, y: number ): number => x + y, [ 1, 0 ], {}, 4 ); // $ExpectError
}
