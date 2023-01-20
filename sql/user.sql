-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 20. Jan 2023 um 23:01
-- Server-Version: 10.3.31-MariaDB-0+deb10u1
-- PHP-Version: 7.0.33-57+0~20211119.61+debian10~1.gbp5d8ba5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `369542_3_1`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `bild` varchar(400) NOT NULL,
  `username` varchar(42) NOT NULL,
  `firstname` varchar(80) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(42) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`ID`, `bild`, `username`, `firstname`, `lastname`, `email`, `password`) VALUES
(35, '', 'Andri_dB', 'Andri', 'Bros', 'andridebros@gmail.com', '$2y$10$BfYOtya.qlsRCyDF913sFOde63L0INT5PGjLbcni7GbP72ilJF5sy'),
(36, '', 'melina', 'melina', 'aeschbach', 'melina.aeschbach@gmail.com', '$2y$10$Ndbw3Bh63Qvk2fsNqPShPOPOF74/3QfqeOJyBkC/s3DQouMn4FB8K'),
(37, '', 'nind3', 'Nina', 'Berger', 'nina.berger@gmail.com', '$2y$10$XVlGJULYJyEFK6qDuGaRfOrmoaXEtwLU/yX9.XeVAyozxuiI/O6Bu'),
(38, '', 'Milenagaeh', 'Milena', 'Gähwiler', 'milena.gaehwiler@gmail.com', '$2y$10$vx5gnSLbzn9xmCd52S6l6.ow0W.vnRZc9zIwR/vAZ9Pa1O35fiR/C');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
