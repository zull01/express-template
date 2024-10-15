import { asyncHandler } from "../utils/asyncHandlerr";

const sampleController = asyncHandler(async (req, res) => {
    res.json({ message: "ok" });
});

export { sampleController };
