#/
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
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
# Lints license headers in Markdown files.
#
# @param {string} [MARKDOWN_FILTER] - file path pattern (e.g., `.*/utils/group-by/.*`)
#
# @example
# make lint-license-headers-markdown
#
# @example
# make lint-license-headers-markdown MARKDOWN_FILTER=".*/utils/group-by/.*"
#/
lint-license-headers-markdown: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_MARKDOWN_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-markdown
