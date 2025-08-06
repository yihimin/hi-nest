import { Controller, Delete, Get, Param, Patch, Post, Body } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return 'This action returns all movies';
    }

    @Get("/:id")
    getOne(@Param('id') id: string) {
        return `This action returns a movie with a specific ID: ${id}`;
    }

    @Post()
    create(@Body() movieData: any) {
        return 'This action adds a new movie';
    }

    @Delete("/:id")
    remove(@Param('id') id: string) {
        return `This action removes a movie with ID: ${id}`;
    }

    @Patch("/:id")
    patch(@Param('id') id: string) {
        return `This action updates a movie with ID: ${id}`;
    }
}
