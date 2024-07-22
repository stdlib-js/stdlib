/**
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

'use strict';

// MAIN //

/*
* List of settings API aliases and corresponding argument completion compatibility.
*
* ## Notes
*
* -   Each entry in the list has the following format:
*
*     ```
*     [ <alias>, <completion_flag>, ... ]
*     ```
*
*     where `<alias>` is a settings API alias and `<completion_flag>` is a `boolean` indicating whether an argument is compatible with settings name completion.
*
* -   For the purposes of TAB completion, only those positional arguments which expect settings names need to be included. For example, if an API has three parameters and only the first argument expects a settings name, only that first argument needs to be included below; the remaining two arguments can be omitted, as those arguments are assumed to be incompatible with settings name completion. If an API has three parameters and only the second argument expects a settings name, only the first two arguments need to be included below, with the first argument documented as `null`; the remaining argument can be omitted.
*/
var aliases = [
	// Note: keep in alphabetical order...
	[ 'settings', true ]
];


// EXPORTS //

module.exports = aliases;
