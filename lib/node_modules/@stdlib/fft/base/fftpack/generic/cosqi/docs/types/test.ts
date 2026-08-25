/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import cosqi = require( './index' );


// TESTS //

// The function returns a collection...
{
	const workspace = new Float64Array( ( 3*8 ) + 34 );

	cosqi( 8, workspace, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const workspace = new Float64Array( ( 3*8 ) + 34 );

	cosqi( '8', workspace, 1, 0 ); // $ExpectError
	cosqi( true, workspace, 1, 0 ); // $ExpectError
	cosqi( false, workspace, 1, 0 ); // $ExpectError
	cosqi( null, workspace, 1, 0 ); // $ExpectError
	cosqi( void 0, workspace, 1, 0 ); // $ExpectError
	cosqi( [], workspace, 1, 0 ); // $ExpectError
	cosqi( {}, workspace, 1, 0 ); // $ExpectError
	cosqi( ( x: number ): number => x, workspace, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	cosqi( 8, '50', 1, 0 ); // $ExpectError
	cosqi( 8, 50, 1, 0 ); // $ExpectError
	cosqi( 8, true, 1, 0 ); // $ExpectError
	cosqi( 8, false, 1, 0 ); // $ExpectError
	cosqi( 8, null, 1, 0 ); // $ExpectError
	cosqi( 8, void 0, 1, 0 ); // $ExpectError
	cosqi( 8, {}, 1, 0 ); // $ExpectError
	cosqi( 8, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const workspace = new Float64Array( ( 3*8 ) + 34 );

	cosqi( 8, workspace, '1', 0 ); // $ExpectError
	cosqi( 8, workspace, true, 0 ); // $ExpectError
	cosqi( 8, workspace, false, 0 ); // $ExpectError
	cosqi( 8, workspace, null, 0 ); // $ExpectError
	cosqi( 8, workspace, void 0, 0 ); // $ExpectError
	cosqi( 8, workspace, [], 0 ); // $ExpectError
	cosqi( 8, workspace, {}, 0 ); // $ExpectError
	cosqi( 8, workspace, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const workspace = new Float64Array( ( 3*8 ) + 34 );

	cosqi( 8, workspace, 1, '0' ); // $ExpectError
	cosqi( 8, workspace, 1, true ); // $ExpectError
	cosqi( 8, workspace, 1, false ); // $ExpectError
	cosqi( 8, workspace, 1, null ); // $ExpectError
	cosqi( 8, workspace, 1, void 0 ); // $ExpectError
	cosqi( 8, workspace, 1, [] ); // $ExpectError
	cosqi( 8, workspace, 1, {} ); // $ExpectError
	cosqi( 8, workspace, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const workspace = new Float64Array( ( 3*8 ) + 34 );

	cosqi(); // $ExpectError
	cosqi( 8 ); // $ExpectError
	cosqi( 8, workspace ); // $ExpectError
	cosqi( 8, workspace, 1 ); // $ExpectError
	cosqi( 8, workspace, 1, 0, 123 ); // $ExpectError
}
