"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", routes_1.default);
// Load Error 404 in case of page not found
app.use((req, res) => {
    res.status(404);
    res.json({
        error: {
            message: "Page not Found",
        },
    });
});
// Load Error 500 in case of server error
app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});
exports.default = app;
