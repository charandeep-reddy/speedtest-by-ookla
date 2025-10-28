import { List } from "@raycast/api";
import { execSync } from "child_process";

export default function Command() {
  let output: string;
  let ping: number;
  let download: number;
  let upload: number;

  try {
    output = execSync("/opt/homebrew/bin/speedtest --accept-license --accept-gdpr", { encoding: "utf-8" });
    ping = parseFloat(output.match(/Ping:\s+(\d+\.\d+)\s+ms/)?.[1] ?? "0");
    download = parseFloat(output.match(/Download:\s+(\d+\.\d+)\s+Mbps/)?.[1] ?? "0");
    upload = parseFloat(output.match(/Upload:\s+(\d+\.\d+)\s+Mbps/)?.[1] ?? "0");
  } catch (error: any) {
    output = `Error: Failed to run speedtest`;
    ping = NaN;
    download = NaN;
    upload = NaN;
  }

  return (
    <List>
      <List.Item title="Ping" subtitle={`${ping} ms`} />
      <List.Item title="Download" subtitle={`${download} Mbps`} />
      <List.Item title="Upload" subtitle={`${upload} Mbps`} />
    </List>
  );
}
