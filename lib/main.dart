import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:ninelabs/nine_labs.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();
  Flame.device.setLandscape();

  NineLabs game = NineLabs();

  runApp(
    GameWidget(
      game: kDebugMode ? NineLabs() : game,
    ),
  );
}
