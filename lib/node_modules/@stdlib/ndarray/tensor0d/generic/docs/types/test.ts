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

import GenericTensor0D = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new GenericTensor0D( 10 ); // $ExpectType genericndarray<number>
	new GenericTensor0D( 10, {} ); // $ExpectType genericndarray<number>

	const tensor0d = GenericTensor0D;
	tensor0d( 10 ); // $ExpectType genericndarray<number>
	tensor0d( 10, {} ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a second argument which is not an options object...
{
	new GenericTensor0D( 10, true ); // $ExpectError
	new GenericTensor0D( 10, false ); // $ExpectError
	new GenericTensor0D( 10, null ); // $ExpectError
	new GenericTensor0D( 10, ( x: number ): number => x ); // $ExpectError

	const tensor0d = GenericTensor0D;
	tensor0d( 10, true ); // $ExpectError
	tensor0d( 10, false ); // $ExpectError
	tensor0d( 10, null ); // $ExpectError
	tensor0d( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	new GenericTensor0D( 8, {}, {}, {} ); // $ExpectError

	const tensor0d = GenericTensor0D;
	tensor0d( 8, {}, {}, {} ); // $ExpectError
}
