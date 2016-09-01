
# VARIABLES #

# Define the Node environment:
NODE_ENV_WORKSHOPS ?= $(NODE_ENV)

# Determine the host kernel:
KERNEL ?= $(shell uname -s)

# Based on the kernel, determine the `open` command:
ifeq ($(KERNEL), Darwin)
	OPEN ?= open
else
	OPEN ?= xdg-open
endif
# TODO: add Windows command

# Define the path to the [xslide][1] executable.
#
# To install xslide:
#     $ npm install xslide
#
# [1]: https://github.com/substack/xslide

XSLIDE ?= $(BIN_DIR)/xslide

# Define the port for viewing slides:
XSLIDE_WORKSHOP_PORT ?= 8001

# Define the command-line options to be used when invoking the `xslide` executable:
XSLIDE_WORKSHOP_FLAGS ?= -p $(XSLIDE_WORKSHOP_PORT)

# Define the slide directory:
NUMERIC_COMPUTING_SLIDES_DIR ?= $(WORKSHOPS_DIR)/numeric-computing/slides

# Define the slides file to open:
NUMERIC_COMPUTING_SLIDES ?= $(NUMERIC_COMPUTING_SLIDES_DIR)/00.md


# TARGETS #

# Launch a slide server.
#
# This target launches a server for viewing workshop slides.

workshops-numeric-computing-slides: $(NODE_MODULES)
	$(QUIET) $(XSLIDE) $(NUMERIC_COMPUTING_SLIDES) $(XSLIDE_WORKSHOP_FLAGS)

.PHONY: workshops-numeric-computing-slides


# View slides.
#
# This target opens workshop slides in a local web browser.

view-workshops-numeric-computing-slides:
	$(QUIET) $(OPEN) http://localhost:$(XSLIDE_WORKSHOP_PORT)

.PHONY: view-workshops-numeric-computing-slides
