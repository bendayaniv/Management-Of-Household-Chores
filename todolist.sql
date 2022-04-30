-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2019 at 12:16 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todotask`
--

-- --------------------------------------------------------

--
-- Table structure for table `todolist`
--

DROP TABLE IF EXISTS `todolist`;
CREATE TABLE `todolist` (
  `todoID` int(11) NOT NULL,
  `todoDescription` varchar(1000) NOT NULL,
  `date` varchar(100) NOT NULL,
  `memberID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `todolist`
--

INSERT INTO `todolist` (`todoID`, `todoDescription`, `date`, `memberID`) VALUES
(5, 'lolo', '2019-10-31', 1),
(7, 'blabla', '2019-10-31', 2),
(8, 'gaga', '2019-10-31', 4),
(9, 'asd', '2019-10-31', 4),
(10, 'asd', '2019-10-31', 3),
(11, 'asd', '2019-10-31', 3),
(12, 'asd', '2019-10-31', 1),
(13, 'asd', '2019-10-31', 3),
(14, 'asd', '2019-10-16', 4),
(23, 'asdasd', '2019-10-31', 5),
(24, 'qwerq', '2019-10-31', 1),
(25, 'asdasdasdasd', '2019-10-31', 5),
(26, 'asdasdasdasd', '2019-10-31', 1),
(27, 'sadfasdf\nasdfa\nasdf\nasdf\nasdf\nasdf\nasdf\n', '2019-10-31', 2),
(29, 'sdfsdf', '2019-10-31', 2),
(30, 'sdfsdf', '2019-10-09', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todolist`
--
ALTER TABLE `todolist`
  ADD PRIMARY KEY (`todoID`),
  ADD KEY `memberID` (`memberID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todolist`
--
ALTER TABLE `todolist`
  MODIFY `todoID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `todolist`
--
ALTER TABLE `todolist`
  ADD CONSTRAINT `todolist_ibfk_1` FOREIGN KEY (`memberID`) REFERENCES `familymembers` (`memberID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
