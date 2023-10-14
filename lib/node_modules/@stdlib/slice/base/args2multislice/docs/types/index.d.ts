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

import { ArrayLike } from '@stdlib/types/array';
import { Slice, MultiSlice } from '@stdlib/types/slice';

/**
* Slice argument.
*/
type SliceArgument = Slice | number | null | undefined;

/**
* Creates a MultiSlice object from a list of MultiSlice constructor arguments.
*
* @param args - list of constructor arguments
* @returns MultiSlice object
*
* @example
* var Slice = require( `@stdlib/slice/ctor` );
*
* var s = args2multislice( [ void 0, new Slice( 0, 10, 1 ) ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ null, <Slice> ]
*
* @example
* var Slice = require( `@stdlib/slice/ctor` );
*
* var s = args2multislice( [ new Slice( 0, 10, 1 ), void 0 ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, null ]
*
* @example
* var Slice = require( `@stdlib/slice/ctor` );
*
* var s = args2multislice( [ new Slice( 0, 10, 1 ), void 0, void 0, new Slice( 0, 10, 1 ) ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ <Slice>, null, null, <Slice> ]
*
* @example
* var Slice = require( `@stdlib/slice/ctor` );
*
* var s = args2multislice( [ void 0, new Slice( 0, 10, 1 ), null,  void 0, new Slice( 2, 9, 2 ), null, void 0 ] );
* // returns <MultiSlice>
*
* var data = s.data;
* // returns [ null, <Slice>, null, null, <Slice>, null, null ]
*/
declare function args2multislice( args: ArrayLike<SliceArgument> ): MultiSlice;


// EXPORTS //

export = args2multislice;
