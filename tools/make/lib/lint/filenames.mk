
# VARIABLES #

# Define the path of the linter executable:
FILENAME_LINTER ?= $(TOOLS_DIR)/lint/filenames/lint.sh


# TARGETS #

# Lint filenames.
#
# This target lints filenames.

lint-filenames:
	chmod +x $(FILENAME_LINTER)
	$(FILENAME_LINTER)


.PHONY: lint-filenames
