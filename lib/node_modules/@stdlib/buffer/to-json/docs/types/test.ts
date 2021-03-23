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

import array2buffer = require( '@stdlib/buffer/from-array' );
import toJSON = require( './index' );


// TESTS //

// The function returns an object...
{
	const buf = array2buffer( [ 1, 2 ] );
	toJSON( buf ); // $ExpectType any
}

// The function does not compile if provided a value other than a buffer...
{
	toJSON( 'abc' ); // $ExpectError
	toJSON( true ); // $ExpectError
	toJSON( false ); // $ExpectError
	toJSON( null ); // $ExpectError
	toJSON( undefined ); // $ExpectError
	toJSON( 5 ); // $ExpectError
	toJSON( [] ); // $ExpectError
	toJSON( {} ); // $ExpectError
	toJSON( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	toJSON(); // $ExpectError
}
