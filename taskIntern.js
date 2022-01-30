'use strict';

function roomCalc(a, b, c, h, l) {

    if (1 <= a && a <= 20 && 1 <= b && b <= 20 && 2 <= c && c <= 5 && 300 <= h && h <= 1000 && 4000 <= l && l <= 20000) {
      const oneSide = a * c,
            twoSide = b * c,
            ceiling = a * b;

      const wallpapersWidth = h / 1000,
            wallpapersHeight = l / 1000;

      const totalAreaOfTheRoom = (((oneSide + twoSide) * 2) + ceiling) * 0.85;

      const totalAreaOfWallpapers = (wallpapersWidth * wallpapersHeight) * 0.9;

      const howManyWallpepersNeed = totalAreaOfTheRoom / totalAreaOfWallpapers;

      console.log(Math.ceil(howManyWallpepersNeed));

    } else {
      console.log("Not quite correct parameters");
    }

}

roomCalc(3, 5, 3, 400, 5000);









