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

import ind = require( './index' );


// TESTS //

// The function returns a number...
{
	ind( 2, 9, 'clamp' ); // $ExpectType number
	ind( 2, 9, 'wrap' ); // $ExpectType number
	ind( 2, 9, 'throw' ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not a number...
{
	ind( 'abc', 9, 'clamp' ); // $ExpectError
	ind( true, 9, 'clamp' ); // $ExpectError
	ind( false, 9, 'clamp' ); // $ExpectError
	ind( null, 9, 'clamp' ); // $ExpectError
	ind( undefined, 9, 'clamp' ); // $ExpectError
	ind( [ '1', '2' ], 9, 'clamp' ); // $ExpectError
	ind( {}, 9, 'clamp' ); // $ExpectError
	ind( ( x: number ): number => x, 9, 'clamp' ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a number...
{
	ind( 2, 'abc', 'clamp' ); // $ExpectError
	ind( 2, true, 'clamp' ); // $ExpectError
	ind( 2, false, 'clamp' ); // $ExpectError
	ind( 2, null, 'clamp' ); // $ExpectError
	ind( 2, undefined, 'clamp' ); // $ExpectError
	ind( 2, [ '1', '2' ], 'clamp' ); // $ExpectError
	ind( 2, {}, 'clamp' ); // $ExpectError
	ind( 2, ( x: number ): number => x, 'clamp' ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a known index mode...
{
	ind( 2, 9, 123 ); // $ExpectError
	ind( 2, 9, 'abc' ); // $ExpectError
	ind( 2, 9, true ); // $ExpectError
	ind( 2, 9, false ); // $ExpectError
	ind( 2, 9, null ); // $ExpectError
	ind( 2, 9, undefined ); // $ExpectError
	ind( 2, 9, [ '1', '2' ] ); // $ExpectError
	ind( 2, 9, {} ); // $ExpectError
	ind( 2, 9, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	ind(); // $ExpectError
	ind( 2 ); // $ExpectError
	ind( 2, 9 ); // $ExpectError
}
