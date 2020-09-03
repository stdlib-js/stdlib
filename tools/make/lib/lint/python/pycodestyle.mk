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

# Define the path to the [pycodestyle][1] executable.
#
# To install pycodestyle:
#
# ```bash
# $ pip install pycodestyle
# ```
#
# [1]: https://github.com/PyCQA/pycodestyle
PYCODESTYLE ?= pycodestyle

# Define the path to the pycodestyle configuration file:
PYCODESTYLE_CONF ?= $(CONFIG_DIR)/pycodestyle/.pycodestyle

# Define the command-line options to use when invoking the pycodestyle executable:
PYCODESTYLE_FLAGS ?= \
	--config $(PYCODESTYLE_CONF)


# RULES #

#/
# Checks whether [pycodestyle][1] is installed.
#
# [1]: https://github.com/PyCQA/pycodestyle
#
# @private
#
# @example
# make check-pycodestyle
#/
check-pycodestyle:
ifeq (, $(shell command -v $(PYCODESTYLE) 2>/dev/null))
	$(QUIET) echo ''
	$(QUIET) echo 'pycodestyle is not installed. Please install pycodestyle and try again.'
	$(QUIET) echo 'For install instructions, see https://github.com/PyCQA/pycodestyle.'
	$(QUIET) echo ''
	$(QUIET) exit 1
else
	$(QUIET) echo 'pycodestyle is installed.'
	$(QUIET) exit 0
endif

.PHONY: check-pycodestyle

#/
# Lints Python source code style.
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
# make pycodestyle-src
#
# @example
# make pycodestyle-src PYTHON_SOURCES_FILTER=".*/math/base/special/abs/.*"
#/
pycodestyle-src:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pycodestyle-src

#/
# Lints Python test fixture code style.
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
# make pycodestyle-tests-fixtures
#
# @example
# make pycodestyle-tests-fixtures PYTHON_TESTS_FIXTURES_FILTER=".*/math/base/special/abs/.*"
#/
pycodestyle-tests-fixtures:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pycodestyle-tests-fixtures

#/
# Lints Python examples code style.
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
# make pycodestyle-examples
#
# @example
# make pycodestyle-examples PYTHON_EXAMPLES_FILTER=".*/math/base/special/abs/.*"
#/
pycodestyle-examples:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pycodestyle-examples

#/
# Lints Python benchmark code style.
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
# make pycodestyle-benchmarks
#
# @example
# make pycodestyle-benchmarks PYTHON_BENCHMARKS_FILTER=".*/math/base/special/abs/.*"
#/
pycodestyle-benchmarks:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pycodestyle-benchmarks

#/
# Lints code style for a specified list of Python files.
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
# make pycodestyle-files FILES='/foo/file.py /bar/file.py'
#/
pycodestyle-files:
ifeq ($(FAIL_FAST), true)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pycodestyle-files
