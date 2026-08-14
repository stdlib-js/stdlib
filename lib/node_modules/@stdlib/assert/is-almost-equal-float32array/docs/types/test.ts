/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import isAlmostEqualFloat32Array = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isAlmostEqualFloat32Array( 3.14, 3.14, 1 ); // $ExpectType boolean
	isAlmostEqualFloat32Array( null, null, 1 ); // $ExpectType boolean
	isAlmostEqualFloat32Array( 'beep', 'boop', 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	isAlmostEqualFloat32Array( 3.14, 3.14, '1' ); // $ExpectError
	isAlmostEqualFloat32Array( 3.14, 3.14, true ); // $ExpectError
	isAlmostEqualFloat32Array( 3.14, 3.14, false ); // $ExpectError
	isAlmostEqualFloat32Array( 3.14, 3.14, null ); // $ExpectError
	isAlmostEqualFloat32Array( 3.14, 3.14, undefined ); // $ExpectError
	isAlmostEqualFloat32Array( 3.14, 3.14, [] ); // $ExpectError
	isAlmostEqualFloat32Array( 3.14, 3.14, {} ); // $ExpectError
	isAlmostEqualFloat32Array( 3.14, 3.14, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isAlmostEqualFloat32Array(); // $ExpectError
	isAlmostEqualFloat32Array( 3.14 ); // $ExpectError
	isAlmostEqualFloat32Array( 3.14, 3.14 ); // $ExpectError
	isAlmostEqualFloat32Array( 'beep', 'beep', 2, {} ); // $ExpectError
}
