-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2019 at 05:33 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myangular`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `gender` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phoneNumber` varchar(100) NOT NULL,
  `contactPreference` varchar(100) NOT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `department` varchar(100) NOT NULL,
  `isActive` varchar(25) NOT NULL,
  `photoPath` varchar(150) DEFAULT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `gender`, `email`, `phoneNumber`, `contactPreference`, `dateOfBirth`, `department`, `isActive`, `photoPath`, `date`, `time`) VALUES
(1, 'Suman Arora', 'Female', 'suman@gmail.com', '123456789', 'email', '1994-09-04', 'Software Developer', 'true', 'person_1.jpg', '2019-10-08', '29:25:31'),
(2, 'Sudha Arora', 'Female', 'sudha@gmail.com', '123456789', 'email', '1994-09-04', 'Laravel Developer', 'true', 'person_2.jpg', '2019-10-08', '29:25:31'),
(3, 'Reena Arora', 'Female', 'reena@gmail.com', '123456789', 'email', '1994-09-04', 'Graphics Developer', 'true', 'person_3.jpg', '2019-10-08', '29:25:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
