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

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';
import rempio2f = require( './index' );


// TESTS //

// The function returns a number...
{
	const y: Collection<number> = [ 0.0 ];
	rempio2f( 128, y ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number as its first argument...
{
	const y: Collection<number> = [ 0.0 ];
	rempio2f( true, y ); // $ExpectError
	rempio2f( false, y ); // $ExpectError
	rempio2f( '5', y ); // $ExpectError
	rempio2f( [], y ); // $ExpectError
	rempio2f( {}, y ); // $ExpectError
	rempio2f( ( x: number ): number => x, y ); // $ExpectError
}

// The compiler throws an error if the function is provided a value other than a collection as its second argument...
{
	rempio2f( 128, true ); // $ExpectError
	rempio2f( 128, false ); // $ExpectError
	rempio2f( 128, 3 ); // $ExpectError
	rempio2f( 128, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	rempio2f(); // $ExpectError
	rempio2f( 3 ); // $ExpectError
}
