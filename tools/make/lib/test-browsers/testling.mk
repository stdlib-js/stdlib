#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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

# Define the path to the [testling][1] executable.
#
# To install testling:
#
# ```bash
# $ npm install testling
# ```
#
# [1]: https://github.com/substack/testling
BROWSER_TEST ?= $(BIN_DIR)/testling

# Define command-line options to be used when invoking the testling executable:
BROWSER_TEST_FLAGS ?=


# TARGETS #

# View browser tests in a local web browser.
#
# This target runs unit tests in a local web browser using [testling][1].
#
# [1]: https://github.com/substack/testling

view-testling: $(NODE_MODULES)
	$(QUIET) NODE_ENV=$(NODE_ENV_TEST) \
	$(BROWSERIFY) \
		$(BROWSERIFY_FLAGS) \
		$(TESTS) \
	| $(BROWSER_TEST) \
		--x $(OPEN) \
	| $(TAP_REPORTER)

.PHONY: view-testling
