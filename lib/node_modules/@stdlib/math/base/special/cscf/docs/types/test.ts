/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import cscf = require( './index' );


// TESTS //

// The function returns a number...
{
	cscf( 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	cscf( true ); // $ExpectError
	cscf( false ); // $ExpectError
	cscf( null ); // $ExpectError
	cscf( undefined ); // $ExpectError
	cscf( '5' ); // $ExpectError
	cscf( [] ); // $ExpectError
	cscf( {} ); // $ExpectError
	cscf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cscf(); // $ExpectError
}
