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

import isColumnMajor = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isColumnMajor( [ 1, 2 ] ); // $ExpectType boolean
	isColumnMajor( [ 2, 1 ] ); // $ExpectType boolean
}

// The function does not compile if provided a value other than an array-like object containing numbers...
{
	isColumnMajor( true ); // $ExpectError
	isColumnMajor( false ); // $ExpectError
	isColumnMajor( null ); // $ExpectError
	isColumnMajor( undefined ); // $ExpectError
	isColumnMajor( '5' ); // $ExpectError
	isColumnMajor( [ '1', '2' ] ); // $ExpectError
	isColumnMajor( {} ); // $ExpectError
	isColumnMajor( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	isColumnMajor(); // $ExpectError
}
