
# VARIABLES #

# Define the path of the REPL executable:
REPL ?= $(LOCAL_BIN_DIR)/repl

# Define the path of the directory in which to run the REPL:
REPL_DIR ?= $(ROOT_DIR)


# TARGETS #

# Start a REPL environment.
#
# This target starts a REPL environment.

repl: $(NODE_MODULES) $(REPL)
	@cd $(REPL_DIR); \
	echo "Starting REPL..."; \
	$(REPL)

.PHONY: repl
