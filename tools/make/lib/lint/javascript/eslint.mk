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

# Define the path to the [ESLint][1] executable.
#
# To install ESLint:
#
# ```bash
# $ npm install eslint
# ```
#
# [1]: http://eslint.org//
ESLINT ?= $(BIN_DIR)/eslint

# Define the path to the ESLint configuration file:
ESLINT_CONF ?= $(CONFIG_DIR)/eslint/.eslintrc.js

# Define the path to the ESLint configuration file for examples:
ESLINT_CONF_EXAMPLES ?= $(CONFIG_DIR)/eslint/.eslintrc.examples.js

# Define the path to the ESLint configuration file for tests:
ESLINT_CONF_TESTS ?= $(CONFIG_DIR)/eslint/.eslintrc.tests.js

# Define the path to the ESLint configuration file for benchmarks:
ESLINT_CONF_BENCHMARKS ?= $(CONFIG_DIR)/eslint/.eslintrc.benchmarks.js

# Define the path to the ESLint ignore file:
ESLINT_IGNORE ?= $(CONFIG_DIR)/eslint/.eslintignore

# Define the command-line options to use when invoking the ESLint executable:
ESLINT_FLAGS ?= \
	--ignore-path $(ESLINT_IGNORE)


# RULES #

# Check source code quality.
#
# This target lints only JavaScript source files.

eslint-src: $(NODE_MODULES)
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF) $$file || exit 1; \
	done
else
	$(QUIET) EXIT_CODE=0 && $(FIND_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF) $$file || { EXIT_CODE=1; exit 0; } \
	done
	exit $(EXIT_CODE)
endif

.PHONY: eslint-src


# Check test code quality.
#
# This target lints only JavaScript test files.

eslint-tests: $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_TESTS) $$file || exit 1; \
	done

.PHONY: eslint-tests


# Check example code quality.
#
# This target lints only JavaScript example files.

eslint-examples: $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_EXAMPLES) $$file || exit 1; \
	done

.PHONY: eslint-examples


# Check benchmark code quality.
#
# This target lints only JavaScript benchmark files.

eslint-benchmarks: $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF_BENCHMARKS) $$file || exit 1; \
	done

.PHONY: eslint-benchmarks


# Check JavaScript code quality.
#
# This target lints JavaScript files. Note that we expect `$FILES` to be a JavaScript file list.

eslint-files: $(NODE_MODULES)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(ESLINT) $(ESLINT_FLAGS) --config $(ESLINT_CONF) $$file || exit 1; \
	done

.PHONY: eslint-files
