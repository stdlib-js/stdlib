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

import isBufferLengthCompatibleShape = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isBufferLengthCompatibleShape( 4, [ 2, 2 ] ); // $ExpectType boolean
	isBufferLengthCompatibleShape( 3, [ 2, 2 ] ); // $ExpectType boolean
}

// The function does not compile if provided a first argument which is not a number...
{
	const shape = [ 2, 2 ];
	isBufferLengthCompatibleShape( true, shape ); // $ExpectError
	isBufferLengthCompatibleShape( false, shape ); // $ExpectError
	isBufferLengthCompatibleShape( null, shape ); // $ExpectError
	isBufferLengthCompatibleShape( undefined, shape ); // $ExpectError
	isBufferLengthCompatibleShape( '5', shape ); // $ExpectError
	isBufferLengthCompatibleShape( [ '1', '2' ], shape ); // $ExpectError
	isBufferLengthCompatibleShape( {}, shape ); // $ExpectError
	isBufferLengthCompatibleShape( ( x: number ): number => x, shape ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	isBufferLengthCompatibleShape( 4, true ); // $ExpectError
	isBufferLengthCompatibleShape( 4, false ); // $ExpectError
	isBufferLengthCompatibleShape( 4, null ); // $ExpectError
	isBufferLengthCompatibleShape( 4, undefined ); // $ExpectError
	isBufferLengthCompatibleShape( 4, '5' ); // $ExpectError
	isBufferLengthCompatibleShape( 4, [ '1', '2' ] ); // $ExpectError
	isBufferLengthCompatibleShape( 4, {} ); // $ExpectError
	isBufferLengthCompatibleShape( 4, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	isBufferLengthCompatibleShape(); // $ExpectError
	isBufferLengthCompatibleShape( 4 ); // $ExpectError
}
