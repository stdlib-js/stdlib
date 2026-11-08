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

import rffti = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const w = new Float32Array( ( 2*8 ) + 34 );

	rffti( 8, w, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const w = new Float32Array( ( 2*8 ) + 34 );

	rffti( '8', w, 1, 0 ); // $ExpectError
	rffti( true, w, 1, 0 ); // $ExpectError
	rffti( false, w, 1, 0 ); // $ExpectError
	rffti( null, w, 1, 0 ); // $ExpectError
	rffti( void 0, w, 1, 0 ); // $ExpectError
	rffti( [], w, 1, 0 ); // $ExpectError
	rffti( {}, w, 1, 0 ); // $ExpectError
	rffti( ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	rffti( 8, '50', 1, 0 ); // $ExpectError
	rffti( 8, 50, 1, 0 ); // $ExpectError
	rffti( 8, true, 1, 0 ); // $ExpectError
	rffti( 8, false, 1, 0 ); // $ExpectError
	rffti( 8, null, 1, 0 ); // $ExpectError
	rffti( 8, void 0, 1, 0 ); // $ExpectError
	rffti( 8, [], 1, 0 ); // $ExpectError
	rffti( 8, {}, 1, 0 ); // $ExpectError
	rffti( 8, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const w = new Float32Array( ( 2*8 ) + 34 );

	rffti( 8, w, '1', 0 ); // $ExpectError
	rffti( 8, w, true, 0 ); // $ExpectError
	rffti( 8, w, false, 0 ); // $ExpectError
	rffti( 8, w, null, 0 ); // $ExpectError
	rffti( 8, w, void 0, 0 ); // $ExpectError
	rffti( 8, w, [], 0 ); // $ExpectError
	rffti( 8, w, {}, 0 ); // $ExpectError
	rffti( 8, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const w = new Float32Array( ( 2*8 ) + 34 );

	rffti( 8, w, 1, '0' ); // $ExpectError
	rffti( 8, w, 1, true ); // $ExpectError
	rffti( 8, w, 1, false ); // $ExpectError
	rffti( 8, w, 1, null ); // $ExpectError
	rffti( 8, w, 1, void 0 ); // $ExpectError
	rffti( 8, w, 1, [] ); // $ExpectError
	rffti( 8, w, 1, {} ); // $ExpectError
	rffti( 8, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const w = new Float32Array( ( 2*8 ) + 34 );

	rffti(); // $ExpectError
	rffti( 8 ); // $ExpectError
	rffti( 8, w ); // $ExpectError
	rffti( 8, w, 1 ); // $ExpectError
	rffti( 8, w, 1, 0, 123 ); // $ExpectError
}
