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

import sincos = require( './index' );
import { Collection } from '@stdlib/types/object';


// TESTS //

// The function returns a collection...
{
	sincos( 1.0 ); // $ExpectType Collection
	sincos( [], 1.0 ); // $ExpectType Collection
}

// The function does not compile if provided an output array which is not a collection...
{
	sincos( 2, 1.0 ); // $ExpectError
	sincos( false, 1.0 ); // $ExpectError
	sincos( true, 1.0 ); // $ExpectError
	sincos( {}, 1.0 ); // $ExpectError
}

// The function does not compile if provided a last argument other than a number...
{
	sincos( true ); // $ExpectError
	sincos( false ); // $ExpectError
	sincos( null ); // $ExpectError
	sincos( undefined ); // $ExpectError
	sincos( '5' ); // $ExpectError
	sincos( [] ); // $ExpectError
	sincos( {} ); // $ExpectError
	sincos( ( x: number ): number => x ); // $ExpectError

	const out: Collection = [];
	sincos( out, true ); // $ExpectError
	sincos( out, false ); // $ExpectError
	sincos( out, null ); // $ExpectError
	sincos( out undefined ); // $ExpectError
	sincos( out, '5' ); // $ExpectError
	sincos( out, [] ); // $ExpectError
	sincos( out, {} ); // $ExpectError
	sincos( out, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	sincos(); // $ExpectError
}
