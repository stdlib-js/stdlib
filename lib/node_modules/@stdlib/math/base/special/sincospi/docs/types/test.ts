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

import sincospi = require( './index' );
import { Collection } from '@stdlib/types/object';


// TESTS //

// The function returns a collection...
{
	sincospi( 1.0 ); // $ExpectType Collection
	sincospi( [], 1.0 ); // $ExpectType Collection
}

// The function does not compile if provided an output array which is not a collection...
{
	sincospi( 2, 1.0 ); // $ExpectError
	sincospi( false, 1.0 ); // $ExpectError
	sincospi( true, 1.0 ); // $ExpectError
	sincospi( {}, 1.0 ); // $ExpectError
}

// The function does not compile if provided a last argument other than a number...
{
	sincospi( true ); // $ExpectError
	sincospi( false ); // $ExpectError
	sincospi( null ); // $ExpectError
	sincospi( undefined ); // $ExpectError
	sincospi( '5' ); // $ExpectError
	sincospi( [] ); // $ExpectError
	sincospi( {} ); // $ExpectError
	sincospi( ( x: number ): number => x ); // $ExpectError

	const out: Collection = [];
	sincospi( out, true ); // $ExpectError
	sincospi( out, false ); // $ExpectError
	sincospi( out, null ); // $ExpectError
	sincospi( out undefined ); // $ExpectError
	sincospi( out, '5' ); // $ExpectError
	sincospi( out, [] ); // $ExpectError
	sincospi( out, {} ); // $ExpectError
	sincospi( out, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	sincospi(); // $ExpectError
}
