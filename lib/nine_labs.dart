import 'dart:async';
import 'dart:ui';

import 'package:flame/components.dart';
import 'package:flame/game.dart';
import 'package:ninelabs/levels/level.dart';

class NineLabs extends FlameGame {
  @override
  Color backgroundColor() => const Color(0xFF211F30);

  @override
  final world = Level(levelName: 'level-01');

  late final CameraComponent cam;

  @override
  FutureOr<void> onLoad() async {
    await images.loadAllImages(); // images on cache

    cam = CameraComponent.withFixedResolution(world: world, width: 640, height: 360);
    cam.viewfinder.anchor = Anchor.topLeft;

    addAll([cam, world]);
    return super.onLoad();
  }
}
