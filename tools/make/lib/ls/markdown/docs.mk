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

# VARIABLES #

# Define a filepath pattern for documentation Markdown files:
MARKDOWN_DOCS_FILTER ?= .*/.*

# Define the command flags for finding documentation Markdown files:
FIND_MARKDOWN_DOCS_FLAGS ?= \
	-type f \
	-name "$(MARKDOWN_PATTERN)" \
	-regex "$(MARKDOWN_DOCS_FILTER)" \
	$(FIND_MARKDOWN_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_MARKDOWN_DOCS_FLAGS := -regextype posix-extended $(FIND_MARKDOWN_DOCS_FLAGS)
endif

# Define a command for listing documentation Markdown files:
FIND_MARKDOWN_DOCS_CMD ?= find $(find_kernel_prefix) $(DOCS_DIR) $(FIND_MARKDOWN_DOCS_FLAGS)

# Define the list of documentation Markdown files:
MARKDOWN_DOCS_FILES ?= $(shell $(FIND_MARKDOWN_DOCS_CMD))


# TARGETS #

#/
# Prints a list of all documentation Markdown files.
#
# @param {string} [MARKDOWN_DOCS_FILTER] - file path pattern (e.g., `.*/contributing/.*`)
#
# @example
# make list-markdown-docs
#
# @example
# make list-markdown-docs MARKDOWN_DOCS_FILTER=".*/contributing/.*"
#/
list-markdown-docs:
	$(QUIET) find $(find_kernel_prefix) $(DOCS_DIR) $(FIND_MARKDOWN_DOCS_FLAGS) $(find_print_list)

.PHONY: list-markdown-docs
