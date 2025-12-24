/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import mskfiltern = require( './index' );


// TESTS //

// The function returns one or more arrays...
{
	mskfiltern( [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectType [number[]]
	mskfiltern( [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectType [number[], number[]]
	mskfiltern( [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectType [number[], number[], number[]]
	mskfiltern( [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectType [number[], number[], number[], number[]]
	mskfiltern( [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectType [number[], number[], number[], number[], number[]]

	mskfiltern<any, any>( [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectType [any[], any[]]
	mskfiltern<number, number>( [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectType [number[], number[]]
	mskfiltern<string, string>( [ '1', '2', '3', '4' ], [ '1', '2', '3', '4' ], [ 0, 0 ] ); // $ExpectType [string[], string[]]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	mskfiltern( 1, [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectError
	mskfiltern( true, [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectError
	mskfiltern( false, [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectError
	mskfiltern( null, [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectError
	mskfiltern( void 0, [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectError
	mskfiltern( {}, [ 1, 2, 3, 4 ], [ 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	mskfiltern( [ 1, 2, 3, 4 ], 1, [ 0, 0 ] ); // $ExpectError
	mskfiltern( [ 1, 2, 3, 4 ], true, [ 0, 0 ] ); // $ExpectError
	mskfiltern( [ 1, 2, 3, 4 ], false, [ 0, 0 ] ); // $ExpectError
	mskfiltern( [ 1, 2, 3, 4 ], null, [ 0, 0 ] ); // $ExpectError
	mskfiltern( [ 1, 2, 3, 4 ], void 0, [ 0, 0 ] ); // $ExpectError
	mskfiltern( [ 1, 2, 3, 4 ], {}, [ 0, 0 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	mskfiltern(); // $ExpectError
	mskfiltern( [] ); // $ExpectError
}
