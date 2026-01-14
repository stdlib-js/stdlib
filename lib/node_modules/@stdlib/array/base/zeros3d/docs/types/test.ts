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

import zeros3d = require( './index' );


// TESTS //

// The function returns a nested array...
{
	zeros3d( [ 1, 1, 3 ] ); // $ExpectType Array3D<number>
}

// The compiler throws an error if the function is provided a first argument which is not an array of numbers...
{
	zeros3d( 'abc' ); // $ExpectError
	zeros3d( true ); // $ExpectError
	zeros3d( false ); // $ExpectError
	zeros3d( null ); // $ExpectError
	zeros3d( [ '1' ] ); // $ExpectError
	zeros3d( {} ); // $ExpectError
	zeros3d( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zeros3d(); // $ExpectError
	zeros3d( [ 1, 1, 3 ], 2 ); // $ExpectError
}
