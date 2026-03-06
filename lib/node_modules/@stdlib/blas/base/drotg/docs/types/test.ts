/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import drotg = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	drotg( 0.0, 2.0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided an argument which is not a number...
{
	drotg( true, 2.0 ); // $ExpectError
	drotg( false, 2.0 ); // $ExpectError
	drotg( null, 2.0 ); // $ExpectError
	drotg( undefined, 2.0 ); // $ExpectError
	drotg( '5', 2.0 ); // $ExpectError
	drotg( [], 2.0 ); // $ExpectError
	drotg( {}, 2.0 ); // $ExpectError

	drotg( 0.0, true ); // $ExpectError
	drotg( 0.0, false ); // $ExpectError
	drotg( 0.0, null ); // $ExpectError
	drotg( 0.0, undefined ); // $ExpectError
	drotg( 0.0, '5' ); // $ExpectError
	drotg( 0.0, [] ); // $ExpectError
	drotg( 0.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	drotg(); // $ExpectError
	drotg( 1.0 ); // $ExpectError
	drotg( 1.0, 2.0, 3.0 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a Float64Array...
{
	const out = new Float64Array( 4 );

	drotg.assign( 0.0, 2.0, out, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `assign` method is provided a first or second argument which is not a number...
{
	const out = new Float64Array( 4 );

	drotg.assign( true, 2.0, out, 1, 0 ); // $ExpectError
	drotg.assign( false, 2.0, out, 1, 0 ); // $ExpectError
	drotg.assign( null, 2.0, out, 1, 0 ); // $ExpectError
	drotg.assign( undefined, 2.0, out, 1, 0 ); // $ExpectError
	drotg.assign( '5', 2.0, out, 1, 0 ); // $ExpectError
	drotg.assign( [], 2.0, out, 1, 0 ); // $ExpectError
	drotg.assign( {}, 2.0, out, 1, 0 ); // $ExpectError

	drotg.assign( 0.0, true, out, 1, 0 ); // $ExpectError
	drotg.assign( 0.0, false, out, 1, 0 ); // $ExpectError
	drotg.assign( 0.0, null, out, 1, 0 ); // $ExpectError
	drotg.assign( 0.0, undefined, out, 1, 0 ); // $ExpectError
	drotg.assign( 0.0, '5', out, 1, 0 ); // $ExpectError
	drotg.assign( 0.0, [], out, 1, 0 ); // $ExpectError
	drotg.assign( 0.0, {}, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a Float64Array...
{
	drotg.assign( 1.0, 2.0, 1, 1, 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, true, 1, 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, false, 1, 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, null, 1, 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, undefined, 1, 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, '5', 1, 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, [], 1, 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = new Float64Array( 4 );

	drotg.assign( 1.0, 2.0, out, '5', 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, true, 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, false, 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, null, 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, [], 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, {}, 0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const out = new Float64Array( 4 );

	drotg.assign( 1.0, 2.0, out, 1, '5' ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, 1, true ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, 1, false ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, 1, null ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, 1, [] ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, 1, {} ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = new Float64Array( 4 );

	drotg.assign(); // $ExpectError
	drotg.assign( 1.0 ); // $ExpectError
	drotg.assign( 1.0, 2.0 ); // $ExpectError
	drotg.assign( 1.0, 2.0, out ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, 1 ); // $ExpectError
	drotg.assign( 1.0, 2.0, out, 1, 0, 1 ); // $ExpectError
}
