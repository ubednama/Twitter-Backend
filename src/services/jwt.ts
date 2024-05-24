import JWT, { Secret } from "jsonwebtoken";
import { User } from "@prisma/client";
import { JWTUser } from "../interfaces";

// const JWT_SECRET: string | undefined = process.env.JWT_SECRET;
const JWT_SECRET = "ujv4kqxqxFHuwAshlIrGGCzNv2Eud5oUUtCoQuTqXp0=";

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET environment variable");
}

class JWTService {
    public static generateTokenForUser(user: User) {

        const payload: JWTUser = {
            id: user?.id,
            email: user?.email,
        };
        // console.log("from jwt.ts ", JWT_SECRET)
        return JWT.sign(payload, JWT_SECRET);
    }

    public static decodeToken(token: string) {
        try {
          return JWT.verify(token, JWT_SECRET) as JWTUser;
        } catch (error) {
          // throw new Error("Invalid or expired token");
          return null;
        }
    }
}

export default JWTService;