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
-- Tabellenstruktur für Tabelle `balloon`
--

CREATE TABLE `balloon` (
  `ID` int(11) NOT NULL,
  `titel` varchar(100) NOT NULL,
  `bild` varchar(400) NOT NULL,
  `adresse` varchar(200) NOT NULL,
  `price` varchar(42) NOT NULL,
  `beschreibung` text NOT NULL,
  `user` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `timestamp` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `balloon`
--

INSERT INTO `balloon` (`ID`, `titel`, `bild`, `adresse`, `price`, `beschreibung`, `user`, `status`, `timestamp`) VALUES
(27, 'Grosser Ballon', 'https://369542-3.web.fhgr.ch/bilder_ballone/grosser_ballon.jpg', 'Zugersee', '540.30', 'Schöner Heissluftballon am Zugersee', 35, 1, '2022-09-12 16:16:11'),
(35, 'Zwei Ballone', 'https://369542-3.web.fhgr.ch/bilder_ballone/zwei_ballone.jpg', 'St. Gallen', '469.40', 'Super für grössere Gruppen.', 37, 1, '2022-09-13 09:05:17'),
(36, 'Roter Smiley', 'https://369542-3.web.fhgr.ch/bilder_ballone/roter_smiley.jpg', 'Biel', '594.70', 'Der süsse Ballon eignet sich für die ganze Familie.', 24, 1, '2022-09-13 12:09:12'),
(37, 'Rennballon', 'https://369542-3.web.fhgr.ch/bilder_ballone/rennballon.jpg', 'Interlaken', '700', 'Ein guter Ballon für erfahrene schnelle Piloten.', 26, 0, '2022-09-13 15:11:35'),
(38, 'Grand Blub', 'https://369542-3.web.fhgr.ch/bilder_ballone/grand_blub.jpg', 'Lueg ufe', '869.10', ' Beste Ballon de Welt!', 38, 0, '2022-09-16 12:49:56'),
(47, 'fisch', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ytLm7uqtbtpM_CTd_KzN0rUyW7JhsW_BQ&usqp=CAU', 'Hinwil', '150', 'le fisch', 36, 0, NULL);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `balloon`
--
ALTER TABLE `balloon`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user` (`user`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `balloon`
--
ALTER TABLE `balloon`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
