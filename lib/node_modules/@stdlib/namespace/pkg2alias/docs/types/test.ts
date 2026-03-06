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

import pkg2alias = require( './index' );


// TESTS //

// The function returns a string or null...
{
	pkg2alias( '@stdlib/math/base/special/sin' ); // $ExpectType string | null
}

// The compiler throws an error if the function is not provided a string...
{
	pkg2alias( 5 ); // $ExpectError
	pkg2alias( true ); // $ExpectError
	pkg2alias( false ); // $ExpectError
	pkg2alias( null ); // $ExpectError
	pkg2alias( undefined ); // $ExpectError
	pkg2alias( [] ); // $ExpectError
	pkg2alias( {} ); // $ExpectError
	pkg2alias( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	pkg2alias( '@stdlib/math/base/special/sin', 'beep' ); // $ExpectError
}
