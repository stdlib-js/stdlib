#/
# @license Apache-2.0
#
# Copyright (c) 2024 The Stdlib Authors.
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

# Define the directory containing git notes:
GIT_NOTES_DIR ?= $(ROOT_DIR)/docs/git-notes


# RULES #

#/
# Applies Git notes from the `docs/git-notes` directory.
#
# ## Notes
#
# -   This rule applies Git notes where the file name (without the .txt extension) is the Git commit hash and the content is the note.
#
# @example
# make apply-git-notes
#/
apply-git-notes:
	$(QUIET) echo "Applying Git notes..."
	$(QUIET) for note in $(GIT_NOTES_DIR)/*.txt; do \
		if [ -f "$$note" ]; then \
			commit_hash=$$(basename "$$note" .txt); \
			git notes add -f -F "$$note" "$$commit_hash" || echo "Failed to apply note for commit $$commit_hash"; \
		fi; \
	done
	$(QUIET) echo "Git notes application complete."

.PHONY: apply-git-notes
