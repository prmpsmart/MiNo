import { Config, getFunctions, getSchemaCreator } from "nobox-client";

export const config: Config = {
  endpoint: "https://api.nobox.cloud",
  project: "MiNo",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6eyJfaWQiOiI2NGZiMTNmM2MxNjk1MmMyOTU0NWZiZTQiLCJlbWFpbCI6InBybXBzbWFydEBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzU2MTk0ODQ0P3Y9NCIsImZpcnN0TmFtZSI6IkFwYXRhIE1pcmFjbGUgUGV0ZXIiLCJsYXN0TmFtZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMy0wOS0wOFQxMjozMDo0My4wOTZaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0wOFQxMjozMDo0My4wOTZaIn0sImlhdCI6MTY5NTYyNjYzNCwiZXhwIjoxNjk1NzU2MjM0fQ.PO9k_6ZBKMJrNyfAS-bjTnrupxEf5t0Jv1DlsPLSpOY",
};

export const createSchema = getSchemaCreator(config, { type: "rowed" });
export const Nobox = getFunctions(config);
