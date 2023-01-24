import { sendMessage } from '../utils/bot'
import type { IUpdate } from '~~/types'

export default defineEventHandler(async (event) => {
  const body = await readBody<IUpdate>(event)

  if (body.message.text !== '/start') {
    await sendMessage(body.message.from.id, body.message.text)
  } else {
    await sendMessage(body.message.from.id, 'Привет, тут начинаеться наша история!')
  }

  return 'ok'
})
