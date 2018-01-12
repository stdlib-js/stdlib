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

# Define the path to the [Pylint][1] executable.
#
# To install Pylint:
#
# ```bash
# $ pip install pylint
# ```
#
# [1]: https://github.com/PyCQA/pylint
PYLINT ?= pylint

# Define the path to the Pylint configuration file:
PYLINT_CONF ?= $(CONFIG_DIR)/pylint/.pylintrc

# Define the command-line options to use when invoking the Pylint executable:
PYLINT_FLAGS ?= \
	--rcfile $(PYLINT_CONF) \
	--reports n \
	--output-format text


# RULES #

# Check for Pylint.
#
# This target checks if Pylint is installed.

check-pylint:
ifeq (, $(shell command -v $(PYLINT) 2>/dev/null))
	$(QUIET) echo ''
	$(QUIET) echo 'Pylint is not installed. Please install Pylint and try again.'
	$(QUIET) echo 'For install instructions, see https://github.com/PyCQA/pylint.'
	$(QUIET) echo ''
	$(QUIET) exit 1
else
	$(QUIET) echo 'Pylint is installed.'
	$(QUIET) exit 0
endif

.PHONY: check-pylint

# Check source code quality.
#
# This target lints only Python source files.

pylint-src:
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done

.PHONY: pylint-src


# Check test fixture code quality.
#
# This target lints only Python test fixture files.

pylint-tests-fixtures:
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done

.PHONY: pylint-tests-fixtures


# Check example code quality.
#
# This target lints only Python example files.

pylint-examples:
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done

.PHONY: pylint-examples


# Check benchmark code quality.
#
# This target lints only Python benchmark files.

pylint-benchmarks:
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done

.PHONY: pylint-benchmarks


# Check Python code quality.
#
# This target lints Python files. Note that we expect `$FILES` to be a Python file list.

pylint-files:
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done

.PHONY: pylint-files
