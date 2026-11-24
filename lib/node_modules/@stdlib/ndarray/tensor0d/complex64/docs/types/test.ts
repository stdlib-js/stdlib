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
import Complex64Tensor0D = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new Complex64Tensor0D(); // $ExpectType complex64ndarray
	new Complex64Tensor0D( {} ); // $ExpectType complex64ndarray

	new Complex64Tensor0D( 10 ); // $ExpectType complex64ndarray
	new Complex64Tensor0D( 10, {} ); // $ExpectType complex64ndarray

	new Complex64Tensor0D( 10, 20 ); // $ExpectType complex64ndarray
	new Complex64Tensor0D( 10, 20, {} ); // $ExpectType complex64ndarray

	new Complex64Tensor0D( new ArrayBuffer( 64 ) ); // $ExpectType complex64ndarray
	new Complex64Tensor0D( new ArrayBuffer( 64 ), {} ); // $ExpectType complex64ndarray

	new Complex64Tensor0D( new ArrayBuffer( 64 ), 16 ); // $ExpectType complex64ndarray
	new Complex64Tensor0D( new ArrayBuffer( 64 ), 16, {} ); // $ExpectType complex64ndarray

	const tensor0d = Complex64Tensor0D;
	tensor0d(); // $ExpectType complex64ndarray
	tensor0d( {} ); // $ExpectType complex64ndarray

	tensor0d( 10 ); // $ExpectType complex64ndarray
	tensor0d( 10, {} ); // $ExpectType complex64ndarray

	tensor0d( 10, 20 ); // $ExpectType complex64ndarray
	tensor0d( 10, 20, {} ); // $ExpectType complex64ndarray

	tensor0d( new ArrayBuffer( 64 ) ); // $ExpectType complex64ndarray
	tensor0d( new ArrayBuffer( 64 ), {} ); // $ExpectType complex64ndarray

	tensor0d( new ArrayBuffer( 64 ), 16 ); // $ExpectType complex64ndarray
	tensor0d( new ArrayBuffer( 64 ), 16, {} ); // $ExpectType complex64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, complex number, buffer, or options object...
{
	new Complex64Tensor0D( true ); // $ExpectError
	new Complex64Tensor0D( false ); // $ExpectError
	new Complex64Tensor0D( null ); // $ExpectError
	new Complex64Tensor0D( ( x: number ): number => x ); // $ExpectError

	const tensor0d = Complex64Tensor0D;
	tensor0d( true ); // $ExpectError
	tensor0d( false ); // $ExpectError
	tensor0d( null ); // $ExpectError
	tensor0d( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number or options object...
{
	new Complex64Tensor0D( new ArrayBuffer( 64 ), true ); // $ExpectError
	new Complex64Tensor0D( new ArrayBuffer( 64 ), false ); // $ExpectError
	new Complex64Tensor0D( new ArrayBuffer( 64 ), null ); // $ExpectError
	new Complex64Tensor0D( new ArrayBuffer( 64 ), ( x: number ): number => x ); // $ExpectError

	const tensor0d = Complex64Tensor0D;
	tensor0d( new ArrayBuffer( 64 ), true ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), false ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), null ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	new Complex64Tensor0D( new ArrayBuffer( 64 ), 8, true ); // $ExpectError
	new Complex64Tensor0D( new ArrayBuffer( 64 ), 8, false ); // $ExpectError
	new Complex64Tensor0D( new ArrayBuffer( 64 ), 8, null ); // $ExpectError
	new Complex64Tensor0D( new ArrayBuffer( 64 ), 8, ( x: number ): number => x ); // $ExpectError

	const tensor0d = Complex64Tensor0D;
	tensor0d( new ArrayBuffer( 64 ), 8, true ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, false ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, null ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new Complex64Tensor0D( 1, 2, {}, {} ); // $ExpectError
	new Complex64Tensor0D( buf, 16, {}, {} ); // $ExpectError

	const tensor0d = Complex64Tensor0D;
	tensor0d( 1, 2, {}, {} ); // $ExpectError
	tensor0d( buf, 16, {}, {} ); // $ExpectError
}
