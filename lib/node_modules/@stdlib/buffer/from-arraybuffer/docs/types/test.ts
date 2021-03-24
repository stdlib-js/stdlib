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

import fromArrayBuffer = require( './index' );


// TESTS //

// The function returns a buffer...
{
	const buf = new ArrayBuffer( 10 );
	fromArrayBuffer( buf ); // $ExpectType Buffer
	fromArrayBuffer( buf, 2 ); // $ExpectType Buffer
	fromArrayBuffer( buf, 2, 4 ); // $ExpectType Buffer
}

// The compiler throws an error if the function is provided a first argument which is not an array buffer...
{
	fromArrayBuffer( 'abc' ); // $ExpectError
	fromArrayBuffer( 123 ); // $ExpectError
	fromArrayBuffer( false ); // $ExpectError
	fromArrayBuffer( true ); // $ExpectError
	fromArrayBuffer( null ); // $ExpectError
	fromArrayBuffer( {} ); // $ExpectError
	fromArrayBuffer( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const buf = new ArrayBuffer( 10 );
	fromArrayBuffer( buf, 'abc' ); // $ExpectError
	fromArrayBuffer( buf, false ); // $ExpectError
	fromArrayBuffer( buf, true ); // $ExpectError
	fromArrayBuffer( buf, null ); // $ExpectError
	fromArrayBuffer( buf, [] ); // $ExpectError
	fromArrayBuffer( buf, {} ); // $ExpectError
	fromArrayBuffer( buf, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const buf = new ArrayBuffer( 10 );
	fromArrayBuffer( buf, 2, 'abc' ); // $ExpectError
	fromArrayBuffer( buf, 2, false ); // $ExpectError
	fromArrayBuffer( buf, 2, true ); // $ExpectError
	fromArrayBuffer( buf, 2, null ); // $ExpectError
	fromArrayBuffer( buf, 2, [] ); // $ExpectError
	fromArrayBuffer( buf, 2, {} ); // $ExpectError
	fromArrayBuffer( buf, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const buf = new ArrayBuffer( 10 );
	fromArrayBuffer(); // $ExpectError
	fromArrayBuffer( buf, 2, 4, 2 ); // $ExpectError
}
