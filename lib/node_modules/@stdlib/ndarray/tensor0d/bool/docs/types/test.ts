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
import BooleanTensor0D = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new BooleanTensor0D(); // $ExpectType boolndarray
	new BooleanTensor0D( {} ); // $ExpectType boolndarray

	new BooleanTensor0D( true ); // $ExpectType boolndarray
	new BooleanTensor0D( true, {} ); // $ExpectType boolndarray

	new BooleanTensor0D( new ArrayBuffer( 64 ) ); // $ExpectType boolndarray
	new BooleanTensor0D( new ArrayBuffer( 64 ), {} ); // $ExpectType boolndarray

	new BooleanTensor0D( new ArrayBuffer( 64 ), 8 ); // $ExpectType boolndarray
	new BooleanTensor0D( new ArrayBuffer( 64 ), 8, {} ); // $ExpectType boolndarray

	const tensor0d = BooleanTensor0D;
	tensor0d(); // $ExpectType boolndarray
	tensor0d( {} ); // $ExpectType boolndarray

	tensor0d( true ); // $ExpectType boolndarray
	tensor0d( true, {} ); // $ExpectType boolndarray

	tensor0d( new ArrayBuffer( 64 ) ); // $ExpectType boolndarray
	tensor0d( new ArrayBuffer( 64 ), {} ); // $ExpectType boolndarray

	tensor0d( new ArrayBuffer( 64 ), 8 ); // $ExpectType boolndarray
	tensor0d( new ArrayBuffer( 64 ), 8, {} ); // $ExpectType boolndarray
}

// The compiler throws an error if the function is provided a first argument which is not a boolean, buffer, or options object...
{
	new BooleanTensor0D( 5 ); // $ExpectError
	new BooleanTensor0D( '5' ); // $ExpectError
	new BooleanTensor0D( null ); // $ExpectError
	new BooleanTensor0D( ( x: number ): number => x ); // $ExpectError

	const tensor0d = BooleanTensor0D;
	tensor0d( 5 ); // $ExpectError
	tensor0d( '5' ); // $ExpectError
	tensor0d( null ); // $ExpectError
	tensor0d( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number or options object...
{
	new BooleanTensor0D( new ArrayBuffer( 64 ), true ); // $ExpectError
	new BooleanTensor0D( new ArrayBuffer( 64 ), false ); // $ExpectError
	new BooleanTensor0D( new ArrayBuffer( 64 ), null ); // $ExpectError
	new BooleanTensor0D( new ArrayBuffer( 64 ), ( x: number ): number => x ); // $ExpectError

	const tensor0d = BooleanTensor0D;
	tensor0d( new ArrayBuffer( 64 ), true ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), false ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), null ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an options object...
{
	new BooleanTensor0D( new ArrayBuffer( 64 ), 8, true ); // $ExpectError
	new BooleanTensor0D( new ArrayBuffer( 64 ), 8, false ); // $ExpectError
	new BooleanTensor0D( new ArrayBuffer( 64 ), 8, null ); // $ExpectError
	new BooleanTensor0D( new ArrayBuffer( 64 ), 8, ( x: number ): number => x ); // $ExpectError

	const tensor0d = BooleanTensor0D;
	tensor0d( new ArrayBuffer( 64 ), 8, true ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, false ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, null ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new BooleanTensor0D( buf, 8, {}, {} ); // $ExpectError

	const tensor0d = BooleanTensor0D;
	tensor0d( buf, 8, {}, {} ); // $ExpectError
}
