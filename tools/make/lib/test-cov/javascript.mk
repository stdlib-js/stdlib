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
	include $(TOOLS_MAKE_LIB_DIR)/test-cov/istanbul.mk
else
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), c8)
	include $(TOOLS_MAKE_LIB_DIR)/test-cov/c8.mk
endif
endif


# RULES #

#/
# Runs JavaScript unit tests and generates a test coverage report.
#
# ## Notes
#
# -   Raw TAP output is piped to a TAP reporter.
# -   This command is useful when wanting to glob for JavaScript test files (e.g., generate a test coverage report for all JavaScript tests for a particular package).
#
# @param {string} [TESTS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {string} [JAVASCRIPT_CODE_INSTRUMENTER] - JavaScript code instrumenter
# @param {*} [FAST_FAIL] - flag indicating whether to stop running tests upon encountering a test failure
#
# @example
# make test-javascript-cov
#
# @example
# make test-javascript-cov TESTS_FILTER=".*/blas/base/dasum/.*"
#/
test-javascript-cov: clean-javascript-cov
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	$(QUIET) NODE_ENV_TEST="$(NODE_ENV_TEST)" NODE_PATH_TEST="$(NODE_PATH_TEST)" $(MAKE) -f $(this_file) test-istanbul
else
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), c8)
	$(QUIET) NODE_ENV_TEST="$(NODE_ENV_TEST)" NODE_PATH_TEST="$(NODE_PATH_TEST)" $(MAKE) -f $(this_file) test-c8
endif
endif

.PHONY: test-javascript-cov

#/
# Opens an HTML test coverage report in a local web browser.
#
# @example
# make view-javascript-cov
#/
view-javascript-cov:
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	$(QUIET) $(MAKE) -f $(this_file) view-istanbul-report
else
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), c8)
	$(QUIET) $(MAKE) -f $(this_file) view-c8-report
endif
endif

.PHONY: view-javascript-cov

#/
# Removes a JavaScript coverage directory (including all coverage artifacts).
#
# @example
# make clean-javascript-cov
#/
clean-javascript-cov:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(COVERAGE_DIR)

.PHONY: clean-javascript-cov

#/
# Runs a specified list of files containing JavaScript unit tests and generates a test coverage report.
#
# @param {string} FILES - list of JavaScript test file paths
# @param {string} [JAVASCRIPT_CODE_INSTRUMENTER] - JavaScript code instrumenter
# @param {*} [FAST_FAIL] - flag indicating whether to stop running tests upon encountering a test failure
#
# @example
# make test-javascript-cov-files FILES='/foo/test.js /bar/test.js'
#/
test-javascript-cov-files: clean-javascript-cov
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), istanbul)
	$(QUIET) NODE_ENV_TEST="$(NODE_ENV_TEST)" NODE_PATH_TEST="$(NODE_PATH_TEST)" FILES="$(FILES)" $(MAKE) -f $(this_file) test-istanbul-files
else
ifeq ($(JAVASCRIPT_CODE_INSTRUMENTER), c8)
	$(QUIET) NODE_ENV_TEST="$(NODE_ENV_TEST)" NODE_PATH_TEST="$(NODE_PATH_TEST)" FILES="$(FILES)" $(MAKE) -f $(this_file) test-c8-files
endif
endif

.PHONY: test-javascript-cov-files
