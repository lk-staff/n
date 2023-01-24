export const sendMessage = async (chatId: number, text: string) => {
  const token = '5337348199:AAGn2LhxKFSBJQC2TH97E0iDDClYHZy8G48'
  const baseUrl = `https://api.telegram.org/bot${token}/sendMessage`

  const body = {
    chat_id: chatId,
    text
  }

  await $fetch(baseUrl, { method: 'POST', body })
}
