const asyncHandler = (reqHandler) => async (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err)); //using promise
}

export {asyncHandler};

// () => {}
// () => {() => {}}
// () => () => {}
/*
const asyncHandler = (reqHandler) => async (req, res, next) => {           //using try-catch
    try {
        await reqHandler(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}
*/