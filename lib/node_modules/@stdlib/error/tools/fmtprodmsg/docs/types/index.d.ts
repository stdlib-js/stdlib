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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

/**
* Formats an error message for production.
*
* @param code - error code
* @param ...args - error message arguments
* @returns formatted error message
*
* @example
* var msg = fmtprodmsg( '3', 'wrong_type' );
* // returns <string>
*/
declare function fmtprodmsg( code: any, ...args: Array<any> ): string;


// EXPORTS //

export = fmtprodmsg;
