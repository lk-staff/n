export default defineEventHandler(async () => {
  const token = await useStorage().getItem('db:token')
  return token
})
