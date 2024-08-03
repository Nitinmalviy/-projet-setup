import { User } from '../model/user.model.js'; // Assume you have a User model
import { generateAccessToken, verifyAccessToken, verifyRefreshToken } from '../utils/tokens.js';

// Middleware to protect routes
export const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    try {
        const decoded = verifyAccessToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        // Access token is invalid, check refresh token
        const refreshToken = req.headers['x-refresh-token'];

        if (!refreshToken) {
            return res.sendStatus(403); // Forbidden
        }

        try {
            const decodedRefresh = verifyRefreshToken(refreshToken);
            const { email } = decodedRefresh;

            // Check if the refresh token exists in the database
            const user = await User.findOne({ email, refreshToken });

            if (!user) {
                return res.sendStatus(403); // Forbidden
            }

            // Generate a new access token
            const newAccessToken = generateAccessToken(email);

            // Optionally: Update refresh token in the database if you want to invalidate old tokens
            user.refreshToken = generateRefreshToken(email);
            await user.save();

            // Send new tokens in the response headers
            res.setHeader('x-access-token', newAccessToken);
            res.setHeader('x-refresh-token', user.refreshToken);

            // Attach the new access token to the request for the next middleware
            req.user = verifyAccessToken(newAccessToken);
            next();
        } catch (refreshError) {
            return res.sendStatus(403); // Forbidden
        }
    }
}
