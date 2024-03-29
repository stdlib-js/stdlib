#/
# @license Apache-2.0
#
# Copyright (c) 2022 The Stdlib Authors.
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

# Define the path to the C8 executable.
#
# ## Notes
#
# -   To install c8:
#
#     ```bash
#     $ npm install c8
#     ```
#
# [1]: https://github.com/bcoe/c8
C8 ?= $(BIN_DIR)/c8

# Define the output file path for the HTML report generated by c8:
C8_HTML_REPORT ?= $(COVERAGE_DIR)/lcov-report/index.html

# Define which files and directories to exclude from coverage instrumentation:
C8_EXCLUDES_FLAGS = \
	--exclude-node-modules=false \
	-x 'node_modules/**' \
	-x 'reports/**' \
	-x 'tmp/**' \
	-x 'deps/**' \
	-x 'dist/**' \
	-x "**/$(SRC_FOLDER)/**" \
	-x "**/$(TESTS_FOLDER)/**" \
	-x "**/$(EXAMPLES_FOLDER)/**" \
	-x "**/$(BENCHMARKS_FOLDER)/**" \
	-x "**/$(CONFIG_FOLDER)/**" \
	-x "**/$(DOCUMENTATION_FOLDER)/**"

# Define command-line options when generating coverage data:
C8_FLAGS = \
	$(C8_EXCLUDES_FLAGS) \
	--clean=false \
	--temp-directory $(COVERAGE_DIR)/tmp \
	--report-dir $(COVERAGE_DIR) \
	--reporter lcov


# RULES #

#/
# Runs unit tests and generates a test coverage report.
#
# ## Notes
#
# -   Raw TAP output is piped to a TAP reporter.
# -   This command is useful when wanting to glob for JavaScript test files (e.g., generate a test coverage report for all JavaScript tests for a particular package).
#
#
# @private
# @param {string} [TESTS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop running tests upon encountering a test failure
#
# @example
# make test-c8
#
# @example
# make test-c8 TESTS_FILTER=".*/blas/base/dasum/.*"
#/
test-c8: $(NODE_MODULES)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r test; do \
		echo ''; \
		echo "Running test: $$test"; \
		NODE_ENV="$(NODE_ENV_TEST)" \
		NODE_PATH="$(NODE_PATH_TEST)" \
		TEST_MODE=coverage \
		$(C8) $(C8_FLAGS) $(NODE) $$test | $(TAP_REPORTER) || exit 1; \
	done
else
	$(QUIET) $(FIND_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r test; do \
		echo ''; \
		echo "Running test: $$test"; \
		NODE_ENV="$(NODE_ENV_TEST)" \
		NODE_PATH="$(NODE_PATH_TEST)" \
		TEST_MODE=coverage \
		$(C8) $(C8_FLAGS) $(NODE) $$test | $(TAP_REPORTER) || echo 'Tests failed.'; \
	done
endif

.PHONY: test-c8

#/
# Opens an HTML test coverage report in a local web browser.
#
# @private
#
# @example
# make view-c8-report
#/
view-c8-report:
	$(QUIET) $(OPEN) $(C8_HTML_REPORT)

.PHONY: view-c8-report
