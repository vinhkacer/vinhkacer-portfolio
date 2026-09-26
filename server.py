#!/usr/bin/env python3
"""
Custom high-performance HTTP server for Vinh Kacer Portfolio.
Supports HTTP 206 Partial Content (Byte-Range Requests) for seamless
HTML5 video streaming, scrubbing, and seeking in Safari, Chrome, and Firefox.
"""

import os
import re
import sys
import mimetypes
import http.server
import socketserver

PORT = 8000
if len(sys.argv) > 1:
    try:
        PORT = int(sys.argv[1])
    except ValueError:
        pass

class StreamingHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def send_head(self):
        if "Range" not in self.headers:
            self.range = None
            return super().send_head()

        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            return super().send_head()

        range_header = self.headers["Range"].strip()
        range_match = re.match(r"bytes=(\d+)-(\d*)", range_header)
        if not range_match:
            return super().send_head()

        total_size = os.path.getsize(path)
        start = int(range_match.group(1))
        end = int(range_match.group(2)) if range_match.group(2) else total_size - 1

        if start >= total_size or end >= total_size or start > end:
            self.send_error(416, "Requested Range Not Satisfiable")
            return None

        try:
            f = open(path, "rb")
        except OSError:
            self.send_error(404, "File not found")
            return None

        self.send_response(206)
        ctype = self.guess_type(path)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Range", f"bytes {start}-{end}/{total_size}")
        self.send_header("Content-Length", str(end - start + 1))
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()
        f.seek(start)
        self.range = (start, end)
        return f

    def copyfile(self, source, outputfile):
        if not hasattr(self, "range") or not self.range:
            return super().copyfile(source, outputfile)
        start, end = self.range
        remaining = end - start + 1
        chunk_size = 64 * 1024
        while remaining > 0:
            chunk = source.read(min(chunk_size, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)

class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == "__main__":
    mimetypes.init()
    mimetypes.add_type("video/mp4", ".mp4")
    mimetypes.add_type("image/jpeg", ".jpg")
    mimetypes.add_type("image/jpeg", ".jpeg")
    mimetypes.add_type("application/json", ".json")
    mimetypes.add_type("text/yaml", ".yml")
    mimetypes.add_type("text/yaml", ".yaml")
    mimetypes.add_type("text/markdown", ".md")

    handler = StreamingHTTPRequestHandler
    
    # Try preferred port or next available
    port = PORT
    max_attempts = 10
    httpd = None
    for attempt in range(max_attempts):
        try:
            httpd = ThreadingTCPServer(("", port), handler)
            break
        except OSError:
            port += 1
            
    if httpd is None:
        print(f"Error: Could not bind to any port starting from {PORT}")
        sys.exit(1)

    print(f"======================================================")
    print(f"  🎬 VINH KACER CINEMATIC PORTFOLIO LOCAL SERVER")
    print(f"  Server running at: http://localhost:{port}/")
    print(f"  Byte-Range Video Streaming: ACTIVE (HTTP 206)")
    print(f"======================================================")
    sys.stdout.flush()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
        httpd.server_close()
