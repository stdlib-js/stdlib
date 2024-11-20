/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import papply = require( './index' );


// TESTS //

// The function returns a partially applied function...
{
	papply( ( x: number, y: number ): number => x + y, 3 ); // $ExpectType Closure
	papply( ( x: number, y: number, z: number ): number => x + y + z , 3, 4 ); // $ExpectType Closure
}

// The compiler throws an error if the function is provided a first argument which is not a function...
{
	papply( {}, 3 ); // $ExpectError
	papply( [], 1 ); // $ExpectError
	papply( 'abc', 2 ); // $ExpectError
	papply( 2, 3 ); // $ExpectError
	papply( true, 3 ); // $ExpectError
}
