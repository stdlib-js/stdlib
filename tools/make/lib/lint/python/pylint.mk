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

#/
# Checks whether [Pylint][1] is installed.
#
# [1]: https://github.com/PyCQA/pylint
#
# @private
#
# @example
# make check-pylint
#/
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

#/
# Lints Python source code quality.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Python source files (e.g., lint all Python source files for a particular package).
#
# @private
# @param {string} [PYTHON_SOURCES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make pylint-src
#
# @example
# make pylint-src PYTHON_SOURCES_FILTER=".*/math/base/special/abs/.*"
#/
pylint-src:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pylint-src

#/
# Lints Python test fixture code quality.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Python test fixture files (e.g., lint all Python test fixture files for a particular package).
#
# @private
# @param {string} [TESTS_FIXTURES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make pylint-tests-fixtures
#
# @example
# make pylint-tests-fixtures PYTHON_TESTS_FIXTURES_FILTER=".*/math/base/special/abs/.*"
#/
pylint-tests-fixtures:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pylint-tests-fixtures

#/
# Lints Python examples code quality.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Python examples files (e.g., lint all Python examples files for a particular package).
#
# @private
# @param {string} [PYTHON_EXAMPLES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make pylint-examples
#
# @example
# make pylint-examples PYTHON_EXAMPLES_FILTER=".*/math/base/special/abs/.*"
#/
pylint-examples:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pylint-examples

#/
# Lints Python benchmark code quality.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Python benchmark files (e.g., lint all Python benchmark files for a particular package).
#
# @private
# @param {string} [PYTHON_BENCHMARKS_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make pylint-benchmarks
#
# @example
# make pylint-benchmarks PYTHON_BENCHMARKS_FILTER=".*/math/base/special/abs/.*"
#/
pylint-benchmarks:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pylint-benchmarks

#/
# Lints code quality for a specified list of Python files.
#
# ## Notes
#
# -   This rule is useful when wanting to lint a list of Python files generated by some other command (e.g., a list of changed Python files obtained via `git diff`).
#
# @private
# @param {string} FILES - list of Python file paths
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make pylint-files FILES='/foo/file.py /bar/file.py'
#/
pylint-files:
ifeq ($(FAIL_FAST), true)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(PYLINT) $(PYLINT_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pylint-files
