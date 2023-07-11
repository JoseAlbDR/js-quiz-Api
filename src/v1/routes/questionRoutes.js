const express = require("express");
const questionController = require("../../controllers/questionController");

const router = express.Router();

router.get("/", questionController.getAllQuestions);

router.get("/:questionId", questionController.getOneQuestion);

router.post("/", questionController.createNewQuestion);

router.patch("/:questionId", questionController.updateOneQuestion);

router.delete("/:questionId", questionController.deleteOneQuestion);

/**
 * @openapi
 * /api/v1/questions:
 *   get:
 *     tags:
 *       - Questions
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a question
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Question"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

router.get("/", questionController.getAllQuestions);

module.exports = router;
