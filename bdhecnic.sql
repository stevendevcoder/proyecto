-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2024 a las 19:03:33
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avaluos`
--

CREATE TABLE `avaluos` (
  `id_avaluo` int(11) NOT NULL,
  `id_inmueble` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `fechaAvaluo` date DEFAULT NULL,
  `valorAvaluo` decimal(10,2) DEFAULT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comisiones`
--

CREATE TABLE `comisiones` (
  `id_comision` int(11) NOT NULL,
  `id_transaccion` int(11) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inmuebles`
--

CREATE TABLE `inmuebles` (
  `id_inmueble` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `tipo` enum('Casa','Apartamento','Oficina') DEFAULT NULL,
  `estado` enum('Disponible','Vendido','Arrendado') DEFAULT NULL,
  `direccion` varchar(100) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_ubicacion` int(11) DEFAULT NULL,
  `imagenes` blob DEFAULT NULL,
  `habitaciones` int(11) NOT NULL,
  `estrato` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `inmuebles`
--

INSERT INTO `inmuebles` (`id_inmueble`, `descripcion`, `precio`, `tipo`, `estado`, `direccion`, `id_cliente`, `id_ubicacion`, `imagenes`, `habitaciones`, `estrato`) VALUES
(1, 'asease', 12123, 'Casa', 'Disponible', '', 2, 1, NULL, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagocuentasdecobros`
--

CREATE TABLE `pagocuentasdecobros` (
  `id_pago` int(11) NOT NULL,
  `id_cuentaCobro` int(11) DEFAULT NULL,
  `metodoPago` enum('Efectivo','Tarjeta','Transferencia') DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id_personas` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id_personas`, `nombre`, `telefono`, `email`) VALUES
(1, 'Jhoan', 30000, 'hectirx@gmail.com'),
(2, 'G', 556, '');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

CREATE TABLE `sucursales` (
  `id_sucursales` int(11) NOT NULL,
  `nombreSucursal` varchar(255) DEFAULT NULL,
  `Direccion` varchar(255) DEFAULT NULL,
  `Telefono` int(11) DEFAULT NULL,
  `id_ubicacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipospersonas`
--

CREATE TABLE `tipospersonas` (
  `id_TipoPersonas` int(11) NOT NULL,
  `tipo` enum('Administrador','Empleado','Cliente') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacionesgeograficas`
--

CREATE TABLE `ubicacionesgeograficas` (
  `id_ubicacion` int(11) NOT NULL,
  `Pais` varchar(255) DEFAULT NULL,
  `Ciudad` varchar(255) DEFAULT NULL,
  `Departamento` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ubicacionesgeograficas`
--

INSERT INTO `ubicacionesgeograficas` (`id_ubicacion`, `Pais`, `Ciudad`, `Departamento`) VALUES
(1, 'colombia', 'Bogota', 'Cundinamarca');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  ADD KEY `id_ciudad` (`id_ubicacion`);

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
  ADD PRIMARY KEY (`id_TipoPersonas`);

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
  MODIFY `id_avaluo` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id_inmueble` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `pagocuentasdecobros`
--
ALTER TABLE `pagocuentasdecobros`
  MODIFY `id_pago` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id_personas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id_sucursales` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipospersonas`
--
ALTER TABLE `tipospersonas`
  MODIFY `id_TipoPersonas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ubicacionesgeograficas`
--
ALTER TABLE `ubicacionesgeograficas`
  MODIFY `id_ubicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  ADD CONSTRAINT `inmuebles_ibfk_2` FOREIGN KEY (`id_ubicacion`) REFERENCES `ubicacionesgeograficas` (`id_ubicacion`);

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
