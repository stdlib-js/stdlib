/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import ctors = require( './index' );


// TESTS //

// The function returns a function or null..
{
	ctors( 'uint32' ); // $ExpectType Uint32ArrayConstructor
	ctors( 'uint16' ); // $ExpectType Uint16ArrayConstructor
	ctors( 'uint8' ); // $ExpectType Uint8ArrayConstructor
	ctors( 'uint8c' ); // $ExpectType Uint8ClampedArrayConstructor
	ctors( 'uint' ); // $ExpectType Function | null
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	ctors(); // $ExpectError
	ctors( 'uint32', 3 ); // $ExpectError
}
