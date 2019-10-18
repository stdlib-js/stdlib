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

import fresnel = require( './index' );
import { Collection } from '@stdlib/types/object';


// TESTS //

// The function returns a collection...
{
	fresnel( 1.0 ); // $ExpectType Collection
	fresnel( [], 1.0 ); // $ExpectType Collection
}

// The function does not compile if provided an output array which is not a collection...
{
	fresnel( 2, 1.0 ); // $ExpectError
	fresnel( false, 1.0 ); // $ExpectError
	fresnel( true, 1.0 ); // $ExpectError
	fresnel( {}, 1.0 ); // $ExpectError
}

// The function does not compile if provided a last argument other than a number...
{
	fresnel( true ); // $ExpectError
	fresnel( false ); // $ExpectError
	fresnel( null ); // $ExpectError
	fresnel( undefined ); // $ExpectError
	fresnel( '5' ); // $ExpectError
	fresnel( [] ); // $ExpectError
	fresnel( {} ); // $ExpectError
	fresnel( ( x: number ): number => x ); // $ExpectError

	const out: Collection = [];
	fresnel( out, true ); // $ExpectError
	fresnel( out, false ); // $ExpectError
	fresnel( out, null ); // $ExpectError
	fresnel( out undefined ); // $ExpectError
	fresnel( out, '5' ); // $ExpectError
	fresnel( out, [] ); // $ExpectError
	fresnel( out, {} ); // $ExpectError
	fresnel( out, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	fresnel(); // $ExpectError
}
