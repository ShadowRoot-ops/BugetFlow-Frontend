import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // here it is the demonstration for rate limiting
    const { success } = await ratelimit.limit("my-rate-limit");
    if (!success) {
      return res.status(492).json({
        message: "Too many requests, please try again later",
      });
    }
    next();
  } catch (error) {
    console.log("Rate limter error", error);
    next(error);
  }
};
export default rateLimiter;
