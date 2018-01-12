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

# TARGETS #

# Run fixture runners.
#
# This target runs scripts written in Python to generate test fixtures.

test-fixtures-python:
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		$(PYTHON) $$file || exit 1; \
	done

.PHONY: test-fixtures-python


# Run fixture runners.
#
# This target runs a list of scripts written in Python to generate fixtures.

test-fixtures-python-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Generating test fixtures: $$file"; \
		$(PYTHON) $$file || exit 1; \
	done

.PHONY: test-fixtures-python-files
