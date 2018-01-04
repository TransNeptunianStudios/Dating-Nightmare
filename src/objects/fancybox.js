/*
 * `FancyBox` group
 * =============
 *
 * A box of varied size made up of three images
 */

export default class FancyBox {
  constructor (scene, key, x, y, width, height) {
    this.scene = scene
    this.x = x
    this.y = y
    this.width = width
    this.height = height

    this.boxGroup = scene.add.group()

    var centerKey = key + '-center'
    var cornerKey = key + '-corner'
    var sideKey = key + '-side'

    this.center = this.boxGroup.create(x, y, centerKey)
    this.center.scaleX = width / this.center.width
    this.center.scaleY = height / this.center.height
    this.center.setOrigin(0, 0)

  // All remaining 8 parts of the box, upperleft and clockwice

    this.upperLeft = this.boxGroup.create(x, y, cornerKey)
    this.upperLeft.setOrigin(1, 1)

    this.upper = this.boxGroup.create(x, y, sideKey)
    this.upper.scaleX = width / this.upper.width
    this.upper.setOrigin(0, 1)

    this.upperRight = this.boxGroup.create(x + width, y, cornerKey)
    this.upperRight.angle = 90
    this.upperRight.setOrigin(1, 1)

    this.right = this.boxGroup.create(x + width, y + height, sideKey)
    this.right.scaleX = height / this.right.height
    this.right.setOrigin(1, 1)
    this.right.angle = 90

    this.lowerRight = this.boxGroup.create(x + width, y + height, cornerKey)
    this.lowerRight.angle = 180
    this.lowerRight.setOrigin(1, 1)

    this.lower = this.boxGroup.create(x, y + height, sideKey)
    this.lower.scaleX = width / this.lower.width
    this.lower.scaleY = -1
    this.lower.setOrigin(0, 1)

    this.lowerLeft = this.boxGroup.create(x, y + height, cornerKey)
    this.lowerLeft.angle = -90
    this.lowerLeft.setOrigin(1, 1)

    this.left = this.boxGroup.create(x, y + height, sideKey)
    this.left.scaleX = height / this.left.height
    this.left.setOrigin(0, 1)
    this.left.angle = -90
  }

  setText (text) {
    console.warn('Text not implemented yet')

  // Word wrap doesnt work yet? or ?

    var boxText = this.scene.make.text({
      x: this.x,
      y: this.y,
      text: text,
      style: {
        font: 'bold 25px Arial',
        fill: 'white',
        padding: 10,
        wordWrap: { width: this.width, useAdvancedWrap: true }
      }
    })

    this.boxGroup.add(boxText)
  }
}
