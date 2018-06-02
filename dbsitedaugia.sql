-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th6 01, 2018 lúc 04:34 AM
-- Phiên bản máy phục vụ: 5.7.19
-- Phiên bản PHP: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `dbsitedaugia`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `catergory`
--

DROP TABLE IF EXISTS `catergory`;
CREATE TABLE IF NOT EXISTS `catergory` (
  `Id` varchar(10) NOT NULL,
  `catergoryname` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `catergory`
--

INSERT INTO `catergory` (`Id`, `catergoryname`) VALUES
('CMX0000001', 'Smart Phone'),
('CMX0000002', 'Laptop'),
('CMX0000003', 'Other'),
('CMX0000004', 'Car'),
('CMX0000005', 'SoftWave'),
('CMX0000006', 'Television'),
('CMX0000007', 'Tablet');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
