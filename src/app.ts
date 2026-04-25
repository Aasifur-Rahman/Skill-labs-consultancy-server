import express, { Request, Response } from "express"
import cors from 'cors'
const app = express()
import cookieParser from 'cookie-parser';
import { router } from "./app/routes";
import { notFound } from "./app/utils/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Skill labs Server"
    })
})


app.use('/api/', router);

app.use(notFound);
app.use(globalErrorHandler);

export default app;