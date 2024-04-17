USE [ImageLibrary]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Image](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ImageId] [varchar](50) NOT NULL,
	[Title] [varchar](50) NULL,
	[SourceId] [int] NULL,
	[CityId] [int] NULL,
	[IsFavourite] [bit] NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Image] ON 
GO
INSERT [dbo].[Image] ([Id], [ImageId], [Title], [SourceId], [CityId], [IsFavourite]) VALUES (1, N'fruit1.jpeg', N'Fruit1', 4, 1, 1)
GO
INSERT [dbo].[Image] ([Id], [ImageId], [Title], [SourceId], [CityId], [IsFavourite]) VALUES (2, N'fruit2.jpeg', N'Fruit2', 4, 8, 0)
GO
INSERT [dbo].[Image] ([Id], [ImageId], [Title], [SourceId], [CityId], [IsFavourite]) VALUES (3, N'fruit3.jpeg', N'Fruit3', 3, 3, 0)
GO
INSERT [dbo].[Image] ([Id], [ImageId], [Title], [SourceId], [CityId], [IsFavourite]) VALUES (4, N'fruit4.jpeg', N'Fruit4', 4, 4, 0)
GO
INSERT [dbo].[Image] ([Id], [ImageId], [Title], [SourceId], [CityId], [IsFavourite]) VALUES (5, N'fruit5.jpeg', N'Fruit5', 5, 5, 0)
GO
INSERT [dbo].[Image] ([Id], [ImageId], [Title], [SourceId], [CityId], [IsFavourite]) VALUES (6, N'fruit6.jpeg', N'Fruit6', 6, 6, 0)
GO
INSERT [dbo].[Image] ([Id], [ImageId], [Title], [SourceId], [CityId], [IsFavourite]) VALUES (7, N'fruit7.jpeg', N'Fruit7', 7, 7, 0)
GO
INSERT [dbo].[Image] ([Id], [ImageId], [Title], [SourceId], [CityId], [IsFavourite]) VALUES (8, N'fruit8.jpeg', N'Fruit8', 8, 8, 0)
GO
INSERT [dbo].[Image] ([Id], [ImageId], [Title], [SourceId], [CityId], [IsFavourite]) VALUES (9, N'fruit9.jpeg', N'Fruit9', 9, 9, 0)
GO
INSERT [dbo].[Image] ([Id], [ImageId], [Title], [SourceId], [CityId], [IsFavourite]) VALUES (10, N'fruit10.jpeg', N'Fruit10', 10, 10, 0)
GO
INSERT [dbo].[Image] ([Id], [ImageId], [Title], [SourceId], [CityId], [IsFavourite]) VALUES (11, N'fruit11.jpeg', N'Fruit11', 10, 10, 0)

GO
SET IDENTITY_INSERT [dbo].[Image] OFF
GO
ALTER TABLE [dbo].[Image] ADD  CONSTRAINT [DF_Image_IsFavorite]  DEFAULT ((0)) FOR [IsFavourite]
GO
