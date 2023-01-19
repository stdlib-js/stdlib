#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#/

# VARIABLES #

# Define the path to the [tape][1] executable.
#
# ## Notes
#
# -   We reference the `bin` file directly in order to support using `istanbul` for code coverage on Windows (see <https://github.com/gotwarlost/istanbul#usage-on-windows>).
#
# -   To install tape:
#
#     ```bash
#     $ npm install tape
#     ```
#
# [1]: https://github.com/ljharb/tape
JAVASCRIPT_TEST ?= $(NODE_MODULES)/tape/bin/tape

# Define any command-line options to use when invoking the `tape` executable:
JAVASCRIPT_TEST_FLAGS ?=
