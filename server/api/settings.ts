import { setWebhook } from '../utils/bot'

export default defineEventHandler(async () => {
  const res = await setWebhook('https://66bc-93-80-191-42.ngrok.io/api/bot')

  return res
})
