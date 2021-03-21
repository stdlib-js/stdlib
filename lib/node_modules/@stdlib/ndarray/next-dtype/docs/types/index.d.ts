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

// TypeScript Version: 2.0

/**
* Returns the next larger ndarray data type of the same kind.
*
* ## Notes
*
* -   If not provided a data type, the function returns a table.
* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
* -   If provided an unrecognized data type, the function returns `null`.
*
* @param dtype - ndarray data type
* @returns next larger data type(s) or null
*
* @example
* var dt = nextDataType( 'float32' );
* // returns 'float64'
*/
declare function nextDataType( dtype?: string ): any;


// EXPORTS //

export = nextDataType;
