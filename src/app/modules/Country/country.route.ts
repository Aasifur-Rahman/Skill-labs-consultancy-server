import { Router } from "express";
import { CountryController } from "./country.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { CountryValidationRules } from "./country.validation";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../User/user.interface";

const route =Router();

route.post("/",checkAuth(Role.ADMIN), multerUpload.single("image"), validateRequest(CountryValidationRules.createCountryValidationRules),CountryController.createCountry);
route.get("/", CountryController.getAllCountries);
route.get("/:id", CountryController.getSingleCountry);
route.patch("/:id",checkAuth(Role.ADMIN), validateRequest(CountryValidationRules.updateCountryValidationRules),CountryController.updateCountry);
route.delete("/:id", checkAuth(Role.ADMIN), CountryController.deleteCountry);

export const CountryRoutes = route;