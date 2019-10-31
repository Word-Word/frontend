import vectorFonts from "../helpers/vector-fonts"
import { Asset } from "expo-asset"

const loadAll = async () => {
  // app내에서 계속해서 사용할 이미지들을 미리 cache형태로 받음

  //const images = [require("../../assets/ice-dart.jpg")]
  const cacheImages = images.map((image) => {
    return Asset.fromModule(image).downloadAsync()
  })
  //const fonts = [...vectorFonts, { georgia: require("../../assets/fonts/Georgia.ttf") }]
  const cacheFonts = fonts.map((fonts) => {
    return Asset.fromModule(fonts).downloadAsync()
  })

  const assets = {
    ...cacheImages,
    ...cacheFonts,
  }

  await Promise.all(assets)
}

export default loadAll
//느낌상 여기서 user setting해줘야 할듯
