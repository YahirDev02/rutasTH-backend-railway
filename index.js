"use strict";

var _config = _interopRequireDefault(require("./dist/settings/config"));

var _trayecto = _interopRequireDefault(require("./dist/routes/trayecto"));

var _combi = _interopRequireDefault(require("./dist/routes/combi"));

var _lugar = _interopRequireDefault(require("./dist/routes/lugar"));

var _mapa = _interopRequireDefault(require("./dist/routes/mapa"));

var _comentario_puntuacion = _interopRequireDefault(require("./dist/routes/comentario_puntuacion"));

var _administrador = _interopRequireDefault(require("./dist/routes/administrador"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//importacion del sevidor
//conecion a la bd
(0, _administrador.default)(_config.default);
(0, _comentario_puntuacion.default)(_config.default);
(0, _mapa.default)(_config.default);
(0, _lugar.default)(_config.default);
(0, _combi.default)(_config.default);
(0, _trayecto.default)(_config.default);

_config.default.listen(_config.default.get("port"), () => {
  console.log("servidor en puerto: ", _config.default.get("port"));
});
//# sourceMappingURL=index.js.map