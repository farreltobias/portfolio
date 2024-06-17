export async function bufferToBase64(buffer: ArrayBuffer | Uint8Array) {
  const base64url = await new Promise<string>((resolve) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.readAsDataURL(new Blob([buffer]))
  })

  // remove the `data:...;base64,` part from the start
  return base64url.slice(base64url.indexOf(',') + 1)
}
