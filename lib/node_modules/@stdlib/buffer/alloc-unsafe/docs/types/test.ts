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

import allocUnsafe = require( './index' );


// TESTS //

// The function returns a buffer...
{
	allocUnsafe( 10 ); // $ExpectType Buffer
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	allocUnsafe( 'abc' ); // $ExpectError
	allocUnsafe( false ); // $ExpectError
	allocUnsafe( true ); // $ExpectError
	allocUnsafe( null ); // $ExpectError
	allocUnsafe( {} ); // $ExpectError
	allocUnsafe( [] ); // $ExpectError
	allocUnsafe( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	allocUnsafe(); // $ExpectError
	allocUnsafe( 4, 4 ); // $ExpectError
}
