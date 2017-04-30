
# TARGETS #

# Run Python benchmarks.
#
# This target runs a list of Python benchmarks in sequential order. Note that we assume the benchmarks can be run using Python.

benchmark-python:
	$(QUIET) for file in $(BENCHMARKS); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		$(PYTHON) $$file || exit 1; \
	done

.PHONY: benchmark-python
