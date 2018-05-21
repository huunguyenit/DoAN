-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th5 20, 2018 lúc 04:35 PM
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
  `catergoryname` varchar(50) NOT NULL,
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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `image`
--

DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `IdProduct` varchar(10) NOT NULL,
  `Image1` varchar(50) NOT NULL,
  `Image2` varchar(50) NOT NULL,
  `Image3` varchar(50) NOT NULL,
  KEY `FK_img_product` (`IdProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `image`
--

INSERT INTO `image` (`IdProduct`, `Image1`, `Image2`, `Image3`) VALUES
('PDT0000001', 'samsunga81.jpg', 'samsunga82.jpg', 'samsunga83.jpg'),
('PDT0000002', 'sonyxperiaxzprenium1.jpg', 'sonyxperiaxzprenium2.jpg', 'sonyxperiaxzprenium3.jpg'),
('PDT0000003', 'asusfx5031.jpg', 'asusfx5032.jpg', 'asusfx5033.jpg'),
('PDT0000004', 'dellinsprion1.jpg', 'dellinsprion2.jpg', 'dellinsprion3.jpg'),
('PDT0000005', 'iphonex641.jpg', 'iphonex642.jpg', 'iphonex643.jpg'),
('PDT0000006', 'asuss510uai58250u1.jpg', 'asuss510uai58250u2.jpg', 'asuss510uai58250u3.jpg'),
('PDT0000007', 'oppof71.jpg', 'oppof72.jpg', 'oppof73.jpg'),
('PDT0000008', 'samsunggalaxys9128g1.jpg', 'samsunggalaxys9128g2.jpg', 'samsunggalaxys9128g3.jpg'),
('PDT0000009', 'huaweip20pro1.jpg', 'huaweip20pro2.jpg', 'huaweip20pro3.jpg'),
('PDT0000010', 'sonyxperiaxz11.jpg', 'sonyxperiaxz12.jpg', 'sonyxperiaxz13.jpg'),
('PDT0000011', 'bphone20171.jpg', 'bphone20172.jpg', 'bphone20173.jpg'),
('PDT0000012', 'vivov91.jpg', 'vivov92.jpg', 'vivov93.jpg'),
('PDT0000013', 'dellinsprion1555701.html', 'dellinsprion1555702.html', 'dellinsprion1555703.html'),
('PDT0000014', 'dellvostro35681.jpg', 'dellvostro35682.jpg', 'dellvostro35683.jpg'),
('PDT0000015', 'asusx542uq1.jpg', 'asusx542uq2.jpg', 'asusx542uq3.jpg'),
('PDT0000016', 'acere51.jpg', 'acere52.jpg', 'acere53.jpg'),
('PDT0000017', 'asusgl503vd1.jpg', 'asusgl503vd2.jpg', 'asusgl503vd3.jpg'),
('PDT0000018', 'ipadpro105inch64g1.jpg', 'ipadpro105inch64g2.jpg', 'ipadpro105inch64g3.jpg'),
('PDT0000019', 'samsunggalaxytaba61.jpg', 'samsunggalaxytaba62.jpg', 'samsunggalaxytaba63.jpg'),
('PDT0000020', 'huaweimediapadt3101.jpg', 'huaweimediapadt3102.jpg', 'huaweimediapadt3103.jpg'),
('PDT0000021', 'maseratighibli1.jpg', 'maseratighibli2.jpg', 'maseratighibli3.jpg'),
('PDT0000022', 'maseratiquattroporte1.jpg', 'maseratiquattroporte2.jpg', 'maseratiquattroporte3.jpg'),
('PDT0000023', 'audia8l1.jpg', 'audia8l2.jpg', 'audia8l3.jpg'),
('PDT0000024', 'bmwi81.jpg', 'bmwi82.jpg', 'bmwi83.jpg'),
('PDT0000025', 'toyotacamry201.jpg', 'toyotacamry202.jpg', 'toyotacamry203.jpg'),
('PDT0000026', 'mercedesbenzs650maybach1.jpg', 'mercedesbenzs650maybach2.jpg', 'mercedesbenzs650maybach3.jpg'),
('PDT0000027', 'cr7shirts1.jpg', 'cr7shirts2.jpg', 'cr7shirts3.jpg'),
('PDT0000028', '2usd1.jpg', '2usd2.jpg', '2usd3.jpg'),
('PDT0000029', 'samsungsmarttv40inch1.jpg', 'samsungsmarttv40inch2.jpg', 'samsungsmarttv40inch3.jpg'),
('PDT0000030', 'porsche911gt2rs1.jpg', 'porsche911gt2rs2.jpg', 'porsche911gt2rs3.jpg'),
('PDT0000031', 'sonyandroidoledtv4k65inch1.jpg', 'sonyandroidoledtv4k65inch2.jpg', 'sonyandroidoledtv4k65inch3.jpg'),
('PDT0000032', 'office3651.jpg', 'office3652.jpg', 'office3653.jpg'),
('PDT0000033', 'corelx71.jpg', 'corelx72.jpg', 'corelx73.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `Id` varchar(10) NOT NULL,
  `ProductName` varchar(50) NOT NULL,
  `PriceNow` int(11) NOT NULL,
  `PricePay` int(11) NOT NULL,
  `TimeUp` datetime NOT NULL,
  `TimeDown` datetime NOT NULL,
  `Cost` int(11) NOT NULL,
  `Status` bit(1) NOT NULL,
  `TurnPay` int(11) NOT NULL,
  `Detail` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`Id`, `ProductName`, `PriceNow`, `PricePay`, `TimeUp`, `TimeDown`, `Cost`, `Status`, `TurnPay`, `Detail`) VALUES
('PDT0000001', 'Sam Sung A8', 10000000, 0, '2018-05-18 11:14:35', '2018-05-19 12:00:00', 100000, b'1', 0, 'samsunga8.html'),
('PDT0000002', 'Sony Xperia XZ Prenium', 15000000, 0, '2018-05-18 04:41:35', '2018-05-19 12:00:00', 100000, b'1', 0, 'sonyxperiaxzprenium.html'),
('PDT0000003', 'Asus FX503', 25500000, 0, '2018-05-19 09:19:05', '2018-05-21 16:00:00', 200000, b'1', 0, 'asusfx503.html'),
('PDT0000004', 'Dell Inspiron 15 5570', 16100000, 0, '2018-05-19 00:17:59', '2018-05-24 16:00:00', 500000, b'1', 0, 'dellinsprion.html'),
('PDT0000005', 'iPhone X 64G', 1000000, 0, '2018-05-19 09:10:51', '2018-05-25 00:00:00', 100000, b'1', 0, 'iphonex64.html'),
('PDT0000006', 'Asus S510UA i5 8250U', 160000, 0, '2018-05-19 09:13:23', '2018-05-26 12:00:00', 100000, b'0', 0, 'asuss510uai58250u.html'),
('PDT0000007', 'OPPO F7', 0, 0, '2018-05-19 09:16:38', '2018-05-24 12:00:00', 10000, b'0', 0, 'oppof7.html'),
('PDT0000008', 'Sam Sung Galaxy S9+ 128G', 0, 0, '2018-05-19 09:21:34', '2018-05-24 12:00:00', 10000, b'0', 0, 'samsunggalaxys9128g.html'),
('PDT0000009', 'Huawei P20 Pro', 0, 0, '2018-05-19 09:24:55', '2018-05-31 00:00:00', 10000, b'0', 0, 'huaweip20pro.html'),
('PDT0000010', 'Sony Xperia XZ1', 0, 0, '2018-05-19 09:25:57', '2018-05-31 00:00:00', 100000, b'0', 0, 'sonyxperiaxz1.html'),
('PDT0000011', 'BPhone 2017', 0, 0, '2018-05-19 09:27:13', '2018-05-31 00:00:00', 10000, b'1', 0, 'bphone2017.html'),
('PDT0000012', 'Vivo V9', 0, 0, '2018-05-19 09:29:06', '2018-05-31 00:00:00', 10000, b'0', 0, 'vivov9.html'),
('PDT0000013', 'Dell Insprion 15 5570', 1000000, 0, '2018-05-19 09:33:02', '2018-05-31 00:00:00', 100000, b'1', 0, 'dellinsprion155570.html'),
('PDT0000014', 'Dell Vostro 3568', 1000000, 0, '2018-05-19 09:35:11', '2018-05-31 00:00:15', 100000, b'1', 0, 'dellvostro3568.html'),
('PDT0000015', 'Asus X542UQ', 16990, 0, '2018-05-19 09:36:48', '2018-05-31 00:00:15', 10000, b'1', 0, 'asusx542uq.html'),
('PDT0000016', 'Acer E5', 17490, 0, '2018-05-19 09:38:45', '2018-05-31 00:00:15', 10000, b'1', 0, 'acere5.html'),
('PDT0000017', 'Asus GL503VD', 26990, 0, '2018-05-19 09:40:16', '2018-05-31 00:00:00', 10000, b'1', 0, 'asusgl503vd.html'),
('PDT0000018', 'iPad Pro 10.5inch 64G', 19990, 0, '2018-05-19 09:42:02', '2018-05-31 00:00:00', 10000, b'1', 0, 'ipadpro105inch64g.html'),
('PDT0000019', 'Sam Sung Galaxy Tab A6', 80000, 0, '2018-05-19 09:43:34', '2018-05-31 00:00:00', 10000, b'1', 0, 'samsunggalaxytaba6.html'),
('PDT0000020', 'Huawei MediaPad T3 10', 50000, 0, '2018-05-19 09:44:55', '2018-05-31 00:00:00', 10000, b'1', 0, 'huaweimediapadt310.html'),
('PDT0000021', 'MASERATI Ghibli', 10000000, 0, '2018-05-19 09:48:22', '2018-05-31 00:00:00', 10000000, b'1', 0, 'maseratighibli.html'),
('PDT0000022', 'MASERATI QUATTROPORTE', 100000000, 0, '2018-05-19 09:50:14', '2018-05-31 00:00:00', 1000000, b'1', 0, 'maseratiquattroporte.html'),
('PDT0000023', 'Audi A8L', 10000000, 0, '2018-05-19 09:51:10', '2018-05-31 00:00:00', 1000000, b'1', 0, 'audia8l.html'),
('PDT0000024', 'BMW i8', 10000000, 0, '2018-05-19 09:52:01', '2018-05-31 00:00:00', 10000000, b'1', 0, 'bmwi8.html'),
('PDT0000025', 'Toyota Camry 2.0', 10000000, 0, '2018-05-19 09:53:03', '2018-07-31 00:00:00', 1000000, b'1', 0, 'toyotacamry20.html'),
('PDT0000026', 'Mercedes-Benz S650 Maybach', 1000000, 0, '2018-05-19 09:54:55', '2018-09-30 00:00:00', 1000000, b'1', 0, 'mercedesbenzs650maybach.html'),
('PDT0000030', 'Porsche 911 GT2 RS', 69900, 0, '2018-05-19 09:57:03', '2018-12-31 00:00:00', 10000, b'1', 0, 'porsche911gt2rs.html'),
('PDT0000027', 'CR7 Shirts', 100000, 0, '2018-05-19 10:00:19', '2018-06-30 00:00:00', 10000, b'1', 0, 'cr7shirts.html'),
('PDT0000028', '2USD', 2000, 0, '2018-05-19 10:02:50', '2018-06-29 00:00:00', 1000, b'1', 0, '2usd.html'),
('PDT0000029', 'Sam Sung Smart TV 40inch', 100000, 0, '2018-05-19 10:05:16', '2018-05-27 00:00:00', 10000, b'1', 0, 'samsungsmarttv40inch.html'),
('PDT0000031', 'Sony Android OLED TV 4K 65inch', 100, 0, '2018-05-19 10:07:49', '2018-05-26 00:00:00', 20000, b'1', 0, 'sonyandroidoledtv4k65inch.html'),
('PDT0000032', 'Office 365', 10000, 0, '2018-05-19 10:09:33', '2018-06-10 00:00:00', 20000, b'0', 0, 'office365.html'),
('PDT0000033', 'Corel X7', 100000, 0, '2018-05-19 10:10:48', '2018-06-01 10:10:52', 10000, b'1', 0, 'corelx7.html');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `Email` varchar(50) NOT NULL,
  `PassWord` varchar(50) NOT NULL,
  `FullName` varchar(50) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Rating` int(11) NOT NULL,
  `isAdmin` bit(1) NOT NULL,
  PRIMARY KEY (`Email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`Email`, `PassWord`, `FullName`, `Address`, `Rating`, `isAdmin`) VALUES
('huunguyenckit@gmail.com', 'huunguyen', 'Huu Nguyen', 'Ho Chi Minh City', 100, b'1'),
('munonqcgovap@gmail.com', 'govap', 'Huu Nguyen', 'Ho Chi Minh City', 100, b'0'),
('huunguyena6@gmail.com', 'dinhquan', 'Huu Nguyen', 'Ho Chi Minh', 100, b'0');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `userauctionproduct`
--

DROP TABLE IF EXISTS `userauctionproduct`;
CREATE TABLE IF NOT EXISTS `userauctionproduct` (
  `Email` varchar(50) NOT NULL,
  `IdProduct` varchar(10) NOT NULL,
  KEY `FK_uap_user` (`Email`),
  KEY `FK_uap_product` (`IdProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `userblockauction`
--

DROP TABLE IF EXISTS `userblockauction`;
CREATE TABLE IF NOT EXISTS `userblockauction` (
  `Email` varchar(50) NOT NULL,
  `IdProduct` varchar(10) NOT NULL,
  KEY `FK_uba_user` (`Email`),
  KEY `FK_uba_product` (`IdProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `userblockauction`
--

INSERT INTO `userblockauction` (`Email`, `IdProduct`) VALUES
('munonqcgovap@gmail.com', 'PDT0000003');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `userbuyproduct`
--

DROP TABLE IF EXISTS `userbuyproduct`;
CREATE TABLE IF NOT EXISTS `userbuyproduct` (
  `Email` varchar(50) NOT NULL,
  `IdProduct` varchar(10) NOT NULL,
  `Comment` varchar(50) NOT NULL,
  `Cost` int(11) NOT NULL,
  `Rating` bit(1) NOT NULL,
  KEY `FK_ubp_user` (`Email`),
  KEY `FK_ubp_product` (`IdProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `userupproduct`
--

DROP TABLE IF EXISTS `userupproduct`;
CREATE TABLE IF NOT EXISTS `userupproduct` (
  `Email` varchar(50) NOT NULL,
  `IdProduct` varchar(10) NOT NULL,
  KEY `FK_uup_user` (`Email`),
  KEY `FK_uup_product` (`IdProduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `userupproduct`
--

INSERT INTO `userupproduct` (`Email`, `IdProduct`) VALUES
('huunguyenckit@gmail.com', 'PDT0000029');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
