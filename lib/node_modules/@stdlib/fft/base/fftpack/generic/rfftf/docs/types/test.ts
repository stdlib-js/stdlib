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

import rfftf = require( './index' );


// TESTS //

// The function returns a collection...
{
	const r = new Float64Array( 4 );
	const w = new Float64Array( ( 2*4 ) + 34 );

	rfftf( 4, r, 1, 0, w, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const r = new Float64Array( 4 );
	const w = new Float64Array( ( 2*4 ) + 34 );

	rfftf( '4', r, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( true, r, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( false, r, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( null, r, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( void 0, r, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( [], r, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( {}, r, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( ( x: number ): number => x, r, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const w = new Float64Array( ( 2*4 ) + 34 );

	rfftf( 4, '4', 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, 4, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, true, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, false, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, null, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, void 0, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, {}, 1, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, ( x: number ): number => x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const r = new Float64Array( 4 );
	const w = new Float64Array( ( 2*4 ) + 34 );

	rfftf( 4, r, '1', 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, true, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, false, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, null, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, void 0, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, [], 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, {}, 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const r = new Float64Array( 4 );
	const w = new Float64Array( ( 2*4 ) + 34 );

	rfftf( 4, r, 1, '0', w, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, true, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, false, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, null, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, void 0, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, [], w, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, {}, w, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a collection...
{
	const r = new Float64Array( 4 );

	rfftf( 4, r, 1, 0, '42', 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, 42, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, true, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, false, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, null, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, void 0, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, {}, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const r = new Float64Array( 4 );
	const w = new Float64Array( ( 2*4 ) + 34 );

	rfftf( 4, r, 1, 0, w, '1', 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, w, true, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, w, false, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, w, null, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, w, void 0, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, w, [], 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, w, {}, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const r = new Float64Array( 4 );
	const w = new Float64Array( ( 2*4 ) + 34 );

	rfftf( 4, r, 1, 0, w, 1, '0' ); // $ExpectError
	rfftf( 4, r, 1, 0, w, 1, true ); // $ExpectError
	rfftf( 4, r, 1, 0, w, 1, false ); // $ExpectError
	rfftf( 4, r, 1, 0, w, 1, null ); // $ExpectError
	rfftf( 4, r, 1, 0, w, 1, void 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, w, 1, [] ); // $ExpectError
	rfftf( 4, r, 1, 0, w, 1, {} ); // $ExpectError
	rfftf( 4, r, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const r = new Float64Array( 4 );
	const w = new Float64Array( ( 2*4 ) + 34 );

	rfftf(); // $ExpectError
	rfftf( 4 ); // $ExpectError
	rfftf( 4, r ); // $ExpectError
	rfftf( 4, r, 1 ); // $ExpectError
	rfftf( 4, r, 1, 0 ); // $ExpectError
	rfftf( 4, r, 1, 0, w ); // $ExpectError
	rfftf( 4, r, 1, 0, w, 1 ); // $ExpectError
	rfftf( 4, r, 1, 0, w, 1, 0, 123 ); // $ExpectError
}
