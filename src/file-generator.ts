export function generateFile(data: FormData): Blob {
  console.log(data.getAll("weekday"));
  console.log(data.get("termNum"));
  return new Blob(["this is text\nto go in a test file"], {
    type: "octet/stream",
  });
}
