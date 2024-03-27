import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:ninelabs/nine_labs.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Flame.device.fullScreen();
  if (!kIsWeb) await Flame.device.setLandscape();

  NineLabs game = NineLabs();

  runApp(
    GameWidget(
      game: kDebugMode ? NineLabs() : game,
    ),
  );
}
