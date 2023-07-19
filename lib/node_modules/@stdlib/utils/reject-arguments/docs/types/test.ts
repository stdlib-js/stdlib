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

import rejectArguments = require( './index' );

/**
* Predicate function.
*
* @param v - argument
* @returns test result
*/
function predicate( v: any ): boolean {
	return ( v !== v );
}


// TESTS //

// The function returns a function...
{
	rejectArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], predicate ); // $ExpectType Function
	rejectArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], predicate, {} ); // $ExpectType Function
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	rejectArguments( true, [ 1, 0, 1 ] ); // $ExpectError
	rejectArguments( false, [ 1, 0, 1 ] ); // $ExpectError
	rejectArguments( 5, [ 1, 0, 1 ] ); // $ExpectError
	rejectArguments( [], [ 1, 0, 1 ] ); // $ExpectError
	rejectArguments( {}, [ 1, 0, 1 ] ); // $ExpectError
	rejectArguments( 'abc', [ 1, 0, 1 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than an function...
{
	rejectArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], '5' ); // $ExpectError
	rejectArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], true ); // $ExpectError
	rejectArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], false ); // $ExpectError
	rejectArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], 123 ); // $ExpectError
	rejectArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], null ); // $ExpectError
	rejectArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], {} ); // $ExpectError
	rejectArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], [] ); // $ExpectError
}

// The compiler throws an error if the function is provided more than three arguments...
{
	rejectArguments( ( x: number, y: number ): number => x + y, predicate, {}, 4 ); // $ExpectError
}
