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

import sargs2multislice = require( './index' );


// TESTS //

// The function returns a MultiSlice object (or null)...
{
	sargs2multislice( 'Slice(0,10,2),2,null' ); // $ExpectType MultiSlice | null
	sargs2multislice( 'Slice(null,null,-2),2,null' ); // $ExpectType MultiSlice | null
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	sargs2multislice( 1 ); // $ExpectError
	sargs2multislice( true ); // $ExpectError
	sargs2multislice( false ); // $ExpectError
	sargs2multislice( null ); // $ExpectError
	sargs2multislice( undefined ); // $ExpectError
	sargs2multislice( [] ); // $ExpectError
	sargs2multislice( {} ); // $ExpectError
	sargs2multislice( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	sargs2multislice(); // $ExpectError
	sargs2multislice( 'Slice(0,10,2),2,null', {} ); // $ExpectError
}
