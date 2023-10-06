"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nobox = exports.createSchema = exports.config = void 0;
const nobox_client_1 = require("nobox-client");
exports.config = {
    endpoint: "https://api.nobox.cloud",
    project: "MiNo",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6eyJfaWQiOiI2NGZiMTNmM2MxNjk1MmMyOTU0NWZiZTQiLCJlbWFpbCI6InBybXBzbWFydEBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzU2MTk0ODQ0P3Y9NCIsImZpcnN0TmFtZSI6IkFwYXRhIE1pcmFjbGUgUGV0ZXIiLCJsYXN0TmFtZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMy0wOS0wOFQxMjozMDo0My4wOTZaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0wOFQxMjozMDo0My4wOTZaIn0sImlhdCI6MTY5NjU5NjM0NSwiZXhwIjoxNjk2NzI1OTQ1fQ.w16zpC3Zr3xNOgo1j8g_pBvDl3spKCfFivKbg8kBCJw",
};
exports.createSchema = (0, nobox_client_1.getSchemaCreator)(exports.config, { type: "rowed" });
exports.Nobox = (0, nobox_client_1.getFunctions)(exports.config);
