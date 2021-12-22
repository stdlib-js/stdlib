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

/**
* Callback function.
*
* @param v - argument
* @returns result
*/
function clbk( v: any ): any {
	return v;
}


// TESTS //

// The function returns a function...
{
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], clbk ); // $ExpectType Function
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], clbk, {} ); // $ExpectType Function
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	mapArguments( true, [ 1, 0, 1 ] ); // $ExpectError
	mapArguments( false, [ 1, 0, 1 ] ); // $ExpectError
	mapArguments( 5, [ 1, 0, 1 ] ); // $ExpectError
	mapArguments( [], [ 1, 0, 1 ] ); // $ExpectError
	mapArguments( {}, [ 1, 0, 1 ] ); // $ExpectError
	mapArguments( 'abc', [ 1, 0, 1 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than an function...
{
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], '5' ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], true ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], false ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], 123 ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], null ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], {} ); // $ExpectError
	mapArguments( ( x: any, y: any, z: any ): Array<any> => [ x, y, z ], [] ); // $ExpectError
}

// The compiler throws an error if the function is provided more than three arguments...
{
	mapArguments( ( x: number, y: number ): number => x + y, clbk, {}, 4 ); // $ExpectError
}
