import { Request, Response, NextFunction } from "express";

type TAsyncHandler = (
    req: Request,
    res: Response,
    next: NextFunction,
) => Promise<void>;

const asyncHandler = (fn: TAsyncHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

export { asyncHandler, type TAsyncHandler };
