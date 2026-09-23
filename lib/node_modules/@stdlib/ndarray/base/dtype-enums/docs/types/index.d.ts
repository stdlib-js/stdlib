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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { DataTypeString } from '@stdlib/types/ndarray';

/**
* An object mapping supported data type strings to enumeration constants.
*/
type Table = {
	[ key in DataTypeString ]: number;
};

/**
* Returns an object mapping supported data type strings to enumeration constants.
*
* ## Notes
*
* -   Downstream consumers of this mapping should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the object should be used in an opaque manner.
* -   The main purpose of this function is JavaScript and C inter-operation of ndarray objects.
*
* @returns object mapping supported data type strings to enumeration constants
*
* @example
* var o = dtypeEnums();
* // returns {...}
*/
declare function dtypeEnums(): Table;


// EXPORTS //

export = dtypeEnums;
