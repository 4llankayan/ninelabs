import 'dart:async';

import 'package:flame/components.dart';
import 'package:ninelabs/nine_labs.dart';

class BackgroundTile extends SpriteComponent with HasGameRef<NineLabs> {
  final String color;

  BackgroundTile({
    this.color = 'Gray',
    position,
  }) : super(
          position: position,
        );

  final double scrollSpeed = 0.4;

  @override
  FutureOr<void> onLoad() {
    priority = -1;
    size = Vector2.all(64.6);
    sprite = Sprite(game.images.fromCache('Background/$color.png'));

    return super.onLoad();
  }

  @override
  void update(double dt) {
    position.y += scrollSpeed;
    double tileSize = 64;
    int scrollHeight = (game.size.y / tileSize).round();

    if (position.y > scrollHeight * tileSize) {
      position.y = -tileSize;
    }

    super.update(dt);
  }
}