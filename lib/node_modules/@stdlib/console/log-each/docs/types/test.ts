/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import logEach = require( './index' );


// TESTS //

// The function returns undefined...
{
	logEach( '%d', [ 1, 2, 3 ] ); // $ExpectType void
	logEach( '%d, %d', [ 1, 2, 3 ], 2 ); // $ExpectType void
	logEach( '%d, %d', [ 1, 2, 3 ], [ 2, 3, 4 ] ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not string...
{
	logEach( 123, [ 1, 2, 3 ] );  // $ExpectError
	logEach( true, [ 1, 2, 3 ] ); // $ExpectError
	logEach( false, [ 1, 2, 3 ] ); // $ExpectError
	logEach( {}, [ 1, 2, 3 ] ); // $ExpectError
	logEach( null, [ 1, 2, 3 ] ); // $ExpectError
	logEach( undefined, [ 1, 2, 3 ] ); // $ExpectError
}
