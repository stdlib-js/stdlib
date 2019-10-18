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

import frexp = require( './index' );
import { Collection } from '@stdlib/types/object';


// TESTS //

// The function returns a collection...
{
	frexp( 4.0 ); // $ExpectType Collection
	frexp( [], 4.0 ); // $ExpectType Collection
}

// The function does not compile if provided an output array which is not a collection...
{
	frexp( 2, 4.0 ); // $ExpectError
	frexp( false, 4.0 ); // $ExpectError
	frexp( true, 4.0 ); // $ExpectError
	frexp( {}, 4.0 ); // $ExpectError
}

// The function does not compile if provided a last argument other than a number...
{
	frexp( true ); // $ExpectError
	frexp( false ); // $ExpectError
	frexp( null ); // $ExpectError
	frexp( undefined ); // $ExpectError
	frexp( '5' ); // $ExpectError
	frexp( [] ); // $ExpectError
	frexp( {} ); // $ExpectError
	frexp( ( x: number ): number => x ); // $ExpectError

	const out: Collection = [];
	frexp( out, true ); // $ExpectError
	frexp( out, false ); // $ExpectError
	frexp( out, null ); // $ExpectError
	frexp( out undefined ); // $ExpectError
	frexp( out, '5' ); // $ExpectError
	frexp( out, [] ); // $ExpectError
	frexp( out, {} ); // $ExpectError
	frexp( out, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	frexp(); // $ExpectError
}
