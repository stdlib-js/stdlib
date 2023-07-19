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

// tslint:disable: no-construct
// tslint:disable: no-unused-expression

import Uint8ClampedArray = require( './index' );


// TESTS //

// The function returns a typed array instance...
{
	new Uint8ClampedArray( 10 ); // $ExpectType Uint8ClampedArray
	new Uint8ClampedArray( [ 2, 5, 5, 7 ] ); // $ExpectType Uint8ClampedArray
}

// The constructor function has to be invoked with `new`...
{
	Uint8ClampedArray( 10 ); // $ExpectError
	Uint8ClampedArray( [ 2, 5, 5, 7 ] ); // $ExpectError
}
