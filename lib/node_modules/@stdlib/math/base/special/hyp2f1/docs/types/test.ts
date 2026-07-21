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

import hyp2f1 = require( './index' );


// TESTS //

// The function returns a number...
{
	hyp2f1( 1.0, 1.0, 1.0, 0.0 ); // $ExpectType number
	hyp2f1( 10.0, 7.4, -1.8, -0.99 ); // $ExpectType number
	hyp2f1( 10.0, 1.0, -1.8, -0.99 ); // $ExpectType number
	hyp2f1( 2.0, 3.0, 5.0, 0.99 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is a not a number...
{
	hyp2f1( true, 1.0, 1.0, 0.0 ); // $ExpectError
	hyp2f1( false, 7.4, -1.8, -0.99 ); // $ExpectError
	hyp2f1( '5', 1.0, -1.8, -0.99 ); // $ExpectError
	hyp2f1( [], 3.0, 5.0, 0.99 ); // $ExpectError
	hyp2f1( {}, 3.0, 5.0, 0.99 ); // $ExpectError
	hyp2f1( ( x: number ): number => x, 1.0, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is a not a number...
{
	hyp2f1( 1.0, true, 1.0, 0.0 ); // $ExpectError
	hyp2f1( 7.4, false, -1.8, -0.99 ); // $ExpectError
	hyp2f1( 1.0, '5', -1.8, -0.99 ); // $ExpectError
	hyp2f1( 3.0, [], 5.0, 0.99 ); // $ExpectError
	hyp2f1( 3.0, {}, 5.0, 0.99 ); // $ExpectError
	hyp2f1( 1.0, ( x: number ): number => x, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is a not a number...
{
	hyp2f1( 1.0, 1.0, true, 0.0 ); // $ExpectError
	hyp2f1( 7.4, -1.8, false, -0.99 ); // $ExpectError
	hyp2f1( 1.0, -1.8, '5', -0.99 ); // $ExpectError
	hyp2f1( 3.0, 5.0, [], 0.99 ); // $ExpectError
	hyp2f1( 3.0, 5.0, {}, 0.99 ); // $ExpectError
	hyp2f1( 1.0, 1.0, ( x: number ): number => x, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is a not a number...
{
	hyp2f1( 1.0, 1.0, 0.0, true ); // $ExpectError
	hyp2f1( 7.4, -1.8, -0.99, false ); // $ExpectError
	hyp2f1( 1.0, -1.8, -0.99, '5' ); // $ExpectError
	hyp2f1( 3.0, 5.0, 0.99, [] ); // $ExpectError
	hyp2f1( 3.0, 5.0, 0.99, {} ); // $ExpectError
	hyp2f1( 1.0, 1.0, 0.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	hyp2f1(); // $ExpectError
	hyp2f1( 2.0, 3.0, 5.0 ); // $ExpectError
}
