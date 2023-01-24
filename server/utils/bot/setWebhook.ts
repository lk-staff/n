export const setWebhook = async (url: string) => {
  const token = '5337348199:AAGn2LhxKFSBJQC2TH97E0iDDClYHZy8G48'
  const baseUrl = `https://api.telegram.org/bot${token}/setWebhook?url=${url}`
  const res = await $fetch(baseUrl)

  return res
}
