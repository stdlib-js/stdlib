/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import utf16ToUTF8Array = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	utf16ToUTF8Array( '☃' ); // $ExpectType number[]
}

// The function does not compile if provided a value other than a string...
{
	utf16ToUTF8Array( true ); // $ExpectError
	utf16ToUTF8Array( false ); // $ExpectError
	utf16ToUTF8Array( null ); // $ExpectError
	utf16ToUTF8Array( undefined ); // $ExpectError
	utf16ToUTF8Array( 5 ); // $ExpectError
	utf16ToUTF8Array( [] ); // $ExpectError
	utf16ToUTF8Array( {} ); // $ExpectError
	utf16ToUTF8Array( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	utf16ToUTF8Array(); // $ExpectError
}
