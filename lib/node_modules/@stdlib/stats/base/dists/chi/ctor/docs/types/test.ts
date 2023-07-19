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

/* tslint:disable:no-unused-expression */

import Chi = require( './index' );


// TESTS //

// The function returns a distribution instance...
{
	new Chi(); // $ExpectType Chi
	new Chi( 1.5 ); // $ExpectType Chi
}

// The compiler throws an error if the function is provided a value other than a number...
{
	new Chi( true ); // $ExpectError
	new Chi( false ); // $ExpectError
	new Chi( '5' ); // $ExpectError
	new Chi( [] ); // $ExpectError
	new Chi( {} ); // $ExpectError
	new Chi( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of argumemts...
{
	new Chi( 1.0, 2.0 ); // $ExpectError
}
