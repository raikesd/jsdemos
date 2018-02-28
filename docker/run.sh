#!/bin/bash
docker run --name jsdemos --rm -it \
	-e http_proxy=http://www-proxy.us.oracle.com:80 \
	-e https_proxy=http://www-proxy.us.oracle.com:80 \
	-v /home/draikes/jsdemos/demos:/scratch \
	jsdemos bash
