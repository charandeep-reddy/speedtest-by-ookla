# Speedtest by Ookla

A Raycast extension that measures internet speed using Ookla's Speedtest CLI.

## Description

This extension provides a quick and convenient way to test your internet connection speed directly from Raycast. It leverages Ookla's official Speedtest CLI tool to perform accurate speed measurements and displays the results in a clean, easy-to-read format.

## Features

- Quick internet speed testing
- Download and upload speed measurements
- Clean Raycast interface with organized results
- Automatic license and GDPR acceptance
- Tested On macOS

## Requirements

- Ookla Speedtest CLI installed via Homebrew (`brew install speedtest-cli`)
- Internet connection
- macOS

## Installation

1. Install Ookla Speedtest CLI using Homebrew:
   ```bash
   brew install speedtest-cli
   ```
2. Install this Raycast extension
3. Run the speedtest command from Raycast

## Usage

1. Open Raycast
2. Type "speedtest" or "ookla"
3. Select the "Speedtest by Ookla" command
4. Wait for the test to complete (usually takes 10-30 seconds)
5. View your download and upload speeds in Mbps

## Technical Details

- Uses Ookla's official Speedtest CLI with automatic license acceptance
- Parses CLI output to extract download and upload speeds
- Displays results in a clean list format within Raycast
- Handles errors gracefully if Speedtest CLI is not available

## Troubleshooting

If you encounter issues:
- Ensure Speedtest CLI is installed: `brew install speedtest-cli`
- Check that the CLI is accessible at `/opt/homebrew/bin/speedtest`
- Verify your internet connection is working