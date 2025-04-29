/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import Int16Array = require( '@stdlib/array/int16' );
import Int8Array = require( '@stdlib/array/int8' );
import isSameTypedArrayLike = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isSameTypedArrayLike( new Int8Array( [ 1.0, 2.0, 3.0 ] ), new Int16Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectType boolean
	isSameTypedArrayLike( new Int8Array( [ 1.0, 2.0, 3.0 ] ), new Int8Array( [ 1.0, 2.0, 4.0 ] ) ); // $ExpectType boolean
	isSameTypedArrayLike( 3.14, 3.14 ); // $ExpectType boolean
	isSameTypedArrayLike( null, null ); // $ExpectType boolean
	isSameTypedArrayLike( 'beep', 'boop' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isSameTypedArrayLike(); // $ExpectError
	isSameTypedArrayLike( 3.14 ); // $ExpectError
	isSameTypedArrayLike( 'beep', 'beep', 3.14 ); // $ExpectError
}
