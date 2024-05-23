import JWT from "jsonwebtoken";
import { prismaClient } from "../clients/db";
import { User } from "@prisma/client";

// const JWT_SECRET = process.env.JWT_SECRE;
const JWT_SECRET = "ujv4kqxqxFHuwAshlIrGGCzNv2Eud5oUUtCoQuTqXp0=";

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET environment variable");
}

class JWTService {
    public static generateTokenForUser(user: User) {

        const payload = {
            id: user?.id,
            email: user?.email,
        };
        const token = JWT.sign(payload, JWT_SECRET);
        return token
    }
}

export default JWTService;