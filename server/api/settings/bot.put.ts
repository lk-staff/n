export default defineEventHandler(async (event) => {
  const { token } = await readBody<{ token: string }>(event)
  if (token) {
    await useStorage().setItem('db:token', { token })
    return 'Токен сохранен'
  } else {
    return 'Ошибка, токен отсутствует!'
  }
})
