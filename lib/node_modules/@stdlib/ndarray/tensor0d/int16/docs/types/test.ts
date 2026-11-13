/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import ArrayBuffer = require( '@stdlib/array/buffer' );
import Int16Tensor0D = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new Int16Tensor0D(); // $ExpectType int16ndarray
	new Int16Tensor0D( {} ); // $ExpectType int16ndarray

	new Int16Tensor0D( 10 ); // $ExpectType int16ndarray
	new Int16Tensor0D( 10, {} ); // $ExpectType int16ndarray

	new Int16Tensor0D( new ArrayBuffer( 64 ) ); // $ExpectType int16ndarray
	new Int16Tensor0D( new ArrayBuffer( 64 ), {} ); // $ExpectType int16ndarray

	new Int16Tensor0D( new ArrayBuffer( 64 ), 8 ); // $ExpectType int16ndarray
	new Int16Tensor0D( new ArrayBuffer( 64 ), 8, {} ); // $ExpectType int16ndarray

	const tensor0d = Int16Tensor0D;
	tensor0d(); // $ExpectType int16ndarray
	tensor0d( {} ); // $ExpectType int16ndarray

	tensor0d( 10 ); // $ExpectType int16ndarray
	tensor0d( 10, {} ); // $ExpectType int16ndarray

	tensor0d( new ArrayBuffer( 64 ) ); // $ExpectType int16ndarray
	tensor0d( new ArrayBuffer( 64 ), {} ); // $ExpectType int16ndarray

	tensor0d( new ArrayBuffer( 64 ), 8 ); // $ExpectType int16ndarray
	tensor0d( new ArrayBuffer( 64 ), 8, {} ); // $ExpectType int16ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, buffer, or options object...
{
	new Int16Tensor0D( true ); // $ExpectError
	new Int16Tensor0D( false ); // $ExpectError
	new Int16Tensor0D( null ); // $ExpectError
	new Int16Tensor0D( ( x: number ): number => x ); // $ExpectError

	const tensor0d = Int16Tensor0D;
	tensor0d( true ); // $ExpectError
	tensor0d( false ); // $ExpectError
	tensor0d( null ); // $ExpectError
	tensor0d( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number or options object...
{
	new Int16Tensor0D( new ArrayBuffer( 64 ), true ); // $ExpectError
	new Int16Tensor0D( new ArrayBuffer( 64 ), false ); // $ExpectError
	new Int16Tensor0D( new ArrayBuffer( 64 ), null ); // $ExpectError
	new Int16Tensor0D( new ArrayBuffer( 64 ), ( x: number ): number => x ); // $ExpectError

	const tensor0d = Int16Tensor0D;
	tensor0d( new ArrayBuffer( 64 ), true ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), false ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), null ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	new Int16Tensor0D( new ArrayBuffer( 64 ), 8, true ); // $ExpectError
	new Int16Tensor0D( new ArrayBuffer( 64 ), 8, false ); // $ExpectError
	new Int16Tensor0D( new ArrayBuffer( 64 ), 8, null ); // $ExpectError
	new Int16Tensor0D( new ArrayBuffer( 64 ), 8, ( x: number ): number => x ); // $ExpectError

	const tensor0d = Int16Tensor0D;
	tensor0d( new ArrayBuffer( 64 ), 8, true ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, false ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, null ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new Int16Tensor0D( buf, 8, {}, {} ); // $ExpectError

	const tensor0d = Int16Tensor0D;
	tensor0d( buf, 8, {}, {} ); // $ExpectError
}
