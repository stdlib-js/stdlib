/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import countSameValueZero = require( './index' );


// TESTS //

// The function returns a number...
{
	countSameValueZero( [ 1, 2, 3 ], 1 ); // $ExpectType number
}

// The compiler throws an error if the first argument is not a collection...
{
	countSameValueZero( 5, 1 ); // $ExpectError
	countSameValueZero( true, 1 ); // $ExpectError
	countSameValueZero( false, 1 ); // $ExpectError
	countSameValueZero( null, 1 ); // $ExpectError
	countSameValueZero( {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	countSameValueZero(); // $ExpectError
	countSameValueZero( [ 1, 2, 3 ] ); // $ExpectError
	countSameValueZero( [ 1, 2, 3 ], 2, 3 ); // $ExpectError
}
