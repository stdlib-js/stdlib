
# VARIABLES #

# Define the path to the executable for listing licenses:
LIST_LICENSES ?= $(BIN_DIR)/nlf

# Define the command-line options to be used when listing licenses:
LIST_LICENSES_FLAGS ?= --summary detail


# TARGETS #

# List licenses.
#
# This target lists the license for each dependency.

list-licenses: $(NODE_MODULES)
	$(QUIET) $(LIST_LICENSES) $(LIST_LICENSES_FLAGS)

.PHONY: list-licenses
