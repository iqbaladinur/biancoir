const getImgData = (img) => {
  const imageEl = document.createElement('img')
  const canvas = document.createElement('canvas')
  const readPictureAsBase64 = (pictureSrc) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onerror = (error) => {
        reject(error)
      }
      fileReader.onloadend = (res) => {
        resolve(res)
      }
      fileReader.readAsDataURL(pictureSrc)
    })
  return new Promise((resolve, reject) => {
    readPictureAsBase64(img)
      .then((res) => {
        imageEl.src = res.target.result
        imageEl.onload = () => {
          let scale = 1
          if (imageEl.width >= 3000 || imageEl.height >= 3000) {
            scale = 0.05
          } else if (imageEl.width > 500 || imageEl.height > 500) {
            scale = 0.1
          }
          canvas.width = imageEl.width * scale
          canvas.height = imageEl.height * scale
          canvas
            .getContext('2d')
            .drawImage(imageEl, 0, 0, canvas.width, canvas.height)
          const imgData = canvas
            .getContext('2d')
            .getImageData(0, 0, canvas.width, canvas.height)
          resolve(imgData)
        }
        imageEl.onerror = (e) => {
          reject(e)
        }
      })
      .catch((e) => {
        reject(e)
      })
  })
}
export { getImgData }
