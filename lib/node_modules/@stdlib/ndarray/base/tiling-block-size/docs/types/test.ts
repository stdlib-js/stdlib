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

import blockSize = require( './index' );


// TESTS //

// The function returns a number...
{
	blockSize( [ 'float64' ] ); // $ExpectType number
	blockSize( [ 'float32', 'int8' ] ); // $ExpectType number
	blockSize( [ 'generic', 'generic', 'generic' ] ); // $ExpectType number
}

// The compiler throws an error if the function is provided an argument which is not an array-like object of data types...
{
	blockSize( true ); // $ExpectError
	blockSize( false ); // $ExpectError
	blockSize( '5' ); // $ExpectError
	blockSize( 123 ); // $ExpectError
	blockSize( null ); // $ExpectError
	blockSize( void 0 ); // $ExpectError
	blockSize( {} ); // $ExpectError
	blockSize( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	blockSize(); // $ExpectError
	blockSize( [ 'float64' ], {} ); // $ExpectError
}
