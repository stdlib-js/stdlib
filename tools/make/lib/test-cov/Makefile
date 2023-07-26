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

include $(TOOLS_MAKE_LIB_DIR)/test-cov/javascript.mk


# RULES #

#/
# Runs unit tests and generates a test coverage report.
#
# ## Notes
#
# -   This command is useful when wanting to glob for test files (e.g., generate a test coverage report for all tests for a particular package).
#
# @param {string} [TESTS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop running tests upon encountering a test failure
#
# @example
# make test-cov
#
# @example
# make test-cov TESTS_FILTER=".*/blas/base/dasum/.*"
#/
test-cov: test-javascript-cov

.PHONY: test-cov

#/
# Opens an HTML test coverage report in a local web browser.
#
# @example
# make view-cov
#/
view-cov: view-javascript-cov

.PHONY: view-cov

#/
# Removes coverage artifacts, such as reports and HTML pages.
#
# @example
# make clean-cov
#/
clean-cov: clean-javascript-cov

.PHONY: clean-cov

#/
# Runs a specified list of files containing unit tests and generates a test coverage report.
#
# @param {string} FILES - list of test file paths
# @param {*} [FAST_FAIL] - flag indicating whether to stop running tests upon encountering a test failure
#
# @example
# make test-cov-files FILES='/foo/test.js /bar/test.js'
#/
test-cov-files: test-javascript-cov-files

.PHONY: test-cov-files
