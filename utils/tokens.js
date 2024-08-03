import jwt from 'jsonwebtoken';
// Function to generate an access token with an expiration time
export const generateAccessToken = (email) => {
    const accessToken = jwt.sign({ email }, `${process.env.JWT_ACCESS_SECRET}`, { expiresIn: '15m' }); // Access token valid for 15 minutes
    return accessToken;
}

// Function to generate a refresh token with an expiration time
export const generateRefreshToken = (email) => {
    const refreshToken = jwt.sign({ email }, `${process.env.JWT_REFRESH_SECRET}`, { expiresIn: '7d' }); // Refresh token valid for 7 days
    return refreshToken;
}

// Function to verify the access token
export const verifyAccessToken = (token) => {
    try {
        
        const decoded = jwt.verify(token, JWT_ACCESS_SECRET);
        return decoded;
    } catch (error) {
        throw new Error('Invalid access token');
    }
}

// Function to verify the refresh token
export const verifyRefreshToken = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_REFRESH_SECRET);
        return decoded;
    } catch (error) {
        throw new Error('Invalid refresh token');
    }
}