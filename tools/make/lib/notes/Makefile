
# VARIABLES #

GREP ?= grep

# Define the command-line options to use when invoking `grep`:
GREP_FLAGS ?= -Ern

# Define keywords identifying annotations:
NOTES ?= 'TODO|FIXME|WARNING|HACK|NOTE|OPTIMIZE'


# TARGETS #

# Enumerate all annotations.
#
# This target searches for annotated comments which indicate work that remains to be completed. Annotated comments will be output, along with the filename and line number where they appear.

notes:
	$(GREP) $(GREP_FLAGS) $(NOTES) $(ROOT) \
		--exclude-dir "$(NODE_MODULES)/*" \
		--exclude-dir "$(BUILD_DIR)/*" \
		--exclude "$(THIS_FILE)" \
		--exclude "$(ROOT)/.*" \
		--exclude "$(REPORTS_DIR)/*" \
		--exclude TODO.md


.PHONY: notes
