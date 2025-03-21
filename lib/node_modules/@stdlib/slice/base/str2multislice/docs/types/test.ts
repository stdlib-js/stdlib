/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import str2multislice = require( './index' );


// TESTS //

// The function returns a MultiSlice object (or null)...
{
	str2multislice( 'MultiSlice(Slice(0,10,2),2,null)' ); // $ExpectType MultiSlice | null
	str2multislice( 'MultiSlice(Slice(null,null,-2),2,null)' ); // $ExpectType MultiSlice | null
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	str2multislice( 1 ); // $ExpectError
	str2multislice( true ); // $ExpectError
	str2multislice( false ); // $ExpectError
	str2multislice( null ); // $ExpectError
	str2multislice( undefined ); // $ExpectError
	str2multislice( [] ); // $ExpectError
	str2multislice( {} ); // $ExpectError
	str2multislice( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	str2multislice(); // $ExpectError
	str2multislice( 'MultiSlice(Slice(0,10,2),2,null)', {} ); // $ExpectError
}
