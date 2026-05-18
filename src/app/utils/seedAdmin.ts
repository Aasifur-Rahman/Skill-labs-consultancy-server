import { envVars } from "../config/env"
import { IUser, Role } from "../modules/User/user.interface";
import { User } from "../modules/User/user.model"
import bcrypt from "bcrypt";

const seedAdmin = async () => {
    try{
        const isAdminExist = await User.findOne({ email: envVars.ADMIN_EMAIL });
       if(isAdminExist) {
        console.log("Admin user already exists. Skipping seeding.");
        return;
       }
       const hashedPassword = await bcrypt.hash(envVars.ADMIN_PASSWORD, 10);
         const payload: IUser = {
            name: "Super admin",
            role: Role.ADMIN,
            email: envVars.ADMIN_EMAIL,
            password: hashedPassword,

        }
        await User.create(payload);
        console.log("Admin user created successfully.");

    }catch(error) {
        console.log(error)
    }
}

export default seedAdmin;