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

/// <reference types="@stdlib/types"/>

import modf = require( './index' );
import { Collection } from '@stdlib/types/object';


// TESTS //

// The function returns a collection...
{
	modf( 1.0 ); // $ExpectType Collection
	modf( [], 1.0 ); // $ExpectType Collection
}

// The function does not compile if provided an output array which is not a collection...
{
	modf( 2, 1.0 ); // $ExpectError
	modf( false, 1.0 ); // $ExpectError
	modf( true, 1.0 ); // $ExpectError
	modf( {}, 1.0 ); // $ExpectError
}

// The function does not compile if provided a last argument other than a number...
{
	modf( true ); // $ExpectError
	modf( false ); // $ExpectError
	modf( null ); // $ExpectError
	modf( undefined ); // $ExpectError
	modf( '5' ); // $ExpectError
	modf( [] ); // $ExpectError
	modf( {} ); // $ExpectError
	modf( ( x: number ): number => x ); // $ExpectError

	const out: Collection = [];
	modf( out, true ); // $ExpectError
	modf( out, false ); // $ExpectError
	modf( out, null ); // $ExpectError
	modf( out undefined ); // $ExpectError
	modf( out, '5' ); // $ExpectError
	modf( out, [] ); // $ExpectError
	modf( out, {} ); // $ExpectError
	modf( out, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	modf(); // $ExpectError
}
