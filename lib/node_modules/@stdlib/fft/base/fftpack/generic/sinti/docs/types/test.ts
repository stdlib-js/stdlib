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

import floor = require( '@stdlib/math/base/special/floor' );
import sinti = require( './index' );


// TESTS //

// The function returns a collection...
{
	const workspace = new Float64Array( floor( 2.5*7 ) + 34 );

	sinti( 7, workspace, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const workspace = new Float64Array( floor( 2.5*7 ) + 34 );

	sinti( '7', workspace, 1, 0 ); // $ExpectError
	sinti( true, workspace, 1, 0 ); // $ExpectError
	sinti( false, workspace, 1, 0 ); // $ExpectError
	sinti( null, workspace, 1, 0 ); // $ExpectError
	sinti( void 0, workspace, 1, 0 ); // $ExpectError
	sinti( [], workspace, 1, 0 ); // $ExpectError
	sinti( {}, workspace, 1, 0 ); // $ExpectError
	sinti( ( x: number ): number => x, workspace, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	sinti( 7, '50', 1, 0 ); // $ExpectError
	sinti( 7, 50, 1, 0 ); // $ExpectError
	sinti( 7, true, 1, 0 ); // $ExpectError
	sinti( 7, false, 1, 0 ); // $ExpectError
	sinti( 7, null, 1, 0 ); // $ExpectError
	sinti( 7, void 0, 1, 0 ); // $ExpectError
	sinti( 7, {}, 1, 0 ); // $ExpectError
	sinti( 7, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const workspace = new Float64Array( floor( 2.5*7 ) + 34 );

	sinti( 7, workspace, '1', 0 ); // $ExpectError
	sinti( 7, workspace, true, 0 ); // $ExpectError
	sinti( 7, workspace, false, 0 ); // $ExpectError
	sinti( 7, workspace, null, 0 ); // $ExpectError
	sinti( 7, workspace, void 0, 0 ); // $ExpectError
	sinti( 7, workspace, [], 0 ); // $ExpectError
	sinti( 7, workspace, {}, 0 ); // $ExpectError
	sinti( 7, workspace, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const workspace = new Float64Array( floor( 2.5*7 ) + 34 );

	sinti( 7, workspace, 1, '0' ); // $ExpectError
	sinti( 7, workspace, 1, true ); // $ExpectError
	sinti( 7, workspace, 1, false ); // $ExpectError
	sinti( 7, workspace, 1, null ); // $ExpectError
	sinti( 7, workspace, 1, void 0 ); // $ExpectError
	sinti( 7, workspace, 1, [] ); // $ExpectError
	sinti( 7, workspace, 1, {} ); // $ExpectError
	sinti( 7, workspace, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const workspace = new Float64Array( floor( 2.5*7 ) + 34 );

	sinti(); // $ExpectError
	sinti( 7 ); // $ExpectError
	sinti( 7, workspace ); // $ExpectError
	sinti( 7, workspace, 1 ); // $ExpectError
	sinti( 7, workspace, 1, 0, 123 ); // $ExpectError
}
