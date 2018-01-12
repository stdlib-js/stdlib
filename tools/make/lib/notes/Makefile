
# VARIABLES #

# Define the command for finding notes:
FIND_NOTES ?= grep

# Define the command-line options:
FIND_NOTES_FLAGS ?= -Ern

# Define the search directory:
FIND_NOTES_DIR ?= $(ROOT_DIR)


# RULES #

#/
# Searches for annotated comments.
#
# ## Notes
#
# -   Annotated comments will be output along with their associated filename and line number.
#
# @param {string} KEYWORDS - pipe-delimited list of keywords identify annotations
#
# @example
# make notes
#/
notes:
	$(QUIET) $(FIND_NOTES) $(FIND_NOTES_FLAGS) $(KEYWORDS) $(FIND_NOTES_DIR) \
		--exclude-dir "$(NODE_MODULES)/*" \
		--exclude-dir "$(BUILD_DIR)/*" \
		--exclude-dir "$(DIST_DIR)/*" \
		--exclude-dir "$(REPORTS_DIR)/*" \
		--exclude-dir "$(DEPS_TMP_DIR)/*" \
		--exclude-dir "$(DEPS_BUILD_DIR)/*" \
		--exclude-dir "$(DOCS_DIR)/**/$(NODE_MODULES_FOLDER)/*" \
		--exclude "$(this_file)" \
		--exclude "$(ROOT_DIR)/.*" \
		--exclude "**/$(BUILD_FOLDER)/*" \
		--exclude TODO.md

.PHONY: notes
