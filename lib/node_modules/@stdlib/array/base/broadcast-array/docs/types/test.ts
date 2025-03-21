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

import broadcastArray = require( './index' );


// TESTS //

// The function returns a results object...
{
	broadcastArray( [ 1, 2, 3 ], [ 3 ], [ 2, 3 ] ); // $ExpectType BroadcastObject<number>
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	broadcastArray( 5, [ 3 ], [ 2, 3 ] ); // $ExpectError
	broadcastArray( true, [ 3 ], [ 2, 3 ] ); // $ExpectError
	broadcastArray( false, [ 3 ], [ 2, 3 ] ); // $ExpectError
	broadcastArray( null, [ 3 ], [ 2, 3 ] ); // $ExpectError
	broadcastArray( {}, [ 3 ], [ 2, 3 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection of numbers...
{
	broadcastArray( [ 1, 2, 3 ], '5', [ 2, 3 ] ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], 5, [ 2, 3 ] ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], true, [ 2, 3 ] ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], false, [ 2, 3 ] ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], null, [ 2, 3 ] ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], [ '1' ], [ 2, 3 ] ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], {}, [ 2, 3 ] ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], ( x: number ): number => x, [ 2, 3 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection of numbers...
{
	broadcastArray( [ 1, 2, 3 ], [ 3 ], '5' ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], [ 3 ], 5 ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], [ 3 ], true ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], [ 3 ], false ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], [ 3 ], null ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], [ 3 ], [ '1' ] ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], [ 3 ], {} ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], [ 3 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	broadcastArray(); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], [ 3 ] ); // $ExpectError
	broadcastArray( [ 1, 2, 3 ], [ 3 ], [ 2, 3 ], {} ); // $ExpectError
}
