/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Returns a directory for user-specific configuration files.
*
* ## Notes
*
* -   On Windows platforms, the function first checks for a `LOCALAPPDATA` environment variable before checking for an `APPDATA` environment variable. This means that machine specific user configuration files have precedence over roaming user configuration files.
* -   On non-Windows platforms, if the function is unable to locate the current  user's `home` directory, the function returns `null`. Similarly, on Windows platforms, if the function is unable to locate an application data directory, the function also returns `null`.
*
* @param [p] - path to append to a base directory
* @returns directory
*
* @example
* var dir = configdir();
* // e.g., returns '/Users/<username>/Library/Preferences'
*
* @example
* var dir = configdir( 'appname/config' );
* // e.g., returns '/Users/<username>/Library/Preferences/appname/config'
*/
declare function configdir( p?: string ): string;


// EXPORTS //

export = configdir;
