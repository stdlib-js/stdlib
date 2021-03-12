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

import rempio2 = require( './index' );
import { Collection } from '@stdlib/types/object';


// TESTS //

// The function returns a number...
{
	const y: Collection = [ 0.0, 0.0 ];
	rempio2( 128, y ); // $ExpectType number
}

// The function does not compile if provided a value other than a number as its first argument...
{
	const y: Collection = [ 0.0, 0.0 ];
	rempio2( true, y ); // $ExpectError
	rempio2( false, y ); // $ExpectError
	rempio2( '5', y ); // $ExpectError
	rempio2( [], y ); // $ExpectError
	rempio2( {}, y ); // $ExpectError
	rempio2( ( x: number ): number => x, y ); // $ExpectError
}

// The function does not compile if provided a value other than a collection as its second argument...
{
	rempio2( 128, true ); // $ExpectError
	rempio2( 128, false ); // $ExpectError
	rempio2( 128, 3 ); // $ExpectError
	rempio2( 128, {} ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	rempio2(); // $ExpectError
	rempio2( 3 ); // $ExpectError
}
