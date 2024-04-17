USE [ImageLibrary]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[Sync_Image]
	@Id INT = NULL,
	@ImageId VARCHAR(50),
	@Title VARCHAR(50) = NULL,
	@SourceId INT = NULL,
	@CityId INT = NULL,
	@IsFavourite BIT = 0
AS
BEGIN
	SET NOCOUNT ON;

	IF (@id IS NOT NULL)
	BEGIN
		UPDATE [dbo].[Image]
			SET [Title] = @Title
				,[SourceId] = @SourceId
				,[CityId] = @CityId
				,[IsFavourite] = @IsFavourite
			WHERE [Id] = @Id;
	END
	ELSE
	BEGIN
		INSERT INTO [dbo].[Image]
				([ImageId]
				,[Title]
				,[SourceId]
				,[CityId]
				,[IsFavourite])
			VALUES
				(@ImageId
				,@Title
				,@SourceId
				,@CityId
				,@IsFavourite);
	END	
END
GO


