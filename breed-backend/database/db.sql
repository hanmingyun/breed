-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 14, 2019 at 04:50 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `breed`
--

-- --------------------------------------------------------

--
-- Table structure for table `breed`
--

CREATE TABLE `breed` (
  `uid` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `imagePath` varchar(512) NOT NULL,
  `sub_categoryId` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `breed`
--

INSERT INTO `breed` (`uid`, `name`, `imagePath`, `sub_categoryId`, `created_at`, `updated_at`) VALUES
(1, 'boston', 'https://images.dog.ceo/breeds/spaniel-sussex/n02102480_582.jpg', 1, '2019-07-09 22:53:36', '2019-07-09 22:53:36'),
(2, 'english', 'https://images.dog.ceo/breeds/kelpie/n02105412_7211.jpg', 1, '2019-07-09 22:53:36', '2019-07-09 22:53:36'),
(3, 'french', 'https://images.dog.ceo/breeds/clumber/n02101556_8191.jpg', 1, '2019-07-09 22:53:36', '2019-07-09 22:53:36'),
(4, 'staffordshire', 'https://images.dog.ceo/breeds/springer-english/n02102040_1674.jpg', 2, '2019-07-09 22:54:10', '2019-07-09 22:54:10'),
(5, 'afghan', 'https://images.dog.ceo/breeds/spaniel-sussex/n02102480_582.jpg', 2, '2019-07-13 05:36:01', '2019-07-13 05:36:01'),
(6, 'basset', 'https://images.dog.ceo/breeds/spaniel-sussex/n02102480_582.jpg', 2, '2019-07-13 05:36:01', '2019-07-13 05:36:01'),
(7, 'blood', 'https://images.dog.ceo/breeds/spaniel-sussex/n02102480_582.jpg', 2, '2019-07-13 05:36:01', '2019-07-13 05:36:01'),
(8, 'ibizan', 'https://images.dog.ceo/breeds/spaniel-sussex/n02102480_582.jpg', 3, '2019-07-13 05:36:01', '2019-07-13 05:36:01'),
(9, 'bichon', 'https://images.dog.ceo/breeds/spaniel-sussex/n02102480_582.jpg', 4, '2019-07-13 05:36:01', '2019-07-13 05:36:01'),
(10, 'miniature', 'https://images.dog.ceo/breeds/spaniel-sussex/n02102480_582.jpg', 2, '2019-07-13 05:36:01', '2019-07-13 05:36:01');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `uid` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`uid`, `name`, `created_at`, `updated_at`) VALUES
(1, 'bulldog', '2019-07-09 22:50:34', '2019-07-09 22:50:34'),
(2, 'bullterrier', '2019-07-09 22:50:34', '2019-07-09 22:50:34'),
(3, 'cattledog', '2019-07-09 22:51:11', '2019-07-09 22:51:11'),
(4, 'deerhound', '2019-07-09 22:52:09', '2019-07-09 22:52:09'),
(5, 'elkhound', '2019-07-09 22:52:09', '2019-07-09 22:52:09'),
(6, 'frise', '2019-07-09 22:52:09', '2019-07-09 22:52:09'),
(7, 'greyhound', '2019-07-09 22:52:09', '2019-07-09 22:52:09'),
(8, 'airedale', '2019-07-09 22:52:32', '2019-07-09 22:52:32');

-- --------------------------------------------------------

--
-- Table structure for table `sub_category`
--

CREATE TABLE `sub_category` (
  `uid` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sub_category`
--

INSERT INTO `sub_category` (`uid`, `name`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, 'afghan', 1, '2019-07-09 23:42:34', '2019-07-09 23:42:34'),
(2, 'basset', 1, '2019-07-09 23:42:34', '2019-07-09 23:42:34'),
(3, 'ibizan', 2, '2019-07-09 23:43:02', '2019-07-09 23:43:02'),
(4, 'walker', 3, '2019-07-09 23:43:02', '2019-07-09 23:43:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `breed`
--
ALTER TABLE `breed`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `sub_categoryId` (`sub_categoryId`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `Fk_sub_category` (`parent_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `breed`
--
ALTER TABLE `breed`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sub_category`
--
ALTER TABLE `sub_category`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `breed`
--
ALTER TABLE `breed`
  ADD CONSTRAINT `breed_ibfk_1` FOREIGN KEY (`sub_categoryId`) REFERENCES `sub_category` (`uid`);

--
-- Constraints for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD CONSTRAINT `Fk_sub_category` FOREIGN KEY (`parent_id`) REFERENCES `category` (`uid`) ON DELETE NO ACTION ON UPDATE NO ACTION;
