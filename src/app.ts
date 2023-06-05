import express, { Application, Request, Response } from "express";
import APIRouter from "./routes";

const app: Application = express();

app.use(express.json());

app.use("/api/v1", APIRouter);

// Load Error 404 in case of page not found
app.use((req: Request, res: Response) => {
  res.status(404);
  res.json({
    error: {
      message: "Page not Found",
    },
  });
});

// Load Error 500 in case of server error
app.use((error: any, req: Request, res: Response) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app;
