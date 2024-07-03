-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-07-2024 a las 19:52:35
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdhecnic`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `arriendos`
--

CREATE TABLE `arriendos` (
  `id_arriendo` int(11) NOT NULL,
  `id_inmueble` int(11) DEFAULT NULL,
  `id_clienteInquilino` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `fechaInicio` date DEFAULT NULL,
  `fechaFin` date DEFAULT NULL,
  `montoArriendo` decimal(10,2) DEFAULT NULL,
  `estadoArriendo` enum('Activo','Finalizado','Cancelado') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avaluos`
--

CREATE TABLE `avaluos` (
  `id_avaluo` int(11) NOT NULL,
  `id_inmueble` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `fecha_avaluo` date DEFAULT NULL,
  `valor_avaluo` decimal(14,2) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `id_cita` int(11) NOT NULL,
  `motivo` enum('Vender','ArrendarPropietario','Comprar','Arrendar') NOT NULL,
  `fecha` date NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `estado` enum('En espera','Concretada') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comisiones`
--

CREATE TABLE `comisiones` (
  `id_comision` int(11) NOT NULL,
  `id_transaccion` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `id_compra` int(11) NOT NULL,
  `id_inmueble` int(11) DEFAULT NULL,
  `id_personaCompra` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `fechaVenta` date DEFAULT NULL,
  `montoVenta` decimal(10,2) DEFAULT NULL,
  `estadoCompra` enum('Pendiente','Completada','Cancelada') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentasdecobro`
--

CREATE TABLE `cuentasdecobro` (
  `id_cuentaCobro` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `periodoCobro` date DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `estadoCuenta` enum('Pendiente','Pagada','Vencida') DEFAULT NULL,
  `fechaVencimiento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiosderiesgo`
--

CREATE TABLE `estudiosderiesgo` (
  `id_estudio` int(11) NOT NULL,
  `id_inmueble` int(11) DEFAULT NULL,
  `fechaEstudio` date DEFAULT NULL,
  `ResultadoListaClinton` enum('Aprobado','Rechazado') DEFAULT NULL,
  `ResultadoCentral` enum('Aprobado','Rechazado') DEFAULT NULL,
  `CertificadoLibertad` enum('Aprobado','Rechazado') DEFAULT NULL,
  `Observaciones` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inmuebles`
--

CREATE TABLE `inmuebles` (
  `id_inmueble` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `tipo` enum('Casa','Apartamento','Oficina') DEFAULT NULL,
  `estado` enum('Revision','Disponible','Vendido','Arrendado') DEFAULT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_ciudad` int(11) DEFAULT NULL,
  `imagen` text DEFAULT NULL,
  `habitaciones` int(11) NOT NULL,
  `estrato` int(11) NOT NULL,
  `direccion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inmuebles`
--

INSERT INTO `inmuebles` (`id_inmueble`, `descripcion`, `precio`, `tipo`, `estado`, `id_cliente`, `id_ciudad`, `imagen`, `habitaciones`, `estrato`, `direccion`) VALUES
(3, 'asease', 0, 'Apartamento', 'Revision', 19, 1, 'data:image/jpeg;base64,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', 1, 1, 'Calle 98 B ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagocuentasdecobros`
--

CREATE TABLE `pagocuentasdecobros` (
  `id_pago` int(11) NOT NULL,
  `id_cuentaCobro` int(11) DEFAULT NULL,
  `metodoPago` enum('Efectivo','Tarjeta','Transferencia') DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id_personas` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `id_tipopersona` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id_personas`, `nombre`, `telefono`, `email`, `id_tipopersona`) VALUES
(10, 'Hector Steven Serna', '3209993692', 'walkpeting@gmail.com', 3),
(19, 'asease', '678699', 'emanuelpardo@hotmail.com', 12),
(20, 'Nicolasssss', '+601232353', 'stevensernazuluaga@gmail.com', 13),
(22, 'lorena lopezzzzzzzz', '232377777', 'emanuelpardo@hotmail.com', 15),
(23, 'holass', '999', 'lol@gmail.com', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personasarriendo`
--

CREATE TABLE `personasarriendo` (
  `id_personaArriendo` int(11) NOT NULL,
  `id_persona` int(11) DEFAULT NULL,
  `id_arriendo` int(11) DEFAULT NULL,
  `resultado` enum('Exitoso','Fallido') DEFAULT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personascompras`
--

CREATE TABLE `personascompras` (
  `id_personaCompra` int(11) NOT NULL,
  `id_persona` int(11) DEFAULT NULL,
  `id_compra` int(11) DEFAULT NULL,
  `resultado` enum('Exitoso','Fallido') DEFAULT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personasventas`
--

CREATE TABLE `personasventas` (
  `id_personaVenta` int(11) NOT NULL,
  `id_persona` int(11) DEFAULT NULL,
  `id_venta` int(11) DEFAULT NULL,
  `resultado` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

CREATE TABLE `sucursales` (
  `id_sucursales` int(11) NOT NULL,
  `nombre_sucursal` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(60) DEFAULT NULL,
  `id_ubicacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sucursales`
--

INSERT INTO `sucursales` (`id_sucursales`, `nombre_sucursal`, `direccion`, `telefono`, `id_ubicacion`) VALUES
(2, 'Norte bogota', 'asea12312', '6012131', 1),
(6, 'Norte Bogota', 'Calle 98 B ', '1231231231', 2),
(7, 'Sur Medellin jeje', 'Calle 98 B ', '32099936923', 2),
(8, 'Sede Madalena', 'Calle 98 B ', '23234', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipospersonas`
--

CREATE TABLE `tipospersonas` (
  `id_tipopersona` int(11) NOT NULL,
  `tipo` enum('Administrador','Empleado','Cliente') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipospersonas`
--

INSERT INTO `tipospersonas` (`id_tipopersona`, `tipo`) VALUES
(3, 'Administrador'),
(12, 'Cliente'),
(13, 'Empleado'),
(15, 'Administrador'),
(16, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacionesgeograficas`
--

CREATE TABLE `ubicacionesgeograficas` (
  `id_ubicacion` int(11) NOT NULL,
  `Pais` varchar(255) DEFAULT NULL,
  `Ciudad` varchar(255) DEFAULT NULL,
  `Departamento` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ubicacionesgeograficas`
--

INSERT INTO `ubicacionesgeograficas` (`id_ubicacion`, `Pais`, `Ciudad`, `Departamento`) VALUES
(1, 'Colombia', 'Bogota', 'Cundinamarca'),
(2, 'Colombia', 'Medellin', 'Antioquia'),
(3, 'Colombia', 'Cali', 'Valle del Cauca');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_venta` int(11) NOT NULL,
  `Id_Inmueble` int(11) DEFAULT NULL,
  `id_clienteComprador` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `fechaVenta` date DEFAULT NULL,
  `montoVenta` decimal(10,2) DEFAULT NULL,
  `estadoVenta` enum('Pendiente','Completada','Cancelada') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `arriendos`
--
ALTER TABLE `arriendos`
  ADD PRIMARY KEY (`id_arriendo`),
  ADD KEY `id_inmueble` (`id_inmueble`),
  ADD KEY `id_clienteInquilino` (`id_clienteInquilino`),
  ADD KEY `id_empleado` (`id_empleado`);

--
-- Indices de la tabla `avaluos`
--
ALTER TABLE `avaluos`
  ADD PRIMARY KEY (`id_avaluo`),
  ADD KEY `id_inmueble` (`id_inmueble`),
  ADD KEY `id_empleado` (`id_empleado`);

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`id_cita`);

--
-- Indices de la tabla `comisiones`
--
ALTER TABLE `comisiones`
  ADD PRIMARY KEY (`id_comision`),
  ADD KEY `id_transaccion` (`id_transaccion`),
  ADD KEY `id_empleado` (`id_empleado`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id_compra`),
  ADD KEY `id_inmueble` (`id_inmueble`),
  ADD KEY `id_personaCompra` (`id_personaCompra`),
  ADD KEY `id_empleado` (`id_empleado`);

--
-- Indices de la tabla `cuentasdecobro`
--
ALTER TABLE `cuentasdecobro`
  ADD PRIMARY KEY (`id_cuentaCobro`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- Indices de la tabla `estudiosderiesgo`
--
ALTER TABLE `estudiosderiesgo`
  ADD PRIMARY KEY (`id_estudio`),
  ADD KEY `id_inmueble` (`id_inmueble`);

--
-- Indices de la tabla `inmuebles`
--
ALTER TABLE `inmuebles`
  ADD PRIMARY KEY (`id_inmueble`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_ciudad` (`id_ciudad`);

--
-- Indices de la tabla `pagocuentasdecobros`
--
ALTER TABLE `pagocuentasdecobros`
  ADD PRIMARY KEY (`id_pago`),
  ADD KEY `id_cuentaCobro` (`id_cuentaCobro`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id_personas`);

--
-- Indices de la tabla `personasarriendo`
--
ALTER TABLE `personasarriendo`
  ADD PRIMARY KEY (`id_personaArriendo`),
  ADD KEY `id_persona` (`id_persona`),
  ADD KEY `id_arriendo` (`id_arriendo`);

--
-- Indices de la tabla `personascompras`
--
ALTER TABLE `personascompras`
  ADD PRIMARY KEY (`id_personaCompra`),
  ADD KEY `id_persona` (`id_persona`),
  ADD KEY `id_compra` (`id_compra`);

--
-- Indices de la tabla `personasventas`
--
ALTER TABLE `personasventas`
  ADD PRIMARY KEY (`id_personaVenta`),
  ADD KEY `id_persona` (`id_persona`),
  ADD KEY `id_venta` (`id_venta`);

--
-- Indices de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD PRIMARY KEY (`id_sucursales`),
  ADD KEY `id_ubicacion` (`id_ubicacion`);

--
-- Indices de la tabla `tipospersonas`
--
ALTER TABLE `tipospersonas`
  ADD PRIMARY KEY (`id_tipopersona`);

--
-- Indices de la tabla `ubicacionesgeograficas`
--
ALTER TABLE `ubicacionesgeograficas`
  ADD PRIMARY KEY (`id_ubicacion`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_venta`),
  ADD KEY `Id_Inmueble` (`Id_Inmueble`),
  ADD KEY `id_clienteComprador` (`id_clienteComprador`),
  ADD KEY `id_empleado` (`id_empleado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `arriendos`
--
ALTER TABLE `arriendos`
  MODIFY `id_arriendo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `avaluos`
--
ALTER TABLE `avaluos`
  MODIFY `id_avaluo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id_cita` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comisiones`
--
ALTER TABLE `comisiones`
  MODIFY `id_comision` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cuentasdecobro`
--
ALTER TABLE `cuentasdecobro`
  MODIFY `id_cuentaCobro` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estudiosderiesgo`
--
ALTER TABLE `estudiosderiesgo`
  MODIFY `id_estudio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `inmuebles`
--
ALTER TABLE `inmuebles`
  MODIFY `id_inmueble` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pagocuentasdecobros`
--
ALTER TABLE `pagocuentasdecobros`
  MODIFY `id_pago` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id_personas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `personasarriendo`
--
ALTER TABLE `personasarriendo`
  MODIFY `id_personaArriendo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personascompras`
--
ALTER TABLE `personascompras`
  MODIFY `id_personaCompra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personasventas`
--
ALTER TABLE `personasventas`
  MODIFY `id_personaVenta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sucursales`
--
ALTER TABLE `sucursales`
  MODIFY `id_sucursales` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tipospersonas`
--
ALTER TABLE `tipospersonas`
  MODIFY `id_tipopersona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `ubicacionesgeograficas`
--
ALTER TABLE `ubicacionesgeograficas`
  MODIFY `id_ubicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `arriendos`
--
ALTER TABLE `arriendos`
  ADD CONSTRAINT `arriendos_ibfk_1` FOREIGN KEY (`id_inmueble`) REFERENCES `inmuebles` (`id_inmueble`),
  ADD CONSTRAINT `arriendos_ibfk_2` FOREIGN KEY (`id_clienteInquilino`) REFERENCES `personas` (`id_personas`),
  ADD CONSTRAINT `arriendos_ibfk_3` FOREIGN KEY (`id_empleado`) REFERENCES `personas` (`id_personas`);

--
-- Filtros para la tabla `avaluos`
--
ALTER TABLE `avaluos`
  ADD CONSTRAINT `avaluos_ibfk_1` FOREIGN KEY (`id_inmueble`) REFERENCES `inmuebles` (`id_inmueble`),
  ADD CONSTRAINT `avaluos_ibfk_2` FOREIGN KEY (`id_empleado`) REFERENCES `personas` (`id_personas`);

--
-- Filtros para la tabla `comisiones`
--
ALTER TABLE `comisiones`
  ADD CONSTRAINT `comisiones_ibfk_1` FOREIGN KEY (`id_transaccion`) REFERENCES `ventas` (`id_venta`),
  ADD CONSTRAINT `comisiones_ibfk_2` FOREIGN KEY (`id_empleado`) REFERENCES `personas` (`id_personas`);

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`id_inmueble`) REFERENCES `inmuebles` (`id_inmueble`),
  ADD CONSTRAINT `compra_ibfk_2` FOREIGN KEY (`id_personaCompra`) REFERENCES `personas` (`id_personas`),
  ADD CONSTRAINT `compra_ibfk_3` FOREIGN KEY (`id_empleado`) REFERENCES `personas` (`id_personas`);

--
-- Filtros para la tabla `cuentasdecobro`
--
ALTER TABLE `cuentasdecobro`
  ADD CONSTRAINT `cuentasdecobro_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `personas` (`id_personas`);

--
-- Filtros para la tabla `estudiosderiesgo`
--
ALTER TABLE `estudiosderiesgo`
  ADD CONSTRAINT `estudiosderiesgo_ibfk_1` FOREIGN KEY (`id_inmueble`) REFERENCES `inmuebles` (`id_inmueble`);

--
-- Filtros para la tabla `inmuebles`
--
ALTER TABLE `inmuebles`
  ADD CONSTRAINT `inmuebles_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `personas` (`id_personas`),
  ADD CONSTRAINT `inmuebles_ibfk_2` FOREIGN KEY (`id_ciudad`) REFERENCES `ubicacionesgeograficas` (`id_ubicacion`);

--
-- Filtros para la tabla `pagocuentasdecobros`
--
ALTER TABLE `pagocuentasdecobros`
  ADD CONSTRAINT `pagocuentasdecobros_ibfk_1` FOREIGN KEY (`id_cuentaCobro`) REFERENCES `cuentasdecobro` (`id_cuentaCobro`);

--
-- Filtros para la tabla `personasarriendo`
--
ALTER TABLE `personasarriendo`
  ADD CONSTRAINT `personasarriendo_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_personas`),
  ADD CONSTRAINT `personasarriendo_ibfk_2` FOREIGN KEY (`id_arriendo`) REFERENCES `arriendos` (`id_arriendo`);

--
-- Filtros para la tabla `personascompras`
--
ALTER TABLE `personascompras`
  ADD CONSTRAINT `personascompras_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_personas`),
  ADD CONSTRAINT `personascompras_ibfk_2` FOREIGN KEY (`id_compra`) REFERENCES `compra` (`id_compra`);

--
-- Filtros para la tabla `personasventas`
--
ALTER TABLE `personasventas`
  ADD CONSTRAINT `personasventas_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_personas`),
  ADD CONSTRAINT `personasventas_ibfk_2` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id_venta`);

--
-- Filtros para la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD CONSTRAINT `sucursales_ibfk_1` FOREIGN KEY (`id_ubicacion`) REFERENCES `ubicacionesgeograficas` (`id_ubicacion`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`Id_Inmueble`) REFERENCES `inmuebles` (`id_inmueble`),
  ADD CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`id_clienteComprador`) REFERENCES `personas` (`id_personas`),
  ADD CONSTRAINT `ventas_ibfk_3` FOREIGN KEY (`id_empleado`) REFERENCES `personas` (`id_personas`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
