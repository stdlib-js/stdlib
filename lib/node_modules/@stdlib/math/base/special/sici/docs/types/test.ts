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

import sici = require( './index' );
import { Collection } from '@stdlib/types/object';


// TESTS //

// The function returns a collection...
{
	sici( 1.0 ); // $ExpectType Collection
	sici( [], 1.0 ); // $ExpectType Collection
}

// The function does not compile if provided an output array which is not a collection...
{
	sici( 2, 1.0 ); // $ExpectError
	sici( false, 1.0 ); // $ExpectError
	sici( true, 1.0 ); // $ExpectError
	sici( {}, 1.0 ); // $ExpectError
}

// The function does not compile if provided a last argument other than a number...
{
	sici( true ); // $ExpectError
	sici( false ); // $ExpectError
	sici( null ); // $ExpectError
	sici( undefined ); // $ExpectError
	sici( '5' ); // $ExpectError
	sici( [] ); // $ExpectError
	sici( {} ); // $ExpectError
	sici( ( x: number ): number => x ); // $ExpectError

	const out: Collection = [];
	sici( out, true ); // $ExpectError
	sici( out, false ); // $ExpectError
	sici( out, null ); // $ExpectError
	sici( out undefined ); // $ExpectError
	sici( out, '5' ); // $ExpectError
	sici( out, [] ); // $ExpectError
	sici( out, {} ); // $ExpectError
	sici( out, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	sici(); // $ExpectError
}
