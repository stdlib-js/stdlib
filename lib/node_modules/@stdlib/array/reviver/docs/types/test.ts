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

import reviveTypedArray = require( './index' );


// TESTS //

// The function revives a serialized object...
{
	const o = {
		'type': 'Float64Array',
		'data': [ 5, 3 ]
	};
	reviveTypedArray( 'foo', o ); // $ExpectType any
}

// The function does not compile if provided a first argument that is not a string...
{
	reviveTypedArray( true, 1 ); // $ExpectError
	reviveTypedArray( false, 1 ); // $ExpectError
	reviveTypedArray( null, 1 ); // $ExpectError
	reviveTypedArray( undefined, 1 ); // $ExpectError
	reviveTypedArray( 5, 1 ); // $ExpectError
	reviveTypedArray( [], 1 ); // $ExpectError
	reviveTypedArray( {}, 1 ); // $ExpectError
	reviveTypedArray( ( x: number ): number => x, 1 ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	reviveTypedArray(); // $ExpectError
	reviveTypedArray( 'beep' ); // $ExpectError
}
