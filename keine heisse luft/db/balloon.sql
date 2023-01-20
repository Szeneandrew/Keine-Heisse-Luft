-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 10. Jan 2023 um 15:30
-- Server-Version: 10.3.31-MariaDB-0+deb10u1
-- PHP-Version: 7.0.33-57+0~20211119.61+debian10~1.gbp5d8ba5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `309962_5_2`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `balloon`
--

CREATE TABLE `balloon` (
  `ID` int(11) NOT NULL,
  `titel` varchar(100) NOT NULL,
  `bild` varchar(100) NOT NULL,
  `adresse` varchar(200) NOT NULL,
  `stadt` int(11) NOT NULL,
  `beschreibung` text NOT NULL,
  `user` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `balloon`
--

INSERT INTO `balloon` (`ID`, `titel`, `bild`, `adresse`, `stadt`, `beschreibung`, `user`, `status`, `timestamp`) VALUES
(27, 'Grosser Ballon', 'https://thishousedoesnotexist.org/assets/houses/1389612.png?_1662424062', 'Zugersee', 1, ' \r\nSchöner Heissluftballon am Zugersee', 18, 1, '2022-09-12 16:16:11'),
(28, 'Kleiner Ballon', 'https://thishousedoesnotexist.org/assets/houses/5064608.png?_1662424507', 'Berner Oberland', 1, 'Praktischer kleiner Heissluftballon für Einzelfahrten.', 19, 1, '2022-09-12 16:24:04'),
(35, 'Zwei Ballone', 'https://thishousedoesnotexist.org/assets/houses/7145806.png?_1662432627', 'St. Gallen', 1, 'Super für grössere Gruppen.', 16, 1, '2022-09-13 09:05:17'),
(36, 'Roter Smiley', 'https://thishousedoesnotexist.org/assets/houses/6234368.png?_1662432515', 'Biel', 2, 'Der süsse Ballon eignet sich für die ganze Familie.', 24, 1, '2022-09-13 12:09:12'),
(37, 'Rennballon', 'https://thishousedoesnotexist.org/assets/houses/8096236.png?_1662432758', 'Interlaken', 2, 'Ein guter Ballon für erfahrene schnelle Piloten.', 26, 0, '2022-09-13 15:11:35'),
(38, 'Grand Blub', 'https://thishousedoesnotexist.org/assets/houses/9909364.png?_1663274644', 'Lueg ufe', 3, ' Beste Ballon de Welt!', 27, 0, '2022-09-16 12:49:56');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `balloon`
--
ALTER TABLE `balloon`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `stadt` (`stadt`),
  ADD KEY `user` (`user`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `balloon`
--
ALTER TABLE `balloon`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
