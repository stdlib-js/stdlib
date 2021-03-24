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

import reviver = require( './index' );


// TESTS //

// The function can be used to revive a serialized object...
{
	JSON.parse( '{"type":"Complex128","re":5,"im":3}', reviver ); // $ExpectType any
}

// The function does not compile if provided a first argument that is not a string...
{
	reviver( true, 1 ); // $ExpectError
	reviver( false, 1 ); // $ExpectError
	reviver( null, 1 ); // $ExpectError
	reviver( undefined, 1 ); // $ExpectError
	reviver( 5, 1 ); // $ExpectError
	reviver( [], 1 ); // $ExpectError
	reviver( {}, 1 ); // $ExpectError
	reviver( ( x: number ): number => x, 1 ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	reviver(); // $ExpectError
	reviver( 'beep' ); // $ExpectError
}
