/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import Complex128 = require( '@stdlib/complex/float64/ctor' );
import Uint64 = require( '@stdlib/number/uint64/ctor' );
import isUint64 = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isUint64( new Uint64( 1234 ) ); // $ExpectType boolean
	isUint64( new Complex128( 5.0, 3.0 ) ); // $ExpectType boolean
	isUint64( {} ); // $ExpectType boolean
	isUint64( 123 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isUint64(); // $ExpectError
	isUint64( new Uint64( 1234 ), 123 ); // $ExpectError
}
