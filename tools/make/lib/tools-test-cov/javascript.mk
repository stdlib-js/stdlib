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

# DEPENDENCIES #

ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	include $(TOOLS_MAKE_LIB_DIR)/tools-test-cov/istanbul.mk
else
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), c8)
	include $(TOOLS_MAKE_LIB_DIR)/tools-test-cov/c8.mk
endif
endif


# RULES #

#/
# Runs JavaScript unit tests for project tools and generates a test coverage report.
#
# ## Notes
#
# -   Raw TAP output is piped to a TAP reporter.
# -   This command is useful when wanting to glob for JavaScript test files (e.g., generate a test coverage report for all JavaScript tests for a particular package).
#
# @param {string} [TESTS_FILTER] - file path pattern (e.g., `.*/doctest/compare-values/.*`)
# @param {string} [JAVASCRIPT_CODE_INSTRUMENTER] - JavaScript code instrumenter
# @param {*} [FAST_FAIL] - flag indicating whether to stop running tests upon encountering a test failure
#
# @example
# make tools-test-javascript-cov
#
# @example
# make tools-test-javascript-cov TESTS_FILTER=".*/doctest/compare-values/.*"
#/
tools-test-javascript-cov:
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	$(QUIET) NODE_ENV_TEST="$(NODE_ENV_TEST)" NODE_PATH_TEST="$(NODE_PATH_TEST)" NODE_FLAGS_TEST="$(NODE_FLAGS_TEST)" $(MAKE) -f $(this_file) tools-test-istanbul
else
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), c8)
	$(QUIET) NODE_ENV_TEST="$(NODE_ENV_TEST)" NODE_PATH_TEST="$(NODE_PATH_TEST)" NODE_FLAGS_TEST="$(NODE_FLAGS_TEST)" $(MAKE) -f $(this_file) tools-test-c8
endif
endif

.PHONY: tools-test-javascript-cov
