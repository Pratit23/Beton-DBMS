import React, { useEffect } from 'react'
import exif from 'exif-js'
import testImg from './images/testImg3.jpg'

function App() {

  const func = () => {
    var img1 = document.getElementById("img1")
    exif.getData(img1, function () {
      var allMetaData = exif.getAllTags(this)
      allMetaData.innerHTML = JSON.stringify(allMetaData, null, "\t")
      var d = allMetaData.GPSLatitude[0].numerator
      console.log("D: ", d)
      var m = allMetaData.GPSLatitude[1].numerator
      console.log("M: ", m)
      var s = allMetaData.GPSLatitude[2].numerator / allMetaData.GPSLatitude[2].denominator
      console.log("S: ", s)
      var res = d + (m / 60) + (s / 3600)
      var d1 = allMetaData.GPSLongitude[0].numerator
      console.log("D1: ", d1)
      var m1 = allMetaData.GPSLongitude[1].numerator
      console.log("M1:", m1)
      var s1 = allMetaData.GPSLongitude[2].numerator / allMetaData.GPSLongitude[2].denominator
      console.log("S: ", s1)
      var res1 = d1 + (m1 / 60) + (s1 / 3600)
      console.log(allMetaData)
      console.log(res)
      console.log(res1)
    })
  }

  useEffect(() => {
    func()
  },)

  return (
    <div className="App">
      <img style={{ height: '500px' }} src={testImg} id='img1' alt="Image not loading" />
    </div>
  );
}

export default App;
