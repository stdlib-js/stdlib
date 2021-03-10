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

import setHighWord = require( './index' );


// TESTS //

// The function returns a number...
{
	setHighWord( 3.14e201, 5 >>> 0 ); // $ExpectType number
}

// The function does not compile if provided a first argument that is not a number...
{
	setHighWord( 'abc', 5 >>> 0 ); // $ExpectError
	setHighWord( true, 5 >>> 0 ); // $ExpectError
	setHighWord( false, 5 >>> 0 ); // $ExpectError
	setHighWord( [], 5 >>> 0 ); // $ExpectError
	setHighWord( {}, 5 >>> 0 ); // $ExpectError
	setHighWord( ( x: number ): number => x, 5 >>> 0 ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a number...
{
	setHighWord( 3.14e201, 'abc' ); // $ExpectError
	setHighWord( 3.14e201, true ); // $ExpectError
	setHighWord( 3.14e201, false ); // $ExpectError
	setHighWord( 3.14e201, [] ); // $ExpectError
	setHighWord( 3.14e201, {} ); // $ExpectError
	setHighWord( 3.14e201, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	setHighWord(); // $ExpectError
	setHighWord( 3.14e201 ); // $ExpectError
}
