import axios from "axios";
import csvParser from "csv-parser";
import { Readable } from "stream";

// ✅ Extract Sheet ID from URL
export const extractSheetId = (sheetUrl) => {
  const match = sheetUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : null;
};

// ✅ Fetch & Convert CSV to JSON (Fixed Column Name Spaces)
export const fetchGoogleSheetData = async (sheetId) => {
  try {
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;
    console.log(`🔗 Fetching Google Sheet from: ${csvUrl}`);

    const response = await axios.get(csvUrl, { responseType: "arraybuffer" });

    return new Promise((resolve, reject) => {
      const results = [];
      const stream = Readable.from(response.data.toString());

      stream
        .pipe(csvParser())
        .on("data", (row) => {
          // ✅ Fix: Trim column names
          const trimmedRow = Object.fromEntries(
            Object.entries(row).map(([key, value]) => [key.trim(), value])
          );

          console.log("📌 Parsed Row (Fixed):", trimmedRow);
          results.push(trimmedRow);
        })
        .on("end", () => {
          console.log("✅ Total Rows Parsed:", results.length);
          resolve(results);
        })
        .on("error", (error) => {
          console.error("❌ CSV Parsing Error:", error.message);
          reject(error);
        });
    });
  } catch (error) {
    console.error("❌ Fetch Error:", error.message);
    throw new Error("Failed to fetch Google Sheet data. Ensure it is public.");
  }
};
