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

import isSameAccessorArray = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isSameAccessorArray( 3.14, 3.14 ); // $ExpectType boolean
	isSameAccessorArray( null, null ); // $ExpectType boolean
	isSameAccessorArray( 'beep', 'boop' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isSameAccessorArray(); // $ExpectError
	isSameAccessorArray( 3.14 ); // $ExpectError
	isSameAccessorArray( 'beep', 'beep', 3.14 ); // $ExpectError
}
