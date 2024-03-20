import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/game.dart';
import 'package:flutter/material.dart';
import 'package:ninelabs/components/player.dart';
import 'package:ninelabs/components/level.dart';

class NineLabs extends FlameGame with HasKeyboardHandlerComponents, DragCallbacks {
  @override
  Color backgroundColor() => const Color(0xFF211F30);

  late final CameraComponent cam;
  late JoystickComponent joystick;
  bool showControls = false;
  Player player = Player(character: 'MaskDude');

  @override
  FutureOr<void> onLoad() async {
    await images.loadAllImages(); // images on cache

    final world = Level(levelName: 'level-01', player: player);

    cam = CameraComponent.withFixedResolution(world: world, width: 640, height: 360);
    cam.viewfinder.anchor = Anchor.topLeft;

    addAll([cam, world]);

    if (showControls) addJoystick();

    return super.onLoad();
  }

  @override
  void update(double dt) {
    if (showControls) updateJoystick();
    super.update(dt);
  }

  void addJoystick() {
    joystick = JoystickComponent(
      priority: 10,
      knob: CircleComponent(
        radius: 16,
        paint: Paint()..color = Colors.grey,
      ),
      background: CircleComponent(
        radius: 32,
        paint: Paint()..color = Colors.black,
      ),
      margin: const EdgeInsets.only(left: 32, bottom: 32),
    );

    add(joystick);
  }

  void updateJoystick() {
    switch (joystick.direction) {
      case JoystickDirection.left:
      case JoystickDirection.upLeft:
      case JoystickDirection.downLeft:
        player.horizontalMovement = -1;
        break;
      case JoystickDirection.right:
      case JoystickDirection.upRight:
      case JoystickDirection.downRight:
        player.horizontalMovement = 1;
        break;
      default:
        player.horizontalMovement = 0;
        break;
    }
  }
}
