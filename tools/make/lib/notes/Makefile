
# VARIABLES #

# Define keywords identifying annotations:
KEYWORDS ?= 'TODO|FIXME|WARNING|HACK|NOTE|OPTIMIZE'

# Define the command for finding notes:
FIND_NOTES ?= grep

# Define the command-line options:
FIND_NOTES_FLAGS ?= -Ern

# Define the search directory:
FIND_NOTES_DIR ?= $(ROOT_DIR)


# TARGETS #

# Enumerate all annotations.
#
# This target searches for annotated comments which indicate work that remains to be completed. Annotated comments will be output, along with the filename and line number where they appear.

notes:
	$(QUIET) $(FIND_NOTES) $(FIND_NOTES_FLAGS) $(KEYWORDS) $(FIND_NOTES_DIR) \
		--exclude-dir "$(NODE_MODULES)/*" \
		--exclude-dir "$(BUILD_DIR)/*" \
		--exclude-dir "$(REPORTS_DIR)/*" \
		--exclude-dir "$(DEPS_TMP_DIR)/*" \
		--exclude-dir "$(DEPS_BUILD_DIR)/*" \
		--exclude "$(this_file)" \
		--exclude "$(ROOT_DIR)/.*" \
		--exclude "**/$(BUILD_FOLDER)/*" \
		--exclude TODO.md

.PHONY: notes
