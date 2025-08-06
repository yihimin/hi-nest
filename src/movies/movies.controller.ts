import { Controller, Delete, Get, Param, Patch, Post, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return 'This action returns all movies';
    }

    @Get('search')
    search(@Query('title') title: string) {
        return `title: ${title}`;
    }

    @Get(":id")
    getOne(@Param('id') movieId: string) {
        return `This action returns a movie with a specific ID: ${movieId}`;
    }

    @Post()
    create(@Body() movieData: any) {
        return 'This action adds a new movie';
    }

    @Delete(":id")
    remove(@Param('id') movieId: string) {
        return `This action removes a movie with ID: ${movieId}`;
    }

    @Patch(":id")
    patch(@Param('id') movieId: string, @Body() updateData: any) {
        return {
            updateMovie: movieId,
            updateData: updateData
        };
    }
}
