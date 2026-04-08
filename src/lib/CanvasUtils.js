import pica from 'pica'

const picaResizer = pica()

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous')
    image.src = url
  })

const createBlobUrl = (canvas) =>
  new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      if (!file) reject(new Error('Failed to create blob from canvas'))
      else resolve(URL.createObjectURL(file))
    }, 'image/png')
  })

const setHighQualitySmoothing = (ctx) => {
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
}

const resizeCanvas = (source, width, height) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  setHighQualitySmoothing(ctx)
  ctx.drawImage(source, 0, 0, source.width, source.height, 0, 0, width, height)
  return canvas
}

const progressiveResize = (image, width, height) => {
  if (image.width <= width && image.height <= height) {
    return resizeCanvas(image, width, height)
  }

  let currentCanvas = document.createElement('canvas')
  currentCanvas.width = image.width
  currentCanvas.height = image.height
  let currentCtx = currentCanvas.getContext('2d')
  setHighQualitySmoothing(currentCtx)
  currentCtx.drawImage(image, 0, 0)

  while (currentCanvas.width * 0.5 > width || currentCanvas.height * 0.5 > height) {
    const nextWidth = Math.max(width, Math.round(currentCanvas.width * 0.5))
    const nextHeight = Math.max(height, Math.round(currentCanvas.height * 0.5))
    const nextCanvas = document.createElement('canvas')
    nextCanvas.width = nextWidth
    nextCanvas.height = nextHeight
    const nextCtx = nextCanvas.getContext('2d')
    setHighQualitySmoothing(nextCtx)
    nextCtx.drawImage(currentCanvas, 0, 0, currentCanvas.width, currentCanvas.height, 0, 0, nextWidth, nextHeight)
    currentCanvas = nextCanvas
  }

  return resizeCanvas(currentCanvas, width, height)
}

export async function getMirroredImg(imageSrc) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false

  canvas.width = image.width
  canvas.height = image.height

  ctx.scale(-1, 1)
  ctx.drawImage(image, 0, 0, image.width * -1, image.height)

  return createBlobUrl(canvas)
}

export async function getCroppedImg(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  setHighQualitySmoothing(ctx)

  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height)

  if (canvas.width != 448 || canvas.height != 650)
    return getResizedImg(canvas.toDataURL(), 448, 650)

  return createBlobUrl(canvas)
}

export async function getResizedImg(imageSrc, width, height) {
  const image = await createImage(imageSrc)

  const sourceCanvas = document.createElement('canvas')
  sourceCanvas.width = image.width
  sourceCanvas.height = image.height
  const sourceCtx = sourceCanvas.getContext('2d')
  sourceCtx.drawImage(image, 0, 0)

  const targetCanvas = document.createElement('canvas')
  targetCanvas.width = width
  targetCanvas.height = height

  await picaResizer.resize(sourceCanvas, targetCanvas, {
    quality: 3,
    alpha: true,
    unsharpAmount: 60,
    unsharpRadius: 0.6,
    unsharpThreshold: 0,
  })
  return createBlobUrl(targetCanvas)
}