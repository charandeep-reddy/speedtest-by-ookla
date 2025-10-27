import { Detail } from "@raycast/api";
import { execSync } from "child_process";

export default function Command() {
  let output: string;

  try {
    output = execSync("/opt/homebrew/bin/speedtest --accept-license --accept-gdpr", { encoding: "utf-8" });
  } catch (error: any) {
    output = `Error: Failed to run speedtest`;
  }

  return <Detail markdown={`# Speedtest by Ookla\n\n${output}`} />;
}
