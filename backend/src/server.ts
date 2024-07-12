import fastifyCors from "@fastify/cors"
import fastify from 'fastify'
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod"

import { confirmParticipant } from "./routes/confirm-participant"
import { confirmTrip } from "./routes/confirm-trip"
import { createActivity } from "./routes/create-activity"
import { createLink } from "./routes/create-link"
import { createTrip } from "./routes/create-trip"
import { getActivities } from "./routes/get-activities"
import { getLinks } from "./routes/get-links"
import { createInvite } from "./routes/create-invite"
import { updateTrip } from "./routes/update-trip"
import { getTripDetails } from "./routes/get-trip-details"
import { getPaticipants } from "./routes/get-participants"
import { getPaticipant } from "./routes/get-participant"
import { errorHandler } from "./error-handler"
import { env } from "./env"

const app = fastify()

app.register(fastifyCors, {
  origin: '*'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.register(getTripDetails)
app.register(createTrip)
app.register(updateTrip)
app.register(confirmTrip)

app.register(createActivity)
app.register(getActivities)

app.register(createLink)
app.register(getLinks)

app.register(getPaticipants)
app.register(getPaticipant)
app.register(confirmParticipant)

app.register(createInvite)



app.listen({port: env.PORT }).then(() => {
  console.log(`Server running on port ${env.PORT}!`)
})