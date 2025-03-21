/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Slice } from '@stdlib/types/slice';

/**
* Converts a Slice object to a subsequence string.
*
* @param slice - input slice
* @returns subsequence string
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var str = slice2seq( new Slice( null, null, null ) );
* // returns ':'
*
* str = slice2seq( new Slice( null ) );
* // returns ':'
*
* str = slice2seq( new Slice( 10 ) );
* // returns ':10'
*
* str = slice2seq( new Slice( -1 ) );
* // returns ':-1'
*
* str = slice2seq( new Slice( 2, 10 ) );
* // returns '2:10'
*
* str = slice2seq( new Slice( -2, 10 ) );
* // returns '-2:10'
*
* str = slice2seq( new Slice( -2, -10 ) );
* // returns '-2:-10'
*
* str = slice2seq( new Slice( 2, null ) );
* // returns '2:'
*
* str = slice2seq( new Slice( null, 10 ) );
* // returns ':10'
*
* str = slice2seq( new Slice( 2, 10, 2 ) );
* // returns '2:10:2'
*
* str = slice2seq( new Slice( -1, null, -1 ) );
* // returns '-1::-1'
*
* str = slice2seq( new Slice( -1, -5, -1 ) );
* // returns '-1:-5:-1'
*
* str = slice2seq( new Slice( -1, 10, -1 ) );
* // returns '-1:10:-1'
*
* str = slice2seq( new Slice( 1, -1, 2 ) );
* // returns '1:-1:2'
*
* str = slice2seq( new Slice( null, null, -1 ) );
* // returns '::-1'
*/
declare function slice2seq( slice: Slice ): string;


// EXPORTS //

export = slice2seq;
