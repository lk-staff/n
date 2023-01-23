export default defineEventHandler(async () => {
  const data = {
    url: '',
    drop_pending_updates: true,
    secret_token: '5337348199:AAGn2LhxKFSBJQC2TH97E0iDDClYHZy8G48'
  }
  const url = 'https://api.telegram.org/bot5337348199:AAGn2LhxKFSBJQC2TH97E0iDDClYHZy8G48/setWebhook'
  const res = await $fetch(url, { body: data })

  console.log('res: ', res)

  return res
})
