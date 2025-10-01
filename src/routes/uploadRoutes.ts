import { Router } from "express";
import { uploadAvatar } from "../controllers/uploadController";
import { imageUpload } from "../middleware/imageUpload";
import { isAuth } from "../middleware/isAuth"; // 你的認證中間件

const router = Router();

// POST /api/v1/upload/avatar
router.post(
  "/avatar",
  isAuth, // 1. 驗證 JWT token
  imageUpload.single("file"), // 2. 處理單一檔案上傳，欄位名稱為 "file"
  uploadAvatar, // 3. 執行上傳邏輯
);

export default router;
