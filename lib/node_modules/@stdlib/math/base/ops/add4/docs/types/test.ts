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

import add4 = require( './index' );


// TESTS //

// The function returns a number...
{
	add4( 8.0, 8.0, 8.0, 8.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	add4( true, 5.0, 2.0, -3.0 ); // $ExpectError
	add4( false, 5.0, 2.0, -3.0 ); // $ExpectError
	add4( null, 5.0, 2.0, -3.0 ); // $ExpectError
	add4( undefined, 5.0, 2.0, -3.0 ); // $ExpectError
	add4( '5', 5.0, 2.0, -3.0 ); // $ExpectError
	add4( [], 5.0, 2.0, -3.0 ); // $ExpectError
	add4( {}, 5.0, 2.0, -3.0 ); // $ExpectError
	add4( ( x: number ): number => x, 5.0, 2.0, -3.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	add4( 5.0, true, 2.0, -3.0 ); // $ExpectError
	add4( 5.0, false, 2.0, -3.0 ); // $ExpectError
	add4( 5.0, null, 2.0, -3.0 ); // $ExpectError
	add4( 5.0, undefined, 2.0, -3.0 ); // $ExpectError
	add4( 5.0, '5', 2.0, -3.0 ); // $ExpectError
	add4( 5.0, [], 2.0, -3.0 ); // $ExpectError
	add4( 5.0, {}, 2.0, -3.0 ); // $ExpectError
	add4( 5.0, ( x: number ): number => x, 2.0, -3.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	add4( 5.0, 5.0, true, -3.0 ); // $ExpectError
	add4( 5.0, 5.0, false, -3.0 ); // $ExpectError
	add4( 5.0, 5.0, null, -3.0 ); // $ExpectError
	add4( 5.0, 5.0, undefined, -3.0 ); // $ExpectError
	add4( 5.0, 5.0, '5', -3.0 ); // $ExpectError
	add4( 5.0, 5.0, [], -3.0 ); // $ExpectError
	add4( 5.0, 5.0, {}, -3.0 ); // $ExpectError
	add4( 5.0, 5.0, ( x: number ): number => x, -3.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	add4( 5.0, 5.0, 5.0, true ); // $ExpectError
	add4( 5.0, 5.0, 5.0, false ); // $ExpectError
	add4( 5.0, 5.0, 5.0, null ); // $ExpectError
	add4( 5.0, 5.0, 5.0, undefined ); // $ExpectError
	add4( 5.0, 5.0, 5.0, '5' ); // $ExpectError
	add4( 5.0, 5.0, 5.0, [] ); // $ExpectError
	add4( 5.0, 5.0, 5.0, {} ); // $ExpectError
	add4( 5.0, 5.0, 5.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	add4(); // $ExpectError
	add4( 5.0 ); // $ExpectError
	add4( 5.0, 5.0 ); // $ExpectError
	add4( 5.0, 5.0, 5.0 ); // $ExpectError
	add4( 5.0, 5.0, 5.0, 5.0, 5.0 ); // $ExpectError
}
