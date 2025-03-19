import {
  extractSheetId,
  fetchGoogleSheetData,
} from "../utils/googleSheetsHelper.js";
import Task from "../models/taskModel.js";

export const importTasksFromSheet = async (req, res) => {
  try {
    const { sheetUrl } = req.body;
    const userId = req.user.id;

    // ✅ Validate Google Sheet URL
    const sheetId = extractSheetId(sheetUrl);
    if (!sheetId)
      return res.status(400).json({ message: "Invalid Google Sheet URL" });

    // ✅ Fetch & Convert Data
    const tasksData = await fetchGoogleSheetData(sheetId);

    console.log("📌 Tasks Data Fetched:", tasksData); // Debugging

    if (!tasksData.length) {
      console.log("❌ No Data Found in Sheet");
      return res.status(400).json({ message: "No data found in the sheet" });
    }

    // ✅ Format & Save Tasks
    const tasksToInsert = tasksData.map((row) => ({
      user: userId,
      title: row.Title || "Untitled Task", // Column names should match Google Sheet headers
      description: row.Description || "",
      dueDate: row.DueDate ? new Date(row.DueDate) : null,
      completed: row.Completed === "true",
    }));

    console.log("📌 Tasks to Insert:", tasksToInsert); // Debugging

    await Task.insertMany(tasksToInsert);

    res
      .status(201)
      .json({
        message: `${tasksToInsert.length} tasks imported successfully!`,
      });
  } catch (error) {
    console.error("❌ Error in Import:", error.message);
    res.status(500).json({ error: error.message });
  }
};
