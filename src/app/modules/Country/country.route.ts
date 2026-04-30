import { Router } from "express";
import { CountryController } from "./country.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { CountryValidationRules } from "./country.validation";
import { multerUpload } from "../../config/multer.config";

const route =Router();

route.post("/", multerUpload.single("image"), validateRequest(CountryValidationRules.createCountryValidationRules),CountryController.createCountry);
route.get("/", CountryController.getAllCountries);
route.get("/:id", CountryController.getSingleCountry);
route.patch("/:id",validateRequest(CountryValidationRules.updateCountryValidationRules),CountryController.updateCountry);
route.delete("/:id", CountryController.deleteCountry);

export const CountryRoutes = route;