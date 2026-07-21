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

import isEqualInt16Array = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isEqualInt16Array( 3.14, 3.14 ); // $ExpectType boolean
	isEqualInt16Array( null, null ); // $ExpectType boolean
	isEqualInt16Array( 'beep', 'boop' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isEqualInt16Array(); // $ExpectError
	isEqualInt16Array( 3.14 ); // $ExpectError
	isEqualInt16Array( 'beep', 'beep', 3.14 ); // $ExpectError
}
