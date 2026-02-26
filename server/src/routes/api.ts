import { Router } from "express";
import { getImageAndCaption } from "../controllers/apiController.js";

const router = Router();
router.get("/image-caption", getImageAndCaption);
export default router;