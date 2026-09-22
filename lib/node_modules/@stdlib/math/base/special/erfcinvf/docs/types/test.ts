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

import erfcinvf = require( './index' );


// TESTS //

// The function returns a number...
{
	erfcinvf( 1.8 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	erfcinvf( true ); // $ExpectError
	erfcinvf( false ); // $ExpectError
	erfcinvf( null ); // $ExpectError
	erfcinvf( undefined ); // $ExpectError
	erfcinvf( '5' ); // $ExpectError
	erfcinvf( [] ); // $ExpectError
	erfcinvf( {} ); // $ExpectError
	erfcinvf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	erfcinvf(); // $ExpectError
}
