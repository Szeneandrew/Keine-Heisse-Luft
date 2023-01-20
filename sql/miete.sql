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
-- Tabellenstruktur für Tabelle `miete`
--

CREATE TABLE `miete` (
  `ID` int(11) NOT NULL,
  `date` varchar(42) DEFAULT NULL,
  `mieter_ID` varchar(42) NOT NULL,
  `balloon_ID` varchar(42) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Daten für Tabelle `miete`
--

INSERT INTO `miete` (`ID`, `date`, `mieter_ID`, `balloon_ID`) VALUES
(209, '02.02.2023', '11', '35'),
(222, '29.01.2023', '37', '35'),
(223, '02.02.2023', '38', '37'),
(224, '05.02.2023', '38', '38'),
(225, '23.02.2023', '38', '47'),
(226, '03.03.2023', '38', '47'),
(227, '30.01.2023', '37', '27'),
(228, '28.01.2023', '37', '47'),
(229, '24.01.2023', '37', '38'),
(230, '02.02.2023', '36', '36');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `miete`
--
ALTER TABLE `miete`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `miete`
--
ALTER TABLE `miete`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=231;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
