"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// const JWT_SECRET = process.env.JWT_SECRE;
const JWT_SECRET = "ujv4kqxqxFHuwAshlIrGGCzNv2Eud5oUUtCoQuTqXp0=";
if (!JWT_SECRET) {
    throw new Error("Missing JWT_SECRET environment variable");
}
class JWTService {
    static generateTokenForUser(user) {
        const payload = {
            id: user === null || user === void 0 ? void 0 : user.id,
            email: user === null || user === void 0 ? void 0 : user.email,
        };
        const token = jsonwebtoken_1.default.sign(payload, JWT_SECRET);
        return token;
    }
}
exports.default = JWTService;
