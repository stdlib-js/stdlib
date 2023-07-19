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

import broadcastShapes = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	broadcastShapes( [ [ 1, 2 ], [ 2, 2 ] ] ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is not provided an array-like object containing array-like objects containing numbers...
{
	broadcastShapes( '5' ); // $ExpectError
	broadcastShapes( 5 ); // $ExpectError
	broadcastShapes( true ); // $ExpectError
	broadcastShapes( false ); // $ExpectError
	broadcastShapes( null ); // $ExpectError
	broadcastShapes( {} ); // $ExpectError
	broadcastShapes( [ '5' ] ); // $ExpectError
	broadcastShapes( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	broadcastShapes(); // $ExpectError
	broadcastShapes( [ [ 1, 2, 3 ] ], [ 2, 3 ] ); // $ExpectError
}
