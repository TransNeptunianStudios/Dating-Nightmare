/*
 * `FancyBox` group
 * =============
 *
 * A box of varied size made up of three images
 */


export default class FancyBox {
    constructor(state, x, y, width, height) {

	if(width < 60 || height < 60)
	    console.warn("Box dimensions to small!")

	this.boxGroup = state.add.group()

	this.center  = this.boxGroup.create(x, y, 'box-center')
	this.center.scaleX = width / this.center.width
	this.center.scaleY = height / this.center.height
	this.center.setOrigin(0, 0);

	this.upperLeft = this.boxGroup.create(x, y, 'box-corner')
	this.upperLeft.setOrigin(1, 1);

	this.upper  = this.boxGroup.create(x, y, 'box-side')
	this.upper.scaleX = width / this.upper.width
	this.upper.setOrigin(0, 1);

	this.upperRight = this.boxGroup.create(x+width, y, 'box-corner')
	this.upperRight.angle = 90
	this.upperRight.setOrigin(1, 1);

	this.right  = this.boxGroup.create(x + width, y + height, 'box-side')
	this.right.scaleX = height / this.right.height
	this.right.setOrigin(1, 1);
	this.right.angle = 90

	this.lowerRight = this.boxGroup.create(x+width, y+height, 'box-corner')
	this.lowerRight.angle = 180
	this.lowerRight.setOrigin(1, 1);

	this.lower  = this.boxGroup.create(x, y+height, 'box-side')
	this.lower.scaleX = width / this.lower.width
	this.lower.scaleY = -1
	this.lower.setOrigin(0, 1);

	this.lowerLeft = this.boxGroup.create(x, y+height, 'box-corner')
	this.lowerLeft.angle = -90
	this.lowerLeft.setOrigin(1, 1);

	this.left  = this.boxGroup.create(x, y + height, 'box-side')
	this.left.scaleX = height / this.left.height
	this.left.setOrigin(0, 1);
	this.left.angle = -90

	// this.left  = this.boxGroup.create(x, y + 20, 'box-side')
	// this.left.scaleX = (height - 40) / this.left.height
	// this.left.setOrigin(0);
	// this.left.angle = -90
	// this.alive = true;
	// this.moveTime = 0;
	// this.moveDelay = 100;
	// this.tailPosition = new Phaser.Geom.Point(x, y);

	// this.heading = new Phaser.Geom.Point(1, 0);
	// this.updated = true;
    }

    // update(time) {
    //   if (time >= this.moveTime) {
    //     this.updated = true;
    //     return this.move(time);
    //   }
    // }

    // turnLeft() {
    //   //  Makes the snake rotate counter clockwise on the next update.
    //   if (this.updated) {
    //     Phaser.Geom.Point.RPerp(this.heading);

    //     this.updated = false;
    //   }
    // }

    // turnRight() {
    //   //  Makes the snake rotate clockwise on the next update.
    //   if (this.updated) {
    //     Phaser.Geom.Point.Perp(this.heading);

    //     this.updated = false;
    //   }
    // }

    // move(time) {
    //   //  Based on the heading property we update `headPosition` value
    //   //  accordingly.
    //   //
    //   //  The `Math.Wrap` call allow the snake to wrap around the screen, so when
    //   //  it goes off any of the sides it re-appears on the other.
    //   if (this.heading.x < 0) {
    //     //  Snake is heading left.
    //     this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, WIDTH);
    //   }
    //   if (this.heading.x > 0) {
    //     //  Snake is heading right.
    //     this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, WIDTH);
    //   }
    //   if (this.heading.y < 0) {
    //     //  Snake is heading up.
    //     this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, HEIGHT);
    //   }
    //   if (this.heading.y > 0) {
    //     //  Snake is heading down.
    //     this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, HEIGHT);
    //   }

    //   //  Update the body segments and place the last coordinate into
    //   //  `this.tailPosition`.
    //   Phaser.Actions.ShiftPosition(
    //     this.body.children.entries,
    //     this.headPosition.x * 16,
    //     this.headPosition.y * 16,
    //     1,
    //     this.tailPosition
    //   );

    //   //  Check to see if any of the body pieces have the same x/y as the head.
    //   //  If they do, the head ran into the body.
    //   const hitBody = Phaser.Actions.GetFirst(
    //     this.body.children.entries,
    //     {x: this.head.x, y: this.head.y},
    //     1
    //   );

    //   if (hitBody) {
    //     //  Game Over!
    //     this.alive = false;
    //     return false;
    //   }

    //   //  Update the timer ready for the next movement.
    //   this.moveTime = time + this.moveDelay;
    //   return true;
    // }

    // grow() {
    //   this.body.create(
    //     this.tailPosition.x,
    //     this.tailPosition.y,
    //     'body'
    //   ).setOrigin(0);
    // }

    // collideWithFood(food) {
    //   if (this.head.x === food.x && this.head.y === food.y) {
    //     this.grow();

    //     //  For every 5 items of food eaten we'll increase the snake speed a
    //     //  little.
    //     if (this.moveDelay > 20 && food.total % 5 === 0) {
    //       this.moveDelay -= 5;
    //     }
    //     return true;
    //   }
    //   return false;
    // }

    // updateGrid(grid) {
    //   //  Remove all body pieces from valid positions list.
    //   this.body.children.each(segment => {
    //     const bx = segment.x / 16;
    //     const by = segment.y / 16;

    //     grid[by][bx] = false;
    //   });
    //   return grid;
    // }
}
