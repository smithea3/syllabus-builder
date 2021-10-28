import { getMeetDates } from "./date-generator";

export function generateFile(data: FormData): Blob {
  const meetings: string[] = getMeetDates(
    Number(data.get("termNum")),
    data.getAll("weekday").map((val) => Number(val)),
    data.get("dateformat") as string
  );
  console.log(meetings);
  return new Blob(meetings, {
    type: "octet/stream",
  });
}
