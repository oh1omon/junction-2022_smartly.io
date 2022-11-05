import express from "express"
import cors from "cors"
import reviews from "./routes/reviews.js"
import places from "./routes/places.js"
import video from "./routes/video.js"

const app = express()

app.use(cors())

// For reading JSON (instead of body-parser)
app.use(express.json())

// Applying routes here
app.use("/api/reviews", reviews)
app.use("/api/places", places)
app.use("/api/video", video)

export default app