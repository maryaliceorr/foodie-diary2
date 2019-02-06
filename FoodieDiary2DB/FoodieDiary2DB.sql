USE [master]
GO
/****** Object:  Database [FoodieDiaryDB]    Script Date: 2/6/2019 5:10:58 PM ******/
CREATE DATABASE [FoodieDiaryDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'FoodieDiaryDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\FoodieDiaryDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'FoodieDiaryDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\FoodieDiaryDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [FoodieDiaryDB] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [FoodieDiaryDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [FoodieDiaryDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [FoodieDiaryDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [FoodieDiaryDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [FoodieDiaryDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [FoodieDiaryDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [FoodieDiaryDB] SET  MULTI_USER 
GO
ALTER DATABASE [FoodieDiaryDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [FoodieDiaryDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [FoodieDiaryDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [FoodieDiaryDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [FoodieDiaryDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [FoodieDiaryDB] SET QUERY_STORE = OFF
GO
USE [FoodieDiaryDB]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [FoodieDiaryDB]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 2/6/2019 5:10:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CourseName] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dish]    Script Date: 2/6/2019 5:10:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dish](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[MealId] [int] NULL,
	[DishName] [varchar](255) NULL,
	[CourseId] [int] NULL,
	[DishTypeId] [int] NULL,
	[Ingredient] [varchar](255) NULL,
	[Picture] [varchar](255) NULL,
	[Appearance] [int] NULL,
	[Aroma] [int] NULL,
	[Creativity] [int] NULL,
	[Taste] [int] NULL,
	[Description] [varchar](255) NULL,
	[Price] [float] NULL,
	[TotalScore] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DishType]    Script Date: 2/6/2019 5:10:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DishType](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[DishTypeName] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FoodGenre]    Script Date: 2/6/2019 5:10:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FoodGenre](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[FoodGenreName] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Meal]    Script Date: 2/6/2019 5:10:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Meal](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[MealName] [varchar](255) NULL,
	[Date] [datetime] NULL,
	[MealTypeId] [int] NULL,
	[RestaurantId] [int] NULL,
 CONSTRAINT [PK_Meal] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MealType]    Script Date: 2/6/2019 5:10:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MealType](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[MealTypeName] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Restaurant]    Script Date: 2/6/2019 5:10:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Restaurant](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](255) NULL,
	[Notes] [varchar](255) NULL,
	[OpenStatus] [int] NULL,
	[Address] [varchar](255) NULL,
	[City] [varchar](255) NULL,
	[ZipCode] [int] NULL,
	[Longitude] [float] NULL,
	[Latitude] [float] NULL,
	[FoodGenreId] [int] NULL,
	[Telephone] [int] NULL,
	[Website] [varchar](255) NULL,
	[StateAbbrId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 2/6/2019 5:10:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](255) NULL,
	[Password] [varchar](255) NULL,
	[FirebaseId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Course] ON 
GO
INSERT [dbo].[Course] ([Id], [CourseName]) VALUES (1, N'Appetizer')
GO
INSERT [dbo].[Course] ([Id], [CourseName]) VALUES (2, N'Soup/Salad')
GO
INSERT [dbo].[Course] ([Id], [CourseName]) VALUES (3, N'Entree')
GO
INSERT [dbo].[Course] ([Id], [CourseName]) VALUES (4, N'Side')
GO
INSERT [dbo].[Course] ([Id], [CourseName]) VALUES (5, N'Dessert')
GO
INSERT [dbo].[Course] ([Id], [CourseName]) VALUES (6, N'Drink')
GO
INSERT [dbo].[Course] ([Id], [CourseName]) VALUES (7, N'Snack')
GO
SET IDENTITY_INSERT [dbo].[Course] OFF
GO
SET IDENTITY_INSERT [dbo].[Dish] ON 
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (1, 1, N'Shackburger', 3, 1, N'ground beef, tomato, mayo, relish, ketchup, green leaf lettuce', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 4, 4, 2, 4, N'simple cheeseburger with tomato, lettuce and shacksauce', 5.29, 3.5)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (2, 1, N'Bacon Cheese Fries', 4, 9, N'potato, american cheese, cream, bacon ', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 3, 4, 3, 4, N'crinkle fries with cheese and bacon', 4.49, 3.5)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (3, 2, N'Cappelletti', 3, 3, N'ricotta, truffle, prosciutto, pasta, butter, garlic, tortellini', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 5, 5, 5, 5, N'truffled ricotta ravioli, prosciutto, butter', 25, 5)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (4, 2, N'Fusilli', 1, 3, N'pork, tomato, parmesean, robiolina cheese, fusilli', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 5, 5, 4, 5, N'neopolitan pork shoulder, ragu, robiolina cheese', 22, 4.75)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (5, 3, N'She Crab Soup', 2, 18, N'crab, cream, sherry, garlic, onion, fish stock', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 4, 5, 4, 5, N'traditional she crap soup finished with sherry with cheese straw', 11, 4.5)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (6, 3, N'Red Wine Braised Wagyu Beef', 3, 12, N'chuck short rib, orecchiette pasta, mushroom, cream, wine, onion, garlic, parmesean', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 5, 4, 5, 5, N'Wagyu chuck short ribs braised until fork tender. Served over Orecchiette pasta with wild mushroom bolognese', 37, 4.75)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (7, 4, N'Pulled Pork Taco', 3, 4, N'pork, tomatillos, cabbage, onion, yogurt, jalepeno, avocado, corn tortilla', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 4, 4, 5, 5, N'Pulled pork taco with tomatillos, shaved cabbage, onion and spicy yogurt sauce - be sure to add avocado to it (up charge of 50 cents per taco)', 3, 4.5)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (8, 4, N'Cast Iron Chicken Taco', 3, 4, N'chicken, tomato, cilantro, onion, avocado, corn tortilla, sour cream, avocado', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 3, 4, 4, 5, N'Skillet Chicken with salsa verde and sour cream (be sure to add avocado 50 cents extra per taco)', 3, 4)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (9, 4, N'Elote', 4, 16, N'Corn, lime, cotija cheese, mayo, chili powder', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 4, 4, 3, 5, N'Mexican style street corn with cheese (can be on the cob or off the cob)', 3, 4)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (10, 5, N'Shrimp and Corn Tamale', 1, 15, N'Corn, tiger shrimp, garlic, red bell pepper, cream, wine, masa', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 4, 4, 4, 5, N'Tiger Shrimp and Roasted Garlic Corn Tamale', 19, 4.25)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (11, 5, N'Chocolate Sticky Toffee Pudding', 5, 8, N'Vanilla, cream, sugar, caramel, cajeta, salt, chocolate, eggs', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 3, 3, 3, 4, N'Chocolate Vanilla Swirtl Ice Cream with Salted Cajeta', 12, 3.25)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (12, 6, N'Funghi Pizza', 3, 2, N'signoria mushrooms, roasted garlic, onions, thyme, fontina, truffle oil, flour, water, salt, yeast, olive oil, mozzarella', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 4, 5, 4, 5, N'Wild mushroom pizza with truffle oil and caramelized onions', 19, 4.5)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (13, 6, N'Charles Krug Napa Valley Cabernet Sauvignon ', 6, 19, N'Cabernet grapes ', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 4, 4, 3, 4, N'Bottle of Cabernet Wine - Notes of black cherry, blackberry, black currant and cocoa, made in Napa Valley from the Yountville vineyards', 39, 3.75)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (14, 7, N' Filet Mignon', 12, 3, N'Beef (tenderloin cut), butter, salt, pepper', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 4, 4, 2, 4, N'Simply grilled Filet mignon with butter', 38, 3.5)
GO
INSERT [dbo].[Dish] ([id], [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture], [Appearance], [Aroma], [Creativity], [Taste], [Description], [Price], [TotalScore]) VALUES (15, 7, N'Macaroni and Cheese', 4, 3, N'macaroni, butter, cheddar cheese, andouille, salt, pepper, garlic, cream', N'https://www.thespruceeats.com/thmb/gOez2Jg0npSFXsoCxC3UfT5ytmA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg', 3, 4, 3, 3, N'Mac and cheese with andouille and cheddar cheese', 10, 3.25)
GO
SET IDENTITY_INSERT [dbo].[Dish] OFF
GO
SET IDENTITY_INSERT [dbo].[DishType] ON 
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (1, N'Burger')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (2, N'Pizza')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (3, N'Pasta')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (4, N'Taco')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (5, N'BBQ')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (6, N'Sushi')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (7, N'Coffee/Tea')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (8, N'Baked Good/Sweet Treat')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (9, N'Salty Snack')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (10, N'Sandwich/Deli')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (11, N'Ice Cream/Frozen Treat')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (12, N'Beef/Steak')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (13, N'Pork')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (14, N'Poultry/Chicken')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (15, N'Seafood')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (16, N'Vegetable')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (17, N'Salad')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (18, N'Soup')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (19, N'Wine')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (20, N'Beer')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (21, N'Cocktail')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (22, N'Liquor')
GO
INSERT [dbo].[DishType] ([id], [DishTypeName]) VALUES (23, N'Other')
GO
SET IDENTITY_INSERT [dbo].[DishType] OFF
GO
SET IDENTITY_INSERT [dbo].[FoodGenre] ON 
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (1, N'American')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (2, N'British')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (3, N'Caribbean')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (4, N'Chinese')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (5, N'French')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (6, N'Greek')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (7, N'Indian ')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (8, N'Italian')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (9, N'Japanese')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (10, N'Mediterranean')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (11, N'Mexican')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (12, N'Moroccan')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (13, N'Southern')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (14, N'Spanish')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (15, N'Thai')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (16, N'Turkish')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (17, N'Vietnamese')
GO
INSERT [dbo].[FoodGenre] ([id], [FoodGenreName]) VALUES (18, N'Other')
GO
SET IDENTITY_INSERT [dbo].[FoodGenre] OFF
GO
SET IDENTITY_INSERT [dbo].[Meal] ON 
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (1, 1, N'meal example', CAST(N'2019-01-28T00:00:00.000' AS DateTime), 1, 1)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (2, 2, N'meal example', CAST(N'2019-01-29T00:00:00.000' AS DateTime), 2, 2)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (3, 3, N'meal example', CAST(N'2019-01-30T00:00:00.000' AS DateTime), 3, 3)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (4, 4, N'meal example', CAST(N'2019-01-31T00:00:00.000' AS DateTime), 4, 4)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (5, 5, N'meal example', CAST(N'2019-02-01T00:00:00.000' AS DateTime), 5, 5)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (6, 6, N'meal example', CAST(N'2019-02-02T00:00:00.000' AS DateTime), 6, 6)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (7, 7, N'meal example', CAST(N'2019-02-03T00:00:00.000' AS DateTime), 7, 7)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (8, 8, N'meal example', CAST(N'2019-02-04T00:00:00.000' AS DateTime), 8, 8)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (9, 9, N'meal example', CAST(N'2019-02-05T00:00:00.000' AS DateTime), 9, 9)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (10, 10, N'meal example', CAST(N'2019-02-06T00:00:00.000' AS DateTime), 10, 10)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (11, 11, N'meal example', CAST(N'2019-02-07T00:00:00.000' AS DateTime), 11, 11)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (12, 12, N'meal example', CAST(N'2019-02-08T00:00:00.000' AS DateTime), 12, 12)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (13, 13, N'meal example', CAST(N'2019-02-09T00:00:00.000' AS DateTime), 13, 13)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (14, 14, N'meal example', CAST(N'2019-02-10T00:00:00.000' AS DateTime), 14, 14)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (15, 15, N'meal example', CAST(N'2019-02-11T00:00:00.000' AS DateTime), 15, 15)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (16, 16, N'meal example', CAST(N'2019-02-12T00:00:00.000' AS DateTime), 16, 16)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (17, 17, N'meal example', CAST(N'2019-02-13T00:00:00.000' AS DateTime), 17, 17)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (18, 18, N'meal example', CAST(N'2019-02-14T00:00:00.000' AS DateTime), 18, 18)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (19, 19, N'meal example', CAST(N'2019-02-15T00:00:00.000' AS DateTime), 19, 19)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (20, 20, N'meal example', CAST(N'2019-02-16T00:00:00.000' AS DateTime), 20, 20)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (21, 21, N'meal example', CAST(N'2019-02-17T00:00:00.000' AS DateTime), 21, 21)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (22, 22, N'meal example', CAST(N'2019-02-18T00:00:00.000' AS DateTime), 22, 22)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (23, 23, N'meal example', CAST(N'2019-02-19T00:00:00.000' AS DateTime), 23, 23)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (24, 24, N'meal example', CAST(N'2019-02-20T00:00:00.000' AS DateTime), 24, 24)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (25, 25, N'meal example', CAST(N'2019-02-21T00:00:00.000' AS DateTime), 25, 25)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (26, 26, N'meal example', CAST(N'2019-02-22T00:00:00.000' AS DateTime), 26, 26)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (27, 27, N'meal example', CAST(N'2019-02-23T00:00:00.000' AS DateTime), 27, 27)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (28, 28, N'meal example', CAST(N'2019-02-24T00:00:00.000' AS DateTime), 28, 28)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (29, 29, N'meal example', CAST(N'2019-02-25T00:00:00.000' AS DateTime), 29, 29)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (30, 30, N'meal example', CAST(N'2019-02-26T00:00:00.000' AS DateTime), 30, 30)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (31, 31, N'meal example', CAST(N'2019-02-27T00:00:00.000' AS DateTime), 31, 31)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (32, 32, N'meal example', CAST(N'2019-02-28T00:00:00.000' AS DateTime), 32, 32)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (33, 33, N'meal example', CAST(N'2019-03-01T00:00:00.000' AS DateTime), 33, 33)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (34, 34, N'meal example', CAST(N'2019-03-02T00:00:00.000' AS DateTime), 34, 34)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (35, 35, N'meal example', CAST(N'2019-03-03T00:00:00.000' AS DateTime), 35, 35)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (36, 36, N'meal example', CAST(N'2019-03-04T00:00:00.000' AS DateTime), 36, 36)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (37, 37, N'meal example', CAST(N'2019-03-05T00:00:00.000' AS DateTime), 37, 37)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (38, 38, N'meal example', CAST(N'2019-03-06T00:00:00.000' AS DateTime), 38, 38)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (39, 39, N'meal example', CAST(N'2019-03-07T00:00:00.000' AS DateTime), 39, 39)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (40, 40, N'meal example', CAST(N'2019-03-08T00:00:00.000' AS DateTime), 40, 40)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (41, 41, N'meal example', CAST(N'2019-03-09T00:00:00.000' AS DateTime), 41, 41)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (42, 42, N'meal example', CAST(N'2019-03-10T00:00:00.000' AS DateTime), 42, 42)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (43, 43, N'meal example', CAST(N'2019-03-11T00:00:00.000' AS DateTime), 43, 43)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (44, 44, N'meal example', CAST(N'2019-03-12T00:00:00.000' AS DateTime), 44, 44)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (45, 45, N'meal example', CAST(N'2019-03-13T00:00:00.000' AS DateTime), 45, 45)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (46, 46, N'meal example', CAST(N'2019-03-14T00:00:00.000' AS DateTime), 46, 46)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (47, 47, N'meal example', CAST(N'2019-03-15T00:00:00.000' AS DateTime), 47, 47)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (48, 48, N'meal example', CAST(N'2019-03-16T00:00:00.000' AS DateTime), 48, 48)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (49, 49, N'meal example', CAST(N'2019-03-17T00:00:00.000' AS DateTime), 49, 49)
GO
INSERT [dbo].[Meal] ([Id], [UserId], [MealName], [Date], [MealTypeId], [RestaurantId]) VALUES (50, 50, N'meal example', CAST(N'2019-03-18T00:00:00.000' AS DateTime), 50, 50)
GO
SET IDENTITY_INSERT [dbo].[Meal] OFF
GO
SET IDENTITY_INSERT [dbo].[MealType] ON 
GO
INSERT [dbo].[MealType] ([id], [MealTypeName]) VALUES (1, N'Breakfast')
GO
INSERT [dbo].[MealType] ([id], [MealTypeName]) VALUES (2, N'Brunch')
GO
INSERT [dbo].[MealType] ([id], [MealTypeName]) VALUES (3, N'Lunch')
GO
INSERT [dbo].[MealType] ([id], [MealTypeName]) VALUES (4, N'Dinner')
GO
INSERT [dbo].[MealType] ([id], [MealTypeName]) VALUES (5, N'Libations')
GO
INSERT [dbo].[MealType] ([id], [MealTypeName]) VALUES (6, N'Snack Time')
GO
SET IDENTITY_INSERT [dbo].[MealType] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (1, N'user1', N'password123', 1)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (2, N'user2', N'password123', 2)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (3, N'user3', N'password123', 3)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (4, N'user4', N'password123', 4)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (5, N'user5', N'password123', 5)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (6, N'user6', N'password123', 6)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (7, N'user7', N'password123', 7)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (8, N'user8', N'password123', 8)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (9, N'user9', N'password123', 9)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (10, N'user10', N'password123', 10)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (11, N'user11', N'password123', 11)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (12, N'user12', N'password123', 12)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (13, N'user13', N'password123', 13)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (14, N'user14', N'password123', 14)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (15, N'user15', N'password123', 15)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (16, N'user16', N'password123', 16)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (17, N'user17', N'password123', 17)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (18, N'user18', N'password123', 18)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (19, N'user19', N'password123', 19)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (20, N'user20', N'password123', 20)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (21, N'user21', N'password123', 21)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (22, N'user22', N'password123', 22)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (23, N'user23', N'password123', 23)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (24, N'user24', N'password123', 24)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (25, N'user25', N'password123', 25)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (26, N'user26', N'password123', 26)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (27, N'user27', N'password123', 27)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (28, N'user28', N'password123', 28)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (29, N'user29', N'password123', 29)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (30, N'user30', N'password123', 30)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (31, N'user31', N'password123', 31)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (32, N'user32', N'password123', 32)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (33, N'user33', N'password123', 33)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (34, N'user34', N'password123', 34)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (35, N'user35', N'password123', 35)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (36, N'user36', N'password123', 36)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (37, N'user37', N'password123', 37)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (38, N'user38', N'password123', 38)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (39, N'user39', N'password123', 39)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (40, N'user40', N'password123', 40)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (41, N'user41', N'password123', 41)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (42, N'user42', N'password123', 42)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (43, N'user43', N'password123', 43)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (44, N'user44', N'password123', 44)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (45, N'user45', N'password123', 45)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (46, N'user46', N'password123', 46)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (47, N'user47', N'password123', 47)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (48, N'user48', N'password123', 48)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (49, N'user49', N'password123', 49)
GO
INSERT [dbo].[Users] ([Id], [Username], [Password], [FirebaseId]) VALUES (50, N'user50', N'password123', 50)
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
USE [master]
GO
ALTER DATABASE [FoodieDiaryDB] SET  READ_WRITE 
GO
