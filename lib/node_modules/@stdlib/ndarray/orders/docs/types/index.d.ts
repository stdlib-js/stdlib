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
* Returns a list of ndarray orders.
*
* ## Notes
*
* -   The output array contains the following orders:
*
*     -   row-major: row-major (C-style) order.
*     -   column-major: column-major (Fortran-style) order.
*
* @returns list of ndarray orders
*
* @example
* var list = orders();
* // returns [ 'row-major', 'column-major' ]
*/
declare function orders(): Array<string>;


// EXPORTS //

export = orders;
