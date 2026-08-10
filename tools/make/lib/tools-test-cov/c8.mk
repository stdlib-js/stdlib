#/
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
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

# RULES #

#/
# Runs unit tests for project tools and generates a test coverage report using c8.
#
# ## Notes
#
# -   Raw TAP output is piped to a TAP reporter.
# -   This command is useful when wanting to glob for JavaScript test files (e.g., generate a test coverage report for all JavaScript tests for a particular package).
#
#
# @private
# @param {string} [TESTS_FILTER] - file path pattern
# @param {*} [FAST_FAIL] - flag indicating whether to stop running tests upon encountering a test failure
#
# @example
# make tools-test-c8
#
# @example
# make tools-test-c8 TESTS_FILTER=".*/doctest/compare-values/.*"
#/
tools-test-c8: $(NODE_MODULES)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_TOOLS_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r test; do \
		echo ''; \
		echo "Running test: $$test"; \
		NODE_ENV="$(NODE_ENV_TEST)" \
		NODE_PATH="$(NODE_PATH_TEST)" \
		TEST_MODE=coverage \
		$(C8) $(c8_flags) $(NODE) $$test | $(TAP_REPORTER) || exit 1; \
	done
else
	$(QUIET) $(FIND_TOOLS_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r test; do \
		echo ''; \
		echo "Running test: $$test"; \
		NODE_ENV="$(NODE_ENV_TEST)" \
		NODE_PATH="$(NODE_PATH_TEST)" \
		TEST_MODE=coverage \
		$(C8) $(c8_flags) $(NODE) $$test | $(TAP_REPORTER) || echo 'Tests failed.'; \
	done
endif

.PHONY: tools-test-c8
