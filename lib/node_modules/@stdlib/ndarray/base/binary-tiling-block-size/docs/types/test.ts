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

import binaryBlockSize = require( './index' );


// TESTS //

// The function returns a number...
{
	binaryBlockSize( 'float64', 'float64', 'float64' ); // $ExpectType number
	binaryBlockSize( 'generic', 'generic', 'generic' ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	binaryBlockSize( 123, 'float64', 'float64' ); // $ExpectError
	binaryBlockSize( true, 'float64', 'float64' ); // $ExpectError
	binaryBlockSize( false, 'float64', 'float64' ); // $ExpectError
	binaryBlockSize( null, 'float64', 'float64' ); // $ExpectError
	binaryBlockSize( {}, 'float64', 'float64' ); // $ExpectError
	binaryBlockSize( [], 'float64', 'float64' ); // $ExpectError
	binaryBlockSize( ( x: number ): number => x, 'float64', 'float64' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	binaryBlockSize( 'int32', 123, 'int32' ); // $ExpectError
	binaryBlockSize( 'int32', true, 'int32' ); // $ExpectError
	binaryBlockSize( 'int32', false, 'int32' ); // $ExpectError
	binaryBlockSize( 'int32', null, 'int32' ); // $ExpectError
	binaryBlockSize( 'int32', {}, 'int32' ); // $ExpectError
	binaryBlockSize( 'int32', [], 'int32' ); // $ExpectError
	binaryBlockSize( 'int32', ( x: number ): number => x, 'int32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a string...
{
	binaryBlockSize( 'int32', 'int32', 123 ); // $ExpectError
	binaryBlockSize( 'int32', 'int32', true ); // $ExpectError
	binaryBlockSize( 'int32', 'int32', false ); // $ExpectError
	binaryBlockSize( 'int32', 'int32', null ); // $ExpectError
	binaryBlockSize( 'int32', 'int32', {} ); // $ExpectError
	binaryBlockSize( 'int32', 'int32', [] ); // $ExpectError
	binaryBlockSize( 'int32', 'int32', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	binaryBlockSize(); // $ExpectError
	binaryBlockSize( 'float64' ); // $ExpectError
	binaryBlockSize( 'float64', 'float64' ); // $ExpectError
	binaryBlockSize( 'float64', 'float64', 'float64', 'float64' ); // $ExpectError
}
