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

# Define the path to the [JSHint][1] executable.
#
# To install JSHint:
#
# ```bash
# $ npm install jshint
# ```
#
# [1]: http://jshint.com/
JSHINT ?= $(BIN_DIR)/jshint

# Define the path to the JSHint configuration file:
JSHINT_CONF ?= $(CONFIG_DIR)/jshint/.jshintrc

# Define the path to the JSHint ignore file:
JSHINT_IGNORE ?= $(CONFIG_DIR)/jshint/.jshintignore

# Define the path to the [jshint-stylish][1] reporter (pretty printing).
#
# To install jshint-stylish:
#
# ```bash
# $ npm install jshint-stylish
# ```
#
# [1]: https://www.npmjs.com/package/jshint-stylish
JSHINT_REPORTER ?= $(NODE_MODULES)/jshint-stylish

# Define the command-line options to use when invoking the JSHint executable:
JSHINT_FLAGS ?= \
	--config $(JSHINT_CONF) \
	--exclude-path $(JSHINT_IGNORE) \
	--reporter $(JSHINT_REPORTER)


# RULES #

# Check source code quality.
#
# This target lints only JavaScript source files.

jshint-src: $(NODE_MODULES)
	$(QUIET) $(FIND_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JSHINT) $(JSHINT_FLAGS) $$file || exit 1; \
	done

.PHONY: jshint-src


# Check test code quality.
#
# This target lints only JavaScript test files.

jshint-tests: $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JSHINT) $(JSHINT_FLAGS) $$file || exit 1; \
	done

.PHONY: jshint-tests


# Check example code quality.
#
# This target lints only JavaScript example files.

jshint-examples: $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JSHINT) $(JSHINT_FLAGS) $$file || exit 1; \
	done

.PHONY: jshint-examples


# Check benchmark code quality.
#
# This target lints only JavaScript benchmark files.

jshint-benchmarks: $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JSHINT) $(JSHINT_FLAGS) $$file || exit 1; \
	done

.PHONY: jshint-benchmarks


# Check JavaScript code quality.
#
# This target lints JavaScript files. Note that we expect `$FILES` to be a JavaScript file list.

jshint-files: $(NODE_MODULES)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JSHINT) $(JSHINT_FLAGS) $$file || exit 1; \
	done

.PHONY: jshint-files
