"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateId = void 0;
function validateId(req, res) {
    const { id } = req.body;
    if (id) {
        const numberValue = Number(id);
        if (!(!isNaN(numberValue) && typeof numberValue === "number")) {
            return res.status(400).send({
                status: "Error",
                message: "Invalid id supplied",
            });
        }
    }
}
exports.validateId = validateId;
